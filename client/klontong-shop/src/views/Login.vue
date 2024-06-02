<script setup>
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <Navbar />
  <main class="pt-24 h-screen bg-gray-200 flex w-full justify-center items-center">
    <div class="bg-white w-[30rem] h-[30rem] rounded-xl">
      <h1 class="text-4xl text-center font-bold mt-8">Login</h1>
      <div class="flex flex-col gap-4 p-8">
        <label for="username" class="text-lg font-semibold">Username</label>
        <input type="username" id="username" class="border-2 border-gray-300 rounded-lg p-2" />
        <label for="password" class="text-lg font-semibold">Password</label>
        <input type="password" id="password" class="border-2 border-gray-300 rounded-lg p-2" />
        <button
          class="bg-white text-cyan-800 font-bold rounded-3xl p-2 mx-2 mt-4 h-12 border-black border-2 hover:bg-cyan-800 hover:text-white transition-all"
        >
          Login
        </button>

        <router-link to="/register" class="text-center font-semibold">
          New to Klontong?
          <span class="text-cyan-800 underline font-bold">Sign up.</span></router-link
        >
      </div>
    </div>
  </main>
</template>
