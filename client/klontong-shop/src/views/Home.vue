<script setup>
import Navbar from '../components/Navbar.vue'
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const currentPage = ref(1)
const pageSize = ref(10)
const totalItems = ref(100)

// Products data
const data = ref([])
const loading = ref(true)
const error = ref(null)
const router = useRouter()
const route = useRoute()

const offset = computed(() => (currentPage.value - 1) * 10)

const totalPages = computed(() => Math.ceil(totalItems.value / pageSize.value))

const prevPage = async () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
  await fetchProducts()
  updateURL()
}

const nextPage = async () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
  await fetchProducts()
  updateURL()
}

const updateURL = () => {
  router.push({ query: { page: currentPage.value } })
}

const fetchProducts = async () => {
  try {
    loading.value = true
    const response = await fetch(`http://localhost:3000/products?offset=${offset.value}`)
    data.value = await response.json()
  } catch (err) {
    error.value = err
    console.log(err.message)
  } finally {
    loading.value = false
  }
}

onMounted(async () => {
  const page = Number(route.query.page) || 1
  currentPage.value = page
  await fetchProducts()
})

watch(
  () => currentPage.value,
  async () => {
    // console.log('Page changed:', currentPage)
    await fetchProducts()
  }
)
</script>

<template>
  <Navbar />

  <div class="pt-24 w-[95%] mx-auto justify-center items-center relative">
    <img
      src="../assets/imgs/klontong-banner.jpg"
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
        <div v-for="product in data.data?.slice(0, 5)" class="w-72 h-72 border-4 border-black">
          <!-- {{ console.log(data) }} -->
          <img :src="product.image" alt="pic" class="w-full h-36" />
          <div class="w-[95%] mx-auto flex justify-between mt-2">
            <h4 class="text-xs">{{ product.name }}</h4>
            <p class="text-sm font-semibold">Rp. {{ product.price }}</p>
          </div>
          <p class="w-[95%] mx-auto mt-4 text-sm">{{ product.description }}</p>

          <div class="w-full bg-cyan-800 text-center mt-[1.75rem]">
            <router-link
              :to="`product/${product.id}`"
              class="w-[95%] mx-auto mt-full text-sm text-white font-bold text-center"
            >
              View product
            </router-link>
          </div>
        </div>
      </div>

      <div class="flex gap-8">
        <div v-for="product in data.data?.slice(5, 10)" class="w-72 h-72 border-4 border-black">
          <!-- {{ console.log(data) }} -->
          <img :src="product.image" alt="pic" class="w-full h-36" />
          <div class="w-[95%] mx-auto flex justify-between mt-2">
            <h4 class="text-xs">{{ product.name }}</h4>
            <p class="text-sm font-semibold">Rp. {{ product.price }}</p>
          </div>
          <p class="w-[95%] mx-auto mt-4 text-sm">{{ product.description }}</p>

          <div class="w-full bg-cyan-800 text-center mt-[1.75rem]">
            <router-link
              :to="`product/${product.id}`"
              class="w-[95%] mx-auto mt-full text-sm text-white font-bold text-center"
            >
              View product
            </router-link>
          </div>
        </div>
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
</template>
