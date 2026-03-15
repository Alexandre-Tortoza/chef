<template>
  <span class="font-bold ml-2">Listas</span>
  <div v-if="store.loading" class="text-shaft-500 text-sm ml-2">Carregando...</div>
  <ListItem v-for="listItem in store.lists" :key="listItem.id" :name="listItem.name" :id="listItem.id" />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import ListItem from './ListItem.vue'
import { useShoppingStore } from '@/stores/shopping'

const store = useShoppingStore()

onMounted(() => store.fetchLists())
</script>
