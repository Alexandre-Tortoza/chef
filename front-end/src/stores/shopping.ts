import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getShoppingLists } from '@/services/shopping'
import type { ShoppingList } from '@/types/shopping'

export const useShoppingStore = defineStore('shopping', () => {
  const lists = ref<ShoppingList[]>([])
  const loading = ref(false)

  async function fetchLists() {
    loading.value = true
    try {
      lists.value = await getShoppingLists()
    } finally {
      loading.value = false
    }
  }

  return { lists, loading, fetchLists }
})
