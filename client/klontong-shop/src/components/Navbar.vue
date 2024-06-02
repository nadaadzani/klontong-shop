<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import Cookies from 'js-cookie'

const router = useRouter()

const isLoggedIn = computed(() => {
  return Cookies.get('token') !== undefined
})

const logout = () => {
  Cookies.remove('token')

  // Redirect the user to the login page or perform any other necessary actions
  router.push('/login')
}
</script>

<template>
  <nav class="fixed h-24 w-full bg-white z-10">
    <div class="flex items-center w-full h-24 mb-12 border-t-4 border-cyan-950 border-b text-xl">
      <ul class="flex justify-between w-full mx-24">
        <router-link :to="{ name: 'AddProduct' }" class="text-cyan-600 font-semibold"
          >Add product</router-link
        >
        <router-link :to="{ name: 'Home' }" class="text-cyan-800 font-extrabold text-2xl"
          >Klontong</router-link
        >
        <li v-if="!isLoggedIn">
          <router-link :to="{ name: 'Login' }" class="text-cyan-600 font-semibold"
            >Sign in</router-link
          >
        </li>
        <li v-else>
          <a href="#" @click.prevent="logout" class="text-cyan-600 font-semibold"> Logout </a>
        </li>
      </ul>
    </div>
  </nav>
</template>
