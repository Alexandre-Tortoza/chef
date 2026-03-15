<template>
  <div class="p-8 h-full bg-shaft-50 overflow-y-auto">
    <LoadingSpinner v-if="loading" />

    <template v-else-if="list">
      <!-- Header -->
      <div class="flex justify-between items-center mb-6">
        <div>
          <h1 class="text-2xl font-bold">{{ list.name }}</h1>
          <span v-if="list.recurrence && list.recurrence !== 'none'" class="text-sm text-shaft-500">
            {{ recurrenceLabel(list.recurrence) }}
          </span>
        </div>
        <div class="flex gap-2">
          <button
            class="bg-shaft-950 text-shaft-50 px-4 py-2 rounded flex items-center gap-2 hover:bg-shaft-800 transition-colors"
            @click="openAddItem"
          >
            <Plus :size="18" />
            Adicionar Item
          </button>
          <button
            class="text-shaft-600 hover:text-red-600 border-2 border-shaft-950 px-3 py-2 rounded transition-colors"
            @click="confirmDeleteList"
          >
            <Trash2 :size="18" />
          </button>
        </div>
      </div>

      <EmptyState v-if="!list.items || list.items.length === 0" message="Lista vazia. Adicione itens!">
        <template #icon>
          <ShoppingCart :size="48" />
        </template>
      </EmptyState>

      <!-- Items list -->
      <div v-else class="space-y-2">
        <div
          v-for="item in list.items"
          :key="item.id"
          class="bg-shaft-50 rounded border-2 border-shaft-950 px-4 py-3 flex items-center justify-between"
          :class="{ 'opacity-50': item.purchased }"
        >
          <div class="flex items-center gap-3">
            <button
              v-if="!item.purchased"
              class="w-6 h-6 border-2 border-shaft-950 rounded flex items-center justify-center hover:bg-healthy transition-colors"
              @click="purchase(item.id)"
            >
              <Check v-if="item.purchased" :size="14" />
            </button>
            <div v-else class="w-6 h-6 bg-healthy border-2 border-shaft-950 rounded flex items-center justify-center">
              <Check :size="14" />
            </div>
            <div>
              <span class="font-medium" :class="{ 'line-through': item.purchased }">
                {{ item.ingredient?.name || 'Ingrediente' }}
              </span>
              <span class="text-shaft-600 ml-2">
                {{ item.quantity }}{{ item.unit ? ` ${item.unit}` : '' }}
              </span>
              <span v-if="item.notes" class="text-shaft-500 text-sm ml-2">({{ item.notes }})</span>
            </div>
          </div>
          <div class="flex gap-2">
            <button
              v-if="!item.purchased"
              class="text-shaft-600 hover:text-shaft-950 transition-colors"
              @click="openEditItem(item)"
            >
              <Pencil :size="16" />
            </button>
            <button
              class="text-shaft-600 hover:text-red-600 transition-colors"
              @click="confirmDeleteItem(item)"
            >
              <Trash2 :size="16" />
            </button>
          </div>
        </div>
      </div>
    </template>

    <!-- Add/Edit Item Modal -->
    <BaseModal :show="showItemModal" :title="editingItem ? 'Editar Item' : 'Adicionar Item'" @close="closeItemModal">
      <form @submit.prevent="saveItem">
        <div class="space-y-4">
          <div>
            <label class="block font-medium mb-1">Ingrediente *</label>
            <select
              v-model="itemForm.ingredientId"
              required
              class="bg-shaft-50 border-2 border-shaft-950 px-3 py-2 rounded w-full"
            >
              <option value="" disabled>Selecionar...</option>
              <option v-for="ing in availableIngredients" :key="ing.id" :value="ing.id">
                {{ ing.name }}
              </option>
            </select>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block font-medium mb-1">Quantidade *</label>
              <input
                v-model="itemForm.quantity"
                type="text"
                required
                class="bg-shaft-50 border-2 border-shaft-950 px-3 py-2 rounded w-full"
              />
            </div>
            <div>
              <label class="block font-medium mb-1">Unidade</label>
              <input
                v-model="itemForm.unit"
                type="text"
                class="bg-shaft-50 border-2 border-shaft-950 px-3 py-2 rounded w-full"
              />
            </div>
          </div>
          <div>
            <label class="block font-medium mb-1">Notas</label>
            <input
              v-model="itemForm.notes"
              type="text"
              class="bg-shaft-50 border-2 border-shaft-950 px-3 py-2 rounded w-full"
            />
          </div>
        </div>
        <div class="flex justify-end gap-3 mt-6">
          <button
            type="button"
            class="px-4 py-2 rounded border-2 border-shaft-950 hover:bg-shaft-200 transition-colors"
            @click="closeItemModal"
          >
            Cancelar
          </button>
          <button
            type="submit"
            class="bg-healthy text-shaft-950 px-4 py-2 rounded font-medium hover:brightness-95 transition-all"
            :disabled="savingItem"
          >
            {{ savingItem ? 'Salvando...' : 'Salvar' }}
          </button>
        </div>
      </form>
    </BaseModal>

    <!-- Delete Item Confirmation -->
    <ConfirmDialog
      :show="showDeleteItemDialog"
      title="Excluir Item"
      message="Tem certeza que deseja excluir este item?"
      @confirm="performDeleteItem"
      @cancel="showDeleteItemDialog = false"
    />

    <!-- Delete List Confirmation -->
    <ConfirmDialog
      :show="showDeleteListDialog"
      title="Excluir Lista"
      :message="`Tem certeza que deseja excluir a lista '${list?.name}'?`"
      @confirm="performDeleteList"
      @cancel="showDeleteListDialog = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Plus, Pencil, Trash2, Check, ShoppingCart } from 'lucide-vue-next'
