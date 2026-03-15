<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="show"
        class="fixed inset-0 z-50 flex items-center justify-center bg-shaft-950/50"
        @click.self="$emit('close')"
      >
        <div class="bg-shaft-50 rounded border-2 border-shaft-950 p-6 w-full max-w-lg max-h-[80vh] overflow-y-auto">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-bold">{{ title }}</h2>
            <button
              class="text-shaft-950 hover:text-shaft-600 transition-colors"
              @click="$emit('close')"
            >
              <X :size="20" />
            </button>
          </div>
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { X } from 'lucide-vue-next'

defineProps<{
  show: boolean
  title: string
}>()

defineEmits<{
  close: []
}>()
</script>
