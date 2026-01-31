<template>
  <RouterLink to="/new-list">
    <div
      class="px-2 py-4 border-2 border-transparent hover:border-shaft-950 rounded-sm transition-all duration-200 delay-75 hover:bg-healthy flex justify-between items-center"
    >
      <span class="flex gap-4 font-bold">
        <SquarePlus />
        Nova Lista
      </span>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { SquarePlus } from 'lucide-vue-next'
</script>
