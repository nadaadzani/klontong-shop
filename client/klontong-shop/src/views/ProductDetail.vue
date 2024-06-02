<script setup>
import Navbar from '@/components/Navbar.vue'
import Cookies from 'js-cookie'
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const data = ref([])
const loading = ref(true)
const error = ref(null)
const route = useRoute()

const fetchProductById = async () => {
  try {
    loading.value = true
    const response = await fetch(`http://localhost:3000/products/${route.params.id}`, {
      credentials: 'include',
      headers: {
        Cookie: Cookies.get('token')
      }
    })
    data.value = await response.json()
  } catch (err) {
    error.value = err
    console.log(err.message)
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  await fetchProductById()
})
</script>

<template>
  <Navbar />
  <main class="pt-36 flex w-full h-screen bg-gray-200 justify-around">
    <!-- Image container on the left -->
    <div class="w-1/2 h-[32rem]">
      <img :src="data.data?.image" alt="pic" class="w-full h-full object-cover rounded-xl" />
    </div>
    <!-- Product statistics on the right -->
    <div class="w-1/3 h-[32rem] bg-white rounded-xl">
      <div class="mx-4">
        <h2 class="tracking-widest text-gray-800 font-extrabold text-md mt-4">
          Home / {{ data.data?.categoryName }} / {{ data.data?.name }}
        </h2>
        <h3 class="mt-4 text-lg font-bold tracking-wide">
          {{ data.data?.name }}
          <span class="ml-2 text-sm font-bold text-gray-500">{{ data.data?.sku }}</span>
        </h3>
        <h4 class="mt-2 font-semibold">Rp. {{ data.data?.price }}.00-</h4>
        <p class="mt-8">
          {{ data.data?.description }}
        </p>
        <h5 class="mt-12 mb-4 font-bold tracking-wide">Product details</h5>
        <div>
          <div class="w-1/4">Weight: {{ data.data?.weight }}gr</div>
          <div class="w-1/4">Width: {{ data.data?.height }}cm</div>
          <div class="w-1/4">Length: {{ data.data?.length }}cm</div>
          <div class="w-1/4">Height: {{ data.data?.height }}cm</div>
        </div>
        <div class="flex justify-center mt-12">
          <button
            class="w-[80%] border-black border-2 rounded-3xl h-12 hover:bg-black hover:text-white transition-all"
          >
            Buy now
          </button>
        </div>
      </div>
    </div>
  </main>
</template>
