<template>
  <div class="pages-wrapper">
    <div v-if="!data">
      Loading...
    </div>
    <div v-else>
      <div class="text-sm breadcrumbs pb-8">
        <ul>
          <li><nuxt-link to="/announcements"><a>Announcement</a></nuxt-link></li>
        </ul>
      </div>
      <div v-for="announcement in data.announcements.data" :key="announcement.id">
        <div class="card max-w-96 bg-gray-950 shadow-xl">
          <figure>
            <img :src="getStrapiMedia(announcement.attributes.image.data.attributes.url)"
              :alt="announcement.attributes.image.data.attributes.alternativeText" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">{{ announcement.attributes.title }}</h2>
            <p>Published at: {{ formatDate(announcement.attributes.publishedAt) }}</p>
            <div class="card-actions justify-end">
              <nuxt-link :to="`/announcements/${announcement.id}`" class="btn btn-primary">Read more</nuxt-link>
            </div>
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
          image {
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

<style scoped></style>