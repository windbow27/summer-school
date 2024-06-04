<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import Navbar from '@/components/navbar/Navbar.vue'

</script>

<template>
  <header>

    <div class="bg-gradient-to-r from-gray-900 to-gray-950">
      <header>
        <Navbar />
      </header>
      <main class="z-0 min-h-screen flex flex-col pt-14">
        <RouterView></RouterView>
      </main>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
body,
html {
  margin: 0;
  padding: 0;
}
</style>