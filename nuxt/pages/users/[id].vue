<template>
  <div class="pages-wrapper">
    <div v-if="!data">
      Loading...
    </div>
    <div v-else>
      <div class="text-sm breadcrumbs pb-8">
        <ul>
          <li>User</li>
          <li> {{ user?.username }} </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getStrapiMedia, formatDate } from '~/utils/utils';
import { useStorage } from '@vueuse/core';

const accountStorage = useStorage('account', { email: '', password: '' });
const router = useRouter()
const user = useStrapiUser()

const { logout } = useStrapiAuth()
const onLogoutClick = () => {
  logout()

  router.push('/')
}


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
const { data } = useAsyncQuery<any>(query);
</script>

<style scoped></style>