<script setup>
// import Navbar from './components/Navbar.vue'
// import { ref, computed } from 'vue'

// const currentPage = ref(1)
// const pageSize = ref(10)
// const totalItems = ref(100)

// const totalPages = computed(() => Math.ceil(totalItems.value / pageSize.value))

// const prevPage = () => {
//   if (currentPage.value > 1) {
//     currentPage.value--
//   }
// }

// const nextPage = () => {
//   if (currentPage.value < totalPages.value) {
//     currentPage.value++
//   }
// }
</script>

<template>
  <!-- <Navbar /> -->
  <router-view />

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
