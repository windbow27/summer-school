<template>
  <div class="pages-wrapper">
    <div v-if="!data">
      Loading...
    </div>
    <div v-else>
      <div class="text-sm breadcrumbs">
        <ul>
          <li><nuxt-link to="/announcements"><a>Announcement</a></nuxt-link></li>
        </ul>
      </div>
      <div class="flex flex-wrap gap-8 justify-center p-8">
        <div v-for="announcement in sortedAnnouncements" :key="announcement.id">
          <div class="card max-w-96 bg-gray-950 shadow-xl flex flex-col">
            <figure class="flex-grow">
              <img class="h-56 w-full object-cover"
                :src="getStrapiMedia(announcement.attributes.image.data.attributes.url)"
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

const sortedAnnouncements = computed(() => {
  if (data.value && data.value.announcements.data) {
    return [...data.value.announcements.data].sort((a, b) => {
      return new Date(b.attributes.publishedAt).getTime() - new Date(a.attributes.publishedAt).getTime();
    });
  }
  return [];
});

console.log(data)
</script>

<style scoped></style>