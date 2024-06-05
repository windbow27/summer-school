<template>
  <div class="pages-wrapper">
    <div v-if="!data">
      Loading...
    </div>
    <div v-else>
      <div v-for="announcement in data.announcements.data" :key="announcement.id" class="card max-w-96 bg-gray-950 shadow-xl">
        <figure>
          <img :src="getStrapiMedia(announcement.attributes.media.data.attributes.url)" :alt="announcement.attributes.media.data.attributes.alternativeText" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ announcement.attributes.title }}</h2>
          <p>Published at: {{ formatDate(announcement.attributes.publishedAt) }}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Read more</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getStrapiMedia, formatDate } from '~/utils/utils';

const query = gql`
  query {
    announcements {
      data {
        id
        attributes {
          title
          content
          publishedAt
          media {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
        }
      }
    }
  }
`
const { data } = useAsyncQuery<AnnouncementsData>(query);
</script>

<style scoped>

</style>