<template>
  <MainLayout class="h-full">
    <transition name="fade">
      <RouterView />
    </transition>
  </MainLayout>

  <!--
    NOTE:
   [Vue Router warn]: <router-view> can no longer be used directly inside <transition> or <keep-alive>. Use slot props instead:
  -->

  <!--
  <MainLayout class="h-full">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </MainLayout>
  -->
</template>

<script setup lang="ts">
import MainLayout from './layouts/MainLayout.vue'
</script>

<style scoped></style>
