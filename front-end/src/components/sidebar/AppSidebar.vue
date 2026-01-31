<template>
  <div class="h-full border-shaft-950 border-r-8">
    <!-- Sidebar Header -->
    <div class="p-4 border-b-8 boerder-shaft-950 flex justify-center items-center">
      <ChefHat :size="25" /> <span class="font-bold ml-2 text-xl"> Chef AI </span>
    </div>
    <hr />
    <div class="p-2">
      <SidebarChat />
    </div>
    <hr class="border-t-4 border-shaft-950" />
    <div class="p-2">
      <SidebarLists />
    </div>
  </div>
</template>

<script setup lang="ts">
import SidebarLists from './SidebarLists.vue'
import SidebarChat from './SidebarChat.vue'

import { ChefHat } from 'lucide-vue-next'
</script>
