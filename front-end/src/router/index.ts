import { createRouter, createWebHistory } from 'vue-router'
import AiChat from '@/pages/AiChat.vue'
import ListPage from '@/pages/ListPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/ai-chat', component: AiChat },
    { path: '/list/:id', component: ListPage },
  ],
})

export default router
