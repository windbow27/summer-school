<template>
    <!-- <div class="drawer">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col"></div>
        <div class="navbar bg-gray-950">
            <div class="flex-1">
                <router-link to="/" class="navbar-brand btn btn-ghost text-xl text-white">Iris</router-link>
            </div>
            <div class="flex-none">
                <ul class="menu menu-horizontal px-1 space-x-3 text-white">
                    <router-link to="/" class="btn btn-ghost">Announcement</router-link>
                    <router-link to="/course" class="btn btn-ghost">Course</router-link>
                    <router-link to="/about" class="btn btn-ghost">Sign Up</router-link>
                </ul>
            </div>
        </div>
    </div>
    <div class="drawer-side">
    <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label> 
    <ul class="menu p-4 w-80 min-h-full bg-base-200">
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div> -->
    <div class="drawer">
        <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col">
            <!-- Navbar -->
            <div class="w-full navbar bg-gray-950 text-white">
                <div class="flex-none lg:hidden">
                    <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="inline-block w-6 h-6 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </label>
                </div>
                <router-link to="/" class="btn btn-ghost text-xl text-white">Iris</router-link>
                <div class="flex-none hidden lg:block ml-auto">
                    <ul class="menu menu-horizontal">
                        <!-- Navbar menu content here -->
                        <router-link to="/" class="btn btn-ghost"><i class="fa-solid fa-bullhorn"></i>Announcement</router-link>
                        <router-link to="/course" class="btn btn-ghost"><i class="fa-solid fa-book"></i>Course</router-link>
                        <router-link to="/signup" class="btn btn-ghost"><i class="fa-solid fa-user-plus"></i>Sign Up</router-link>
                    </ul>
                </div>
            </div>
        </div>
        <div class="drawer-side">
            <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
            <ul class="menu p-4 w-80 min-h-full bg-gray-900 text-white">
                <!-- Sidebar content here -->
                <router-link to="/" class="btn btn-ghost"><i class="fa-solid fa-bullhorn"></i>>Announcement</router-link>
                        <router-link to="/course" class="btn btn-ghost"><i class="fa-solid fa-book"></i>Course</router-link>
                        <router-link to="/signup" class="btn btn-ghost"><i class="fa-solid fa-user-plus"></i>Sign Up</router-link>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>