import BaseModal from '@/components/ui/BaseModal.vue'
import ConfirmDialog from '@/components/ui/ConfirmDialog.vue'
import LoadingSpinner from '@/components/ui/LoadingSpinner.vue'
import EmptyState from '@/components/ui/EmptyState.vue'
import type { ShoppingList, ShoppingItem, ShoppingItemForm } from '@/types/shopping'
import type { Ingredient } from '@/types/ingredient'
import {
  getShoppingList,
  deleteShoppingList,
  addShoppingItem,
  updateShoppingItem,
  purchaseShoppingItem,
  deleteShoppingItem,
} from '@/services/shopping'
import { getIngredients } from '@/services/ingredients'
import { useShoppingStore } from '@/stores/shopping'

const route = useRoute()
const router = useRouter()
const shoppingStore = useShoppingStore()

const recurrenceLabels: Record<string, string> = {
  weekly: 'Toda semana',
  biweekly: 'A cada 2 semanas',
  monthly: 'Todo mês',
}

function recurrenceLabel(value: string): string {
  return recurrenceLabels[value] || value
}

const list = ref<ShoppingList | null>(null)
const availableIngredients = ref<Ingredient[]>([])
const loading = ref(true)
const savingItem = ref(false)
const showItemModal = ref(false)
const showDeleteItemDialog = ref(false)
const showDeleteListDialog = ref(false)
const editingItem = ref<ShoppingItem | null>(null)
const deletingItemId = ref<string | null>(null)

const emptyItemForm = (): ShoppingItemForm => ({
  ingredientId: '',
  quantity: '',
  unit: '',
  notes: '',
  priority: 0,
})

const itemForm = ref<ShoppingItemForm>(emptyItemForm())

const listId = () => route.params.id as string

async function loadList() {
  loading.value = true
  try {
    list.value = await getShoppingList(listId())
  } finally {
    loading.value = false
  }
}

async function loadIngredients() {
  availableIngredients.value = await getIngredients()
}

function openAddItem() {
  editingItem.value = null
  itemForm.value = emptyItemForm()
  showItemModal.value = true
  loadIngredients()
}

function openEditItem(item: ShoppingItem) {
  editingItem.value = item
  itemForm.value = {
    ingredientId: item.ingredientId,
    quantity: item.quantity,
    unit: item.unit || '',
    notes: item.notes || '',
    priority: item.priority || 0,
  }
  showItemModal.value = true
  loadIngredients()
}

function closeItemModal() {
  showItemModal.value = false
  editingItem.value = null
}

async function saveItem() {
  savingItem.value = true
  try {
    if (editingItem.value) {
      await updateShoppingItem(listId(), editingItem.value.id, itemForm.value)
    } else {
      await addShoppingItem(listId(), itemForm.value)
    }
    closeItemModal()
    await loadList()
  } finally {
    savingItem.value = false
  }
}

async function purchase(itemId: string) {
  await purchaseShoppingItem(listId(), itemId)
  await loadList()
}

function confirmDeleteItem(item: ShoppingItem) {
  deletingItemId.value = item.id
  showDeleteItemDialog.value = true
}

async function performDeleteItem() {
  if (!deletingItemId.value) return
  await deleteShoppingItem(listId(), deletingItemId.value)
  showDeleteItemDialog.value = false
  deletingItemId.value = null
  await loadList()
}

function confirmDeleteList() {
  showDeleteListDialog.value = true
}

async function performDeleteList() {
  await deleteShoppingList(listId())
  showDeleteListDialog.value = false
  await shoppingStore.fetchLists()
  router.push('/new-list')
}

watch(() => route.params.id, () => {
  if (route.params.id) loadList()
})

onMounted(loadList)
</script>
