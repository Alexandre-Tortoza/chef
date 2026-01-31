<template>
  <span class="font-bold ml-2">Listas</span>
  <ListItem v-for="listItem in list" :key="listItem.id" :name="listItem.name" :id="listItem.id" />
</template>

<script setup lang="ts">
import ListItem from './ListItem.vue'

const list = [
  {
    id: 0,
    name: 'Compras da semana',
  },
]
</script>
