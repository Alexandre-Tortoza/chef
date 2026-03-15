<template>
  <div class="h-full flex flex-col">
    <!-- Messages area -->
    <div ref="messagesContainer" class="flex-1 overflow-y-auto p-6 space-y-4">
      <LoadingSpinner v-if="loadingHistory" />

      <EmptyState v-else-if="messages.length === 0 && !loadingHistory" message="Nenhuma mensagem ainda. Converse com o Chef AI!">
        <template #icon>
          <BotMessageSquare :size="48" />
        </template>
      </EmptyState>

      <template v-else>
        <div
          v-for="msg in messages"
          :key="msg.id"
          class="space-y-2"
        >
          <!-- User message -->
          <div class="flex justify-end">
            <div class="bg-shaft-950 text-shaft-50 px-4 py-2 rounded-lg max-w-[70%] break-words">
              {{ msg.message }}
            </div>
          </div>
          <!-- AI response -->
          <div v-if="msg.response" class="flex justify-start">
            <div class="bg-shaft-200 text-shaft-950 px-4 py-2 rounded-lg max-w-[70%] whitespace-pre-wrap break-words">
              {{ msg.response }}
            </div>
          </div>
        </div>
      </template>

      <!-- Sending indicator -->
      <div v-if="sending" class="flex justify-start">
        <div class="bg-shaft-200 text-shaft-500 px-4 py-2 rounded-lg">
          Pensando...
        </div>
      </div>
    </div>

    <!-- Input area -->
    <div class="bg-shaft-900 w-full px-8 py-4">
      <form class="flex gap-3" @submit.prevent="send">
        <input
          v-model="input"
          type="text"
          class="bg-shaft-50 flex-1 px-3 py-2 rounded"
          placeholder="Digite sua mensagem..."
          :disabled="sending"
        />
        <button
          type="submit"
          class="bg-healthy text-shaft-950 px-4 py-2 rounded font-medium hover:brightness-95 transition-all"
          :disabled="sending || !input.trim()"
        >
          Enviar
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
import { BotMessageSquare } from 'lucide-vue-next'
import LoadingSpinner from '@/components/ui/LoadingSpinner.vue'
import EmptyState from '@/components/ui/EmptyState.vue'
import type { ChatMessage } from '@/types/chat'
import { sendMessage, getHistory } from '@/services/chat'

const messages = ref<ChatMessage[]>([])
const input = ref('')
const sending = ref(false)
const loadingHistory = ref(true)
const messagesContainer = ref<HTMLElement | null>(null)

function scrollToBottom() {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
    }
  })
}

async function loadHistory() {
  loadingHistory.value = true
  try {
    const history = await getHistory()
    messages.value = history.reverse()
  } finally {
    loadingHistory.value = false
    scrollToBottom()
  }
}

async function send() {
  const text = input.value.trim()
  if (!text) return

  input.value = ''
  sending.value = true

  const tempMsg: ChatMessage = {
    id: `temp-${Date.now()}`,
    message: text,
    createdAt: new Date().toISOString(),
  }
  messages.value.push(tempMsg)
  scrollToBottom()

  try {
    const { response } = await sendMessage(text)
    tempMsg.response = response
    scrollToBottom()
  } finally {
    sending.value = false
  }
}

onMounted(loadHistory)
</script>
