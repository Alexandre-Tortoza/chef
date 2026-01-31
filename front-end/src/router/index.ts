import { createRouter, createWebHistory } from 'vue-router'
import AiChat from '@/pages/AiChat.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{ path: '/ai-chat', component: AiChat }],
})

export default router
