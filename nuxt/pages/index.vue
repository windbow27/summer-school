<script setup lang="ts">
const user = useStrapiUser();

</script>

<template>
  <div class="hero min-h-screen"
    style="background-image: url(https://preview.redd.it/y1jqr8m0fv531.jpg?width=2580&format=pjpg&auto=webp&s=2f377181d98a5629682394e29c687679a49bfef1);">
    <div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-center text-neutral-content">
      <div class="max-w-md">
        <h1 class="mb-5 text-6xl font-bold">Iris Summer Space Program</h1>
        <p class="mb-5 text-2xl">May the billions of lighthouses on the sky lead us starward.</p>
        <router-link v-if="!user" to="/register" class="btn btn-primary">Get Started</router-link>
      </div>
    </div>
  </div>
</template>
