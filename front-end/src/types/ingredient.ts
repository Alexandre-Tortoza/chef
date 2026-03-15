export interface Ingredient {
  id: string
  name: string
  category?: string
  defaultUnit?: string
  createdAt: string
  updatedAt: string
}

export interface IngredientForm {
  name: string
  category: string
  defaultUnit: string
}
