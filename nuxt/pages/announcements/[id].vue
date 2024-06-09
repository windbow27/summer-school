<template>
  <div class="pages-wrapper">
    <div v-if="!data">
      Loading...
    </div>
    <div v-else>
      <div class="text-sm breadcrumbs">
        <ul>
          <li><nuxt-link to="/announcements"><a>Announcement</a></nuxt-link></li>
          <li><a>{{ data.announcement.data.attributes.title }}</a></li>
        </ul>
      </div>
      <div class="shadow overflow-hidden sm:rounded-lg p-6 ">
        <div class="flex items-center justify-between">
          <h2 class="text-2xl font-bold text-white">{{ data.announcement.data.attributes.title }}</h2>
          <span class="text-sm">{{ formatDate(data.announcement.data.attributes.publishedAt || '') }}</span>
        </div>
        <div class="mt-4">
          <img :src="getStrapiMedia(data.announcement.data.attributes.image.data.attributes.url || '')"
            :alt="data.announcement.data.attributes.image.data.attributes.alternativeText || ''"
            class="w-full h-64 object-cover rounded" />
        </div>
        <div class="mt-6 text-white">
          <p>{{ data.announcement.data.attributes.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { getStrapiMedia, formatDate } from '~/utils/utils';
import { queryAnnouncement } from '~/apollo/announcement';

const route = useRoute();
const id = route.params.id;

const { data } = useAsyncQuery<{ announcement: { data: { attributes: any } } }>(queryAnnouncement, { id: id })

</script>

<style scoped></style>