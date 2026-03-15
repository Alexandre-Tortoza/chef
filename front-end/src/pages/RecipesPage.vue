<template>
  <div class="p-8 h-full bg-shaft-50 overflow-y-auto">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">Receitas</h1>
      <button
        class="bg-shaft-950 text-shaft-50 px-4 py-2 rounded flex items-center gap-2 hover:bg-shaft-800 transition-colors"
        @click="openCreate"
      >
        <Plus :size="18" />
        Nova Receita
      </button>
    </div>

    <LoadingSpinner v-if="loading" />

    <EmptyState v-else-if="recipes.length === 0" message="Nenhuma receita encontrada">
      <template #icon>
        <Salad :size="48" />
      </template>
    </EmptyState>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="recipe in recipes"
        :key="recipe.id"
        class="bg-shaft-50 rounded border-2 border-shaft-950 p-4 flex flex-col justify-between"
      >
        <div>
          <h3 class="font-bold text-lg mb-1">{{ recipe.title }}</h3>
          <p v-if="recipe.description" class="text-shaft-600 text-sm mb-3">{{ recipe.description }}</p>
          <div class="flex gap-3 text-sm text-shaft-500 mb-3">
            <span v-if="recipe.servings">{{ recipe.servings }} porções</span>
            <span v-if="recipe.prepTime">{{ recipe.prepTime }} min preparo</span>
            <span v-if="recipe.cookTime">{{ recipe.cookTime }} min cozimento</span>
          </div>
        </div>
        <div class="flex justify-end gap-2 pt-2 border-t border-shaft-200">
          <button
            class="text-shaft-600 hover:text-shaft-950 transition-colors"
            @click="openEdit(recipe)"
          >
            <Pencil :size="16" />
          </button>
          <button
            class="text-shaft-600 hover:text-red-600 transition-colors"
            @click="confirmDelete(recipe)"
          >
            <Trash2 :size="16" />
          </button>
        </div>
      </div>
    </div>

    <!-- Create/Edit Modal -->
    <BaseModal :show="showModal" :title="editing ? 'Editar Receita' : 'Nova Receita'" @close="closeModal">
      <form @submit.prevent="save">
        <div class="space-y-4">
          <div>
            <label class="block font-medium mb-1">Título *</label>
            <input
              v-model="form.title"
              type="text"
              required
              class="bg-shaft-50 border-2 border-shaft-950 px-3 py-2 rounded w-full"
            />
          </div>
          <div>
            <label class="block font-medium mb-1">Descrição</label>
            <input
              v-model="form.description"
              type="text"
              class="bg-shaft-50 border-2 border-shaft-950 px-3 py-2 rounded w-full"
            />
          </div>
          <div>
            <label class="block font-medium mb-1">Instruções *</label>
            <textarea
              v-model="form.instructions"
              required
              rows="4"
              class="bg-shaft-50 border-2 border-shaft-950 px-3 py-2 rounded w-full resize-none"
            />
          </div>
          <div class="grid grid-cols-3 gap-3">
            <div>
              <label class="block font-medium mb-1">Porções</label>
              <input
                v-model.number="form.servings"
                type="number"
                min="1"
                class="bg-shaft-50 border-2 border-shaft-950 px-3 py-2 rounded w-full"
              />
            </div>
            <div>
              <label class="block font-medium mb-1">Preparo (min)</label>
              <input
                v-model.number="form.prepTime"
                type="number"
                min="0"
                class="bg-shaft-50 border-2 border-shaft-950 px-3 py-2 rounded w-full"
              />
            </div>
            <div>
              <label class="block font-medium mb-1">Cozimento (min)</label>
              <input
                v-model.number="form.cookTime"
                type="number"
                min="0"
                class="bg-shaft-50 border-2 border-shaft-950 px-3 py-2 rounded w-full"
              />
            </div>
          </div>

          <!-- Ingredients selector -->
          <div>
            <div class="flex justify-between items-center mb-2">
              <label class="block font-medium">Ingredientes</label>
              <button
                type="button"
                class="text-sm bg-shaft-950 text-shaft-50 px-3 py-1 rounded hover:bg-shaft-800 transition-colors"
                @click="addIngredientRow"
              >
                + Adicionar
              </button>
            </div>
            <div
              v-for="(ing, idx) in form.ingredients"
              :key="idx"
              class="flex gap-2 mb-2 items-end"
            >
              <div class="flex-1">
                <select
                  v-model="ing.ingredientId"
                  class="bg-shaft-50 border-2 border-shaft-950 px-3 py-2 rounded w-full"
                  required
                >
                  <option value="" disabled>Selecionar...</option>
                  <option
                    v-for="opt in availableIngredients"
                    :key="opt.id"
                    :value="opt.id"
                  >
                    {{ opt.name }}
                  </option>
                </select>
              </div>
              <div class="w-20">
                <input
                  v-model="ing.quantity"
                  type="text"
                  required
                  placeholder="Qtd"
                  class="bg-shaft-50 border-2 border-shaft-950 px-3 py-2 rounded w-full"
                />
              </div>
              <div class="w-24">
                <input
                  v-model="ing.unit"
                  type="text"
                  placeholder="Unidade"
                  class="bg-shaft-50 border-2 border-shaft-950 px-3 py-2 rounded w-full"
                />
              </div>
              <button
                type="button"
                class="text-red-500 hover:text-red-700 pb-2"
                @click="form.ingredients.splice(idx, 1)"
              >
                <Trash2 :size="16" />
              </button>
            </div>
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
      title="Excluir Receita"
      :message="`Tem certeza que deseja excluir '${deletingRecipe?.title}'?`"
      @confirm="performDelete"
      @cancel="showDeleteDialog = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Plus, Pencil, Trash2, Salad } from 'lucide-vue-next'
