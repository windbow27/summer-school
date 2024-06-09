<template>
    <div class="pages-wrapper">
      <div v-if="!data">
        Loading...
      </div>
      <div v-else>
        <div class="shadow overflow-hidden sm:rounded-lg p-6 ">
          <div class="flex items-center justify-between">
            <h2 class="text-2xl font-bold text-white">{{ data.lesson.data.attributes.title }}</h2>
            <span class="text-sm">{{ formatDate(data.lesson.data.attributes.publishedAt || '') }}</span>
          </div>
          <div class="mt-4">
            <img :src="getStrapiMedia(data.lesson.data.attributes.image.data.attributes.url || '')"
              :alt="data.lesson.data.attributes.image.data.attributes.alternativeText || ''"
              class="w-full h-64 object-cover rounded" />
          </div>
          <div class="mt-6 text-white">
            <p>{{ data.lesson.data.attributes.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  
  import { getStrapiMedia, formatDate } from '~/utils/utils';
  import { queryLesson } from '~/apollo/lesson';
  
  const route = useRoute();
  const id = route.params.id;
  
  const { data } = useAsyncQuery<{ lesson: { data: { attributes: any } } }>(queryLesson, { id: id })
  
  </script>
  
  <style scoped></style>