import { createRouter, createWebHistory } from 'vue-router'
import AiChat from '@/pages/AiChat.vue'
import ListPage from '@/pages/ListPage.vue'
import IngredientsPage from '@/pages/IngredientsPage.vue'
import RecipesPage from '@/pages/RecipesPage.vue'
import NewListPage from '@/pages/NewListPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/ai-chat', component: AiChat },
    { path: '/list/:id', component: ListPage },
    { path: '/ingredients', component: IngredientsPage },
    { path: '/recipes', component: RecipesPage },
    { path: '/new-list', component: NewListPage },
  ],
})

export default router
