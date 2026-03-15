import http from './api'
import type { Ingredient, IngredientForm } from '@/types/ingredient'

export async function getIngredients(category?: string): Promise<Ingredient[]> {
  const params = category ? { category } : {}
  const { data } = await http.get('/ingredients', { params })
  return data
}

export async function getIngredient(id: string): Promise<Ingredient> {
  const { data } = await http.get(`/ingredients/${id}`)
  return data
}

export async function createIngredient(form: IngredientForm): Promise<Ingredient> {
  const { data } = await http.post('/ingredients', form)
  return data
}

export async function updateIngredient(id: string, form: IngredientForm): Promise<Ingredient> {
  const { data } = await http.put(`/ingredients/${id}`, form)
  return data
}

export async function deleteIngredient(id: string): Promise<void> {
  await http.delete(`/ingredients/${id}`)
}
