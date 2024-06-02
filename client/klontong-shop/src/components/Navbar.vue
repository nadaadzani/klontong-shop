<script setup></script>

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
        <router-link :to="{ name: 'Login' }" class="text-cyan-600 font-semibold"
          >Sign in</router-link
        >
      </ul>
    </div>
  </nav>
</template>
