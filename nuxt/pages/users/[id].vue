<template>
  <div class="pages-wrapper">
    <div v-if="!data">
      Loading...
    </div>
    <div v-else>
      <!-- <div class="text-sm breadcrumbs pb-8">
        <ul>
          <li><nuxt-link :to="`/users/${data.id}`"><a>User</a></nuxt-link></li>
        </ul>
      </div> -->
      <!-- <div v-for="announcement in data.announcements.data" :key="announcement.id"> -->
        <div class="card max-w-96 bg-gray-950 shadow-xl">
          <!-- <figure>
            <img :src="getStrapiMedia(announcement.attributes.image.data.attributes.url)"
              :alt="announcement.attributes.image.data.attributes.alternativeText" />
          </figure> -->
          <div class="card-body">
            <h2 class="card-title">{{ data.usersPermissionsUsers.data}}</h2>
            <!-- <p>Published at: {{ formatDate(announcement.attributes.publishedAt) }}</p>
            <div class="card-actions justify-end">
              <nuxt-link :to="`/users/${announcement.id}`" class="btn btn-primary">Read more</nuxt-link>
            </div> -->
          </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getStrapiMedia, formatDate } from '~/utils/utils';
import { useStorage } from '@vueuse/core';
const accountStorage = useStorage('account', { email: '', password: '' });

console.log(accountStorage.value.email);
const query = gql`
  query {
    usersPermissionsUsers(filters: {email: {eq: "${accountStorage.value.email}"}}) {
      data {
        id
        attributes {
          username
          email
          enable2FA
          course_registration {
            data {
              attributes {
                fullName
                dob
                job
                company
                knowledge
                goal
              }
            }
          }
        }
      }
    }
  }
`
const { data } = useAsyncQuery<UserData>(query);
console.log(data);
</script>

<style scoped></style>