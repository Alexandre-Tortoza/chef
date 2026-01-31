<template>
  <div class="h-full border-shaft-950 border-r-8">
    <!-- Sidebar Header -->

    <SidebarHeader />
    <hr />
    <div class="p-2 flex flex-col gap-1">
      <SidebarChat />
      <SidebarNewList />
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
import SidebarHeader from './SidebarHeader.vue'
import SidebarNewList from './SidebarNewList.vue'
</script>
