<template>
  <div class="grid grid-cols-12">
    <AppSidebar class="col-span-2" />
    <div class="col-span-10 gridBackground">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppSidebar from '@/components/sidebar/AppSidebar.vue'
</script>

<style scoped>
.gridBackground {
  background-size: 40px 40px;
  background-image: radial-gradient(circle, #000000 1px, rgba(0, 0, 0, 0) 1px);
}
</style>
