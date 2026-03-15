export interface RecipeIngredient {
  id: string
  ingredientId: string
  quantity: string
  unit?: string
  notes?: string
  ingredient?: {
    id: string
    name: string
  }
}

export interface Recipe {
  id: string
  title: string
  description?: string
  instructions: string
  servings?: number
  prepTime?: number
  cookTime?: number
  recipeIngredients?: RecipeIngredient[]
  createdAt: string
  updatedAt: string
}

export interface RecipeIngredientForm {
  ingredientId: string
  quantity: string
  unit: string
  notes: string
}

export interface RecipeForm {
  title: string
  description: string
  instructions: string
  servings: number | undefined
  prepTime: number | undefined
  cookTime: number | undefined
  ingredients: RecipeIngredientForm[]
}
