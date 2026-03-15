import http from './api'
import type { Recipe, RecipeForm } from '@/types/recipe'

export async function getRecipes(): Promise<Recipe[]> {
  const { data } = await http.get('/recipes')
  return data
}

export async function getRecipe(id: string): Promise<Recipe> {
  const { data } = await http.get(`/recipes/${id}`)
  return data
}

export async function createRecipe(form: RecipeForm): Promise<Recipe> {
  const { data } = await http.post('/recipes', form)
  return data
}

export async function updateRecipe(id: string, form: RecipeForm): Promise<Recipe> {
  const { data } = await http.put(`/recipes/${id}`, form)
  return data
}

export async function deleteRecipe(id: string): Promise<void> {
  await http.delete(`/recipes/${id}`)
}
