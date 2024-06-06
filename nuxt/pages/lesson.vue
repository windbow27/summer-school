<template>
    <div>
        <div class="pages-wrapper">
            <div v-if="!data">
                Loading...
            </div>
            <div v-else-if="user">
                <div v-for="lesson in data.lessons.data" :key="lesson.id" class="card max-w-96 bg-gray-950 shadow-xl">
                    <figure>
                        <img :src="getStrapiMedia(lesson.attributes.image.data.attributes.url)"
                            :alt="lesson.attributes.image.data.attributes.alternativeText" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">{{ lesson.attributes.title }}</h2>
                        <p>Published at: {{ formatDate(lesson.attributes.publishedAt) }}</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-primary">Read more</button>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <div role="alert" class="alert alert-error">
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>You must be signed up for the course to access Lessons.</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getStrapiMedia, formatDate } from '~/utils/utils';

const user = useStrapiUser();

const query = gql`
    query {
      lessons {
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
const { data } = useAsyncQuery<LessonsData>(query);
</script>

<style scoped></style>