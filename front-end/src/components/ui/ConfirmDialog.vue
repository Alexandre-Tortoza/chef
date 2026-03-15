<template>
  <BaseModal :show="show" :title="title" @close="$emit('cancel')">
    <p class="mb-6 text-shaft-700">{{ message }}</p>
    <div class="flex justify-end gap-3">
      <button
        class="px-4 py-2 rounded border-2 border-shaft-950 hover:bg-shaft-200 transition-colors"
        @click="$emit('cancel')"
      >
        Cancelar
      </button>
      <button
        class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
        @click="$emit('confirm')"
      >
        Confirmar
      </button>
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
import BaseModal from './BaseModal.vue'

withDefaults(defineProps<{
  show: boolean
  title?: string
  message?: string
}>(), {
  title: 'Confirmar',
  message: 'Tem certeza que deseja continuar?',
})

defineEmits<{
  confirm: []
  cancel: []
}>()
</script>