import BaseModal from '@/components/ui/BaseModal.vue'
import ConfirmDialog from '@/components/ui/ConfirmDialog.vue'
import LoadingSpinner from '@/components/ui/LoadingSpinner.vue'
import EmptyState from '@/components/ui/EmptyState.vue'
import type { Recipe, RecipeForm, RecipeIngredientForm } from '@/types/recipe'
import type { Ingredient } from '@/types/ingredient'
import { getRecipes, getRecipe, createRecipe, updateRecipe, deleteRecipe } from '@/services/recipes'
import { getIngredients } from '@/services/ingredients'

const recipes = ref<Recipe[]>([])
const availableIngredients = ref<Ingredient[]>([])
const loading = ref(true)
const saving = ref(false)
const showModal = ref(false)
const showDeleteDialog = ref(false)
const editing = ref<Recipe | null>(null)
const deletingRecipe = ref<Recipe | null>(null)

const emptyIngredientRow = (): RecipeIngredientForm => ({
  ingredientId: '',
  quantity: '',
  unit: '',
  notes: '',
})

const emptyForm = (): RecipeForm => ({
  title: '',
  description: '',
  instructions: '',
  servings: undefined,
  prepTime: undefined,
  cookTime: undefined,
  ingredients: [],
})

const form = ref<RecipeForm>(emptyForm())

async function loadRecipes() {
  loading.value = true
  try {
    recipes.value = await getRecipes()
  } finally {
    loading.value = false
  }
}

async function loadAvailableIngredients() {
  availableIngredients.value = await getIngredients()
}

function addIngredientRow() {
  form.value.ingredients.push(emptyIngredientRow())
}

function openCreate() {
  editing.value = null
  form.value = emptyForm()
  showModal.value = true
  loadAvailableIngredients()
}

async function openEdit(recipe: Recipe) {
  await loadAvailableIngredients()
  const full = await getRecipe(recipe.id)
  editing.value = full
  form.value = {
    title: full.title,
    description: full.description || '',
    instructions: full.instructions,
    servings: full.servings || undefined,
    prepTime: full.prepTime || undefined,
    cookTime: full.cookTime || undefined,
    ingredients: (full.recipeIngredients || []).map((ri) => ({
      ingredientId: ri.ingredientId,
      quantity: ri.quantity,
      unit: ri.unit || '',
      notes: ri.notes || '',
    })),
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
      await updateRecipe(editing.value.id, form.value)
    } else {
      await createRecipe(form.value)
    }
    closeModal()
    await loadRecipes()
  } finally {
    saving.value = false
  }
}

function confirmDelete(recipe: Recipe) {
  deletingRecipe.value = recipe
  showDeleteDialog.value = true
}

async function performDelete() {
  if (!deletingRecipe.value) return
  try {
    await deleteRecipe(deletingRecipe.value.id)
    showDeleteDialog.value = false
    deletingRecipe.value = null
    await loadRecipes()
  } catch {
    showDeleteDialog.value = false
  }
}

onMounted(loadRecipes)
</script>
