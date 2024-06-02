<script setup>
import Navbar from '@/components/Navbar.vue'
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const data = ref([])
const loading = ref(true)
const error = ref(null)
const router = useRouter()
const route = useRoute()

const fetchProductById = async () => {
  try {
    loading.value = true
    const response = await fetch(`http://localhost:3000/products/${route.params.id}`)
    data.value = await response.json()
  } catch (err) {
    error.value = err
    console.log(err.message)
  } finally {
    loading.value = false
  }
}

// onMounted(async () => {
//   await fetchProductById()
// })
</script>

<template>
  <Navbar />
  {{ console.log(data) }}
  <main class="pt-36 flex w-full h-screen bg-gray-200 px-8 justify-evenly">
    <!-- Image container on the left -->
    <div class="w-1/3 h-[32rem]">
      <img
        src="https://th.bing.com/th/id/OIP.hir_HwimOCmg8Hzdl-MfKQHaHa?rs=1&pid=ImgDetMain"
        alt="pic"
        class="w-full h-full object-cover rounded-xl"
      />
    </div>
    <!-- Product statistics on the right -->
    <div class="w-1/3 h-[32rem] bg-white rounded-xl">
      <div class="mx-4">
        <h2 class="tracking-widest text-gray-800 font-extrabold text-md mt-4">
          Home / Category name / Product name
        </h2>
        <h3 class="mt-4 text-lg font-bold tracking-wide">
          Product name <span class="ml-2 text-sm font-bold text-gray-500">SKU</span>
        </h3>
        <h4 class="mt-2 font-semibold">Rp. 340,000.00-</h4>
        <p class="mt-8">
          Description of large Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit velit
          modi officia ut dolore! Minus voluptatem dolores ea iure veritatis aliquid sequi
          aspernatur eaque, qui accusantium! Sunt nostrum ducimus tempore.
        </p>
        <h5 class="mt-12 mb-4">Product details</h5>
        <div class="flex text-center">
          <div class="w-1/4">Weight</div>
          <div class="w-1/4">Width</div>
          <div class="w-1/4">Length</div>
          <div class="w-1/4">Height</div>
        </div>
        <div class="flex justify-center mt-12">
          <button class="w-[80%] border-black border-2 rounded-3xl h-12">Buy now</button>
        </div>
      </div>
    </div>
  </main>
</template>
