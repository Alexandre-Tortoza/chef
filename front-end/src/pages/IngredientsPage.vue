<template>
  <div class="p-8 h-full bg-shaft-50 overflow-y-auto">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">Ingredientes</h1>
      <button
        class="bg-shaft-950 text-shaft-50 px-4 py-2 rounded flex items-center gap-2 hover:bg-shaft-800 transition-colors"
        @click="openCreate"
      >
        <Plus :size="18" />
        Novo Ingrediente
      </button>
    </div>

    <LoadingSpinner v-if="loading" />

    <EmptyState v-else-if="ingredients.length === 0" message="Nenhum ingrediente encontrado">
      <template #icon>
        <Wheat :size="48" />
      </template>
    </EmptyState>

    <div v-else class="border-2 border-shaft-950 rounded overflow-hidden">
      <table class="w-full">
        <thead class="bg-shaft-950 text-shaft-50">
          <tr>
            <th class="text-left px-4 py-3">Nome</th>
            <th class="text-left px-4 py-3">Categoria</th>
            <th class="text-left px-4 py-3">Unidade Padrão</th>
            <th class="text-right px-4 py-3">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="ingredient in ingredients"
            :key="ingredient.id"
            class="border-t border-shaft-200 hover:bg-shaft-100 transition-colors"
          >
            <td class="px-4 py-3 font-medium">{{ ingredient.name }}</td>
            <td class="px-4 py-3 text-shaft-600">{{ ingredient.category || '—' }}</td>
            <td class="px-4 py-3 text-shaft-600">{{ ingredient.defaultUnit || '—' }}</td>
            <td class="px-4 py-3 text-right">
              <button
                class="text-shaft-600 hover:text-shaft-950 mr-3 transition-colors"
                @click="openEdit(ingredient)"
              >
                <Pencil :size="16" />
              </button>
              <button
                class="text-shaft-600 hover:text-red-600 transition-colors"
                @click="confirmDelete(ingredient)"
              >
                <Trash2 :size="16" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Create/Edit Modal -->
    <BaseModal :show="showModal" :title="editing ? 'Editar Ingrediente' : 'Novo Ingrediente'" @close="closeModal">
      <form @submit.prevent="save">
        <div class="space-y-4">
          <div>
            <label class="block font-medium mb-1">Nome *</label>
            <input
              v-model="form.name"
              type="text"
              required
              class="bg-shaft-50 border-2 border-shaft-950 px-3 py-2 rounded w-full"
              placeholder="Ex: Tomate"
            />
          </div>
          <div>
            <label class="block font-medium mb-1">Categoria</label>
            <input
              v-model="form.category"
              type="text"
              class="bg-shaft-50 border-2 border-shaft-950 px-3 py-2 rounded w-full"
              placeholder="Ex: Vegetal"
            />
          </div>
          <div>
            <label class="block font-medium mb-1">Unidade Padrão</label>
            <input
              v-model="form.defaultUnit"
              type="text"
              class="bg-shaft-50 border-2 border-shaft-950 px-3 py-2 rounded w-full"
              placeholder="Ex: kg, unidade, litro"
            />
          </div>
        </div>
        <div class="flex justify-end gap-3 mt-6">
          <button
            type="button"
            class="px-4 py-2 rounded border-2 border-shaft-950 hover:bg-shaft-200 transition-colors"
            @click="closeModal"
          >
            Cancelar
          </button>
          <button
            type="submit"
            class="bg-healthy text-shaft-950 px-4 py-2 rounded font-medium hover:brightness-95 transition-all"
            :disabled="saving"
          >
            {{ saving ? 'Salvando...' : 'Salvar' }}
          </button>
        </div>
      </form>
    </BaseModal>

    <!-- Delete Confirmation -->
    <ConfirmDialog
      :show="showDeleteDialog"
      title="Excluir Ingrediente"
      :message="`Tem certeza que deseja excluir '${deletingIngredient?.name}'?`"
      @confirm="performDelete"
      @cancel="showDeleteDialog = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Plus, Pencil, Trash2, Wheat } from 'lucide-vue-next'
import BaseModal from '@/components/ui/BaseModal.vue'
import ConfirmDialog from '@/components/ui/ConfirmDialog.vue'
import LoadingSpinner from '@/components/ui/LoadingSpinner.vue'
import EmptyState from '@/components/ui/EmptyState.vue'
import type { Ingredient, IngredientForm } from '@/types/ingredient'
import {
  getIngredients,
  createIngredient,
  updateIngredient,
  deleteIngredient,
} from '@/services/ingredients'

const ingredients = ref<Ingredient[]>([])
const loading = ref(true)
const saving = ref(false)
const showModal = ref(false)
const showDeleteDialog = ref(false)
const editing = ref<Ingredient | null>(null)
const deletingIngredient = ref<Ingredient | null>(null)

const emptyForm = (): IngredientForm => ({
  name: '',
  category: '',
  defaultUnit: '',
})

const form = ref<IngredientForm>(emptyForm())

async function loadIngredients() {
  loading.value = true
  try {
    ingredients.value = await getIngredients()
  } finally {
    loading.value = false
  }
}

function openCreate() {
  editing.value = null
  form.value = emptyForm()
  showModal.value = true
}

function openEdit(ingredient: Ingredient) {
  editing.value = ingredient
  form.value = {
    name: ingredient.name,
    category: ingredient.category || '',
    defaultUnit: ingredient.defaultUnit || '',
  }
  showModal.value = true
}

function closeModal() {
  showModal.value = false
  editing.value = null
}

async function save() {
  saving.value = true
  try {
    if (editing.value) {
      await updateIngredient(editing.value.id, form.value)
    } else {
      await createIngredient(form.value)
    }
    closeModal()
    await loadIngredients()
  } finally {
    saving.value = false
  }
}

function confirmDelete(ingredient: Ingredient) {
  deletingIngredient.value = ingredient
  showDeleteDialog.value = true
}

async function performDelete() {
  if (!deletingIngredient.value) return
  try {
    await deleteIngredient(deletingIngredient.value.id)
    showDeleteDialog.value = false
    deletingIngredient.value = null
    await loadIngredients()
  } catch {
    showDeleteDialog.value = false
  }
}

onMounted(loadIngredients)
</script>
