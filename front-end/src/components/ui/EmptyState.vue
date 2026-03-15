<template>
  <div class="flex flex-col items-center justify-center p-12 text-shaft-500">
    <slot name="icon" />
    <p class="text-lg mt-4">{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  message: string
}>()
</script>
