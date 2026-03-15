import axios from 'axios'
import type { ChatMessage } from '@/types/chat'

const llmHttp = axios.create({
  baseURL: 'http://127.0.0.1:3000/llm',
  headers: {
    'Content-Type': 'application/json',
  },
})

export async function sendMessage(message: string): Promise<{ response: string }> {
  const { data } = await llmHttp.post('/chat', { message })
  return data
}

export async function getHistory(skip = 0, take = 50): Promise<ChatMessage[]> {
  const { data } = await llmHttp.get('/history', { params: { skip, take } })
  return data
}

export async function clearHistory(): Promise<void> {
  await llmHttp.delete('/history')
}
