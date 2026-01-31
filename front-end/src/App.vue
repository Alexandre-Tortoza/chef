<template>
  <MainLayout class="h-full">
    <transition name="fade">
      <RouterView />
    </transition>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from './layouts/MainLayout.vue'
</script>

<style scoped></style>
