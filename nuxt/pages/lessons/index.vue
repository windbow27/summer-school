<template>
  <div>
    <div class="pages-wrapper">
      <div v-if="!data">
        Loading...
      </div>
      <div v-else-if="user">
        <div class="text-sm breadcrumbs">
          <ul>
            <li><nuxt-link to="/lessons"><a>Lessons</a></nuxt-link></li>
          </ul>
        </div>
        <div>
          <label for="knowledge-filter">Filter by knowledge:</label>
          <select class="select" id="knowledge-filter" v-model="selectedKnowledge">
            <option value="">All</option>
            <option value="Novice">Novice</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Expert">Expert</option>
          </select>
        </div>
        <div class="flex flex-wrap gap-8 justify-center p-8">
          <div v-for="lesson in filteredLessons" :key="lesson.id"
            class="card max-w-96 bg-gray-950 shadow-xl flex flex-col">
            <figure>
              <img class="h-56 w-full object-cover" :src="getStrapiMedia(lesson.attributes.image.data.attributes.url)"
                :alt="lesson.attributes.image.data.attributes.alternativeText" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">{{ lesson.attributes.title }}</h2>
              <p>Published at: {{ formatDate(lesson.attributes.publishedAt) }}</p>
              <p>Grade: {{ lesson.attributes.knowledge }}</p>
              <div class="card-actions justify-end">
                <nuxt-link :to="`/lessons/${lesson.id}`" class="btn btn-primary">Read more</nuxt-link>
              </div>
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

const selectedKnowledge = ref('');

const query = gql`
    query {
      lessons {
        data {
          id
          attributes {
            title
            content
            publishedAt
            knowledge
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

const sortedLessons = computed(() => {
  if (data.value && data.value.lessons.data) {
    return [...data.value.lessons.data].sort((a, b) => {
      return new Date(b.attributes.publishedAt).getTime() - new Date(a.attributes.publishedAt).getTime();
    });
  }
  return [];
});

const filteredLessons = computed(() => {
  if (selectedKnowledge.value) {
    return sortedLessons.value.filter(lesson => lesson.attributes.knowledge === selectedKnowledge.value);
  }
  return sortedLessons.value;
});

</script>

<style scoped></style>