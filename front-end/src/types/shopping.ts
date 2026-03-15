export interface ShoppingItem {
  id: string
  ingredientId: string
  quantity: string
  unit?: string
  notes?: string
  priority?: number
  purchased: boolean
  ingredient?: {
    id: string
    name: string
  }
}

export interface ShoppingList {
  id: string
  name: string
  status?: string
  recurrence?: string
  items?: ShoppingItem[]
  createdAt: string
  updatedAt: string
}

export interface ShoppingItemForm {
  ingredientId: string
  quantity: string
  unit: string
  notes: string
  priority: number
}
