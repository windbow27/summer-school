<script setup lang="ts">
const { logout } = useStrapiAuth()
const router = useRouter()

const user = useStrapiUser()

const onClick = () => {
    logout()

    router.push('/')
}
</script>

<template>
    <div class="fixed drawer z-50 bg-gray-950 opacity-80">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
            <!-- Navbar -->
            <div class="w-full navbar">
                <div class="flex-none lg:hidden">
                    <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="inline-block w-6 h-6 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </label>
                </div>
                <nuxt-link to="/" class="btn btn-ghost"> <img src="/logo-white.svg" alt="Logo"
                        class="h-10 w-auto" /></nuxt-link>
                <div class="flex-none hidden lg:block ml-auto">
                    <ul class="menu menu-horizontal">
                        <!-- Navbar menu content here -->
                        <nuxt-link to="/announcement" class="btn btn-ghost"><i
                                class="fa-solid fa-bullhorn"></i>Announcements</nuxt-link>
                        <nuxt-link to="/lesson" class="btn btn-ghost"><i class="fa-solid fa-book"></i>Lessons</nuxt-link>
                        <nuxt-link v-if="!user" to="/login" class="btn btn-ghost"><i
                                class="fa-solid fa-user"></i>Login</nuxt-link>
                        <a v-else @click="onClick" class="btn btn-ghost cursor-pointer"><i
                                class="fa-solid fa-sign-out"></i>Logout</a>
                    </ul>
                </div>
            </div>
        </div>
        <div class="drawer-side">
            <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
            <ul class="menu p-4 w-80 min-h-full bg-gray-950">
                <!-- Sidebar content here -->
                <nuxt-link to="/announcement" class="btn btn-ghost"><i
                        class="fa-solid fa-bullhorn"></i>Announcements</nuxt-link>
                <nuxt-link to="/lesson" class="btn btn-ghost"><i class="fa-solid fa-book"></i>Lessons</nuxt-link>
                <nuxt-link v-if="!user" to="/login" class="btn btn-ghost"><i
                        class="fa-solid fa-user"></i>Login</nuxt-link>
                <a v-else @click="onClick" class="btn btn-ghost cursor-pointer"><i
                        class="fa-solid fa-sign-out"></i>Logout</a>
            </ul>
        </div>
    </div>
</template>

<style scoped></style>