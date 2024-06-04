<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import Navbar from '@/components/navbar/Navbar.vue'
import Footer from '@/components/footer/Footer.vue'

</script>

<template>
  <div class="bg-gradient-to-r from-gray-900 to-gray-950">
    <header>
      <Navbar />
    </header>
    <main class="z-0 min-h-screen flex flex-col">
      <RouterView></RouterView>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
body,
html {
  margin: 0;
  padding: 0;
}
</style>