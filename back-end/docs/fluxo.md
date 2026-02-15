1. UserRequest
   └─> requestText: "Sábado quero fazer macarrão ao molho branco"
   └─> actionType: "recipe"

2. Recipe
   └─> title: "Macarrão ao Molho Branco"
   └─> userRequestId: [ID do UserRequest]

3. Para cada ingrediente (ex: macarrão, manteiga, leite):

   Ingredient (macarrão) ───┐
   │
   RecipeIngredient ←───────┘
   └─> recipeId: [ID da Recipe]
   └─> ingredientId: [ID do Ingredient]
   └─> quantity: "500g"

4. Verificar Estoque:
   StockItem (macarrão existe?)
   └─> SIM? Não adiciona à lista
   └─> NÃO? Adiciona à ShoppingList

5. ShoppingList (ativa)
   └─> ShoppingItem
   └─> ingredientId: [macarrão]
   └─> quantity: "500g"
   └─> recipeId: [ID da Recipe] (opcional, para rastreio)

6. Usuário compra:
   └─> ShoppingItem.purchased = true
   └─> Cria StockItem com o ingrediente
