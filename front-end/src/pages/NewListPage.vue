<template>
  <div class="p-8 h-full bg-shaft-50 flex items-center justify-center">
    <div class="bg-shaft-50 rounded border-2 border-shaft-950 p-8 w-full max-w-md">
      <h1 class="text-2xl font-bold mb-6">Nova Lista de Compras</h1>
      <form @submit.prevent="create">
        <div class="mb-4">
          <label class="block font-medium mb-1">Nome da lista *</label>
          <input
            v-model="name"
            type="text"
            required
            class="bg-shaft-50 border-2 border-shaft-950 px-3 py-2 rounded w-full"
            placeholder="Ex: Compras da semana"
            autofocus
          />
        </div>
        <div class="mb-6">
          <label class="block font-medium mb-1">Recorrência</label>
          <select
            v-model="recurrence"
            class="bg-shaft-50 border-2 border-shaft-950 px-3 py-2 rounded w-full"
          >
            <option value="none">Sem recorrência</option>
            <option value="weekly">Toda semana</option>
            <option value="biweekly">A cada 2 semanas</option>
            <option value="monthly">Todo mês</option>
          </select>
        </div>
        <button
          type="submit"
          class="bg-healthy text-shaft-950 px-4 py-2 rounded font-medium w-full hover:brightness-95 transition-all"
          :disabled="saving"
        >
          {{ saving ? 'Criando...' : 'Criar Lista' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { createShoppingList } from '@/services/shopping'
import { useShoppingStore } from '@/stores/shopping'

const router = useRouter()
const shoppingStore = useShoppingStore()
const name = ref('')
const recurrence = ref('none')
const saving = ref(false)

async function create() {
  saving.value = true
  try {
    const list = await createShoppingList(name.value, recurrence.value)
    await shoppingStore.fetchLists()
    router.push(`/list/${list.id}`)
  } finally {
    saving.value = false
  }
}
</script>
