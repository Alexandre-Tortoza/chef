<template>
  <RouterLink :to="`list/${id}`">
    <div>
      <div
        class="px-2 py-1 border-2 border-transparent hover:border-shaft-950 rounded-sm transition-all duration-200 delay-75 hover:bg-healthy flex justify-between items-center"
      >
        <span class="flex gap-4">
          <TextAlignJustify />
          {{ name }}
        </span>
      </div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { TextAlignJustify } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

defineProps<{
  name: string
  id: number
}>()
</script>
