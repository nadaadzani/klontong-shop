<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import Navbar from './components/Navbar.vue'
import { ref, computed } from 'vue'

const currentPage = ref(1)
const pageSize = ref(10)
const totalItems = ref(100)

const totalPages = computed(() => Math.ceil(totalItems.value / pageSize.value))

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}
</script>

<template>
  <Navbar />

  <div class="pt-24 w-[95%] mx-auto justify-center items-center relative">
    <img
      src="./assets/imgs/klontong-banner.jpg"
      alt="Banner"
      class="h-[540px] mx-auto w-[1440px] object-cover"
    />

    <div class="absolute top-[40%] left-[42.5%] text-white text-5xl font-extrabold">
      <p class="mt-2">Shop that</p>
      <p class="mt-2">moves you</p>
      <p class="mt-2">forward.</p>
    </div>

    <button
      class="absolute top-[80%] left-[45%] w-36 rounded-xl h-12 border-black bg-white text-cyan-800 font-extrabold hover:bg-cyan-800 hover:text-white transition-all"
    >
      Learn more
    </button>
  </div>

  <main>
    <h3 class="text-center text-4xl font-bold mt-8">Our products</h3>

    <!-- Card container (Reusable component) -->
    <div class="w-[95%] mx-auto bg-gray-200 h-[32rem] mt-10">
      <div class="flex gap-8 mb-8">
        <div class="w-72 h-72 bg-gray-400"></div>
        <div class="w-72 h-72 bg-gray-400"></div>
        <div class="w-72 h-72 bg-gray-400"></div>
        <div class="w-72 h-72 bg-gray-400"></div>
        <div class="w-72 h-72 bg-gray-400"></div>
      </div>
      <div class="flex gap-8">
        <div class="w-72 h-72 bg-gray-400"></div>
        <div class="w-72 h-72 bg-gray-400"></div>
        <div class="w-72 h-72 bg-gray-400"></div>
        <div class="w-72 h-72 bg-gray-400"></div>
        <div class="w-72 h-72 bg-gray-400"></div>
      </div>

      <!-- Pagination bar -->
      <div class="flex w-full mx-auto mt-8 gap-2 justify-center items-center">
        <button
          :disabled="currentPage === 1"
          @click="prevPage"
          class="rounded-2xl bg-cyan-600 text-white w-20 h-10 mr-8"
        >
          Previous
        </button>
        <span>Page {{ currentPage }} of {{ totalPages }}</span>
        <button
          :disabled="currentPage === totalPages"
          @click="nextPage"
          class="rounded-2xl bg-cyan-600 text-white w-20 h-10 ml-8"
        >
          Next
        </button>
      </div>
    </div>
  </main>

  <!-- Vue elements as a reference (I just started learning) -->
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main> -->
</template>
