import http from './api'
import type { ShoppingList, ShoppingItemForm } from '@/types/shopping'

export async function getShoppingLists(status?: string): Promise<ShoppingList[]> {
  const params = status ? { status } : {}
  const { data } = await http.get('/shopping', { params })
  return data
}

export async function getShoppingList(id: string): Promise<ShoppingList> {
  const { data } = await http.get(`/shopping/${id}`)
  return data
}

export async function createShoppingList(name: string, recurrence?: string): Promise<ShoppingList> {
  const { data } = await http.post('/shopping', { name, recurrence })
  return data
}

export async function updateShoppingList(id: string, name: string, recurrence?: string): Promise<ShoppingList> {
  const { data } = await http.put(`/shopping/${id}`, { name, recurrence })
  return data
}

export async function deleteShoppingList(id: string): Promise<void> {
  await http.delete(`/shopping/${id}`)
}

export async function addShoppingItem(listId: string, form: ShoppingItemForm) {
  const { data } = await http.post(`/shopping/${listId}/items`, form)
  return data
}

export async function updateShoppingItem(listId: string, itemId: string, form: ShoppingItemForm) {
  const { data } = await http.put(`/shopping/${listId}/items/${itemId}`, form)
  return data
}

export async function purchaseShoppingItem(listId: string, itemId: string) {
  const { data } = await http.patch(`/shopping/${listId}/items/${itemId}/purchase`)
  return data
}

export async function deleteShoppingItem(listId: string, itemId: string): Promise<void> {
  await http.delete(`/shopping/${listId}/items/${itemId}`)
}
