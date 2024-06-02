<script setup>
import Navbar from '@/components/Navbar.vue'
import Cookies from 'js-cookie'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const formData = ref({
  name: '',
  categoryName: '',
  description: '',
  weight: '',
  width: '',
  length: '',
  height: '',
  image: '',
  sku: '',
  price: ''
})

const router = useRouter()

const addProduct = async () => {
  try {
    const fd = new FormData()
    fd.append('name', formData.value.name)
    fd.append('category', formData.value.category)
    fd.append('description', formData.value.description)
    fd.append('weight', formData.value.weight)
    fd.append('width', formData.value.width)
    fd.append('length', formData.value.length)
    fd.append('height', formData.value.height)
    fd.append('image', formData.value.image) // use the file directly
    fd.append('sku', formData.value.sku)
    fd.append('price', formData.value.price)

    const response = await fetch('http://localhost:3000/products', {
      method: 'POST',
      credentials: 'include',
      headers: {
        Cookie: Cookies.get('token')
      },
      body: fd
    })
    await response.json()
    await router.push('/')
  } catch (err) {
    console.error(err)
  }
}

const handleAddProduct = async () => {
  await addProduct()
}
</script>

<template>
  <Navbar />
  <main class="pt-36 flex w-full h-screen bg-gray-200 justify-around">
    <form @submit.prevent="handleAddProduct">
      <div class="w-[32rem] h-[32rem] bg-white rounded-[5%]">
        <h3 class="font-bold tracking-wide text-3xl text-center pt-4">Add your product</h3>

        <div class="flex gap-4 mt-4 mx-8">
          <div>
            <label for="name" class="text-lg font-semibold">Product Name</label>
            <input
              type="text"
              id="name"
              class="border-2 border-gray-300 rounded-lg p-2 w-full"
              v-model="formData.name"
              required
            />
          </div>
          <div>
            <label class="text-lg font-semibold">Category Name</label>
            <select
              name="category"
              id=""
              class="border-2 border-gray-300 rounded-lg p-2 w-full"
              v-model="formData.categoryName"
            >
              <option value="food">Food</option>
              <option value="snack">Snack</option>
              <option value="clothes">Clothes</option>
              <option value="electronics">Electronics</option>
            </select>
          </div>
        </div>

        <div class="flex mx-8 mt-4">
          <div class="w-full">
            <label for="" class="text-lg font-semibold">Description</label>
            <input
              type="text"
              class="border-2 border-gray-300 rounded-lg p-2 w-full"
              v-model="formData.description"
            />
          </div>
        </div>

        <!-- Create a label and an input for weight, width, length, height but divided them 2 on 2 -->
        <div class="flex gap-4 mx-8 mt-4">
          <div>
            <label for="weight" class="text-lg font-semibold">Weight</label>
            <input
              type="number"
              id="weight"
              class="border-2 border-gray-300 rounded-lg p-2 w-full"
              v-model="formData.weight"
              required
            />
          </div>
          <div>
            <label for="width" class="text-lg font-semibold">Width</label>
            <input
              type="number"
              id="width"
              class="border-2 border-gray-300 rounded-lg p-2 w-full"
              v-model="formData.width"
              required
            />
          </div>

          <div>
            <label for="length" class="text-lg font-semibold">Length</label>
            <input
              type="number"
              id="length"
              class="border-2 border-gray-300 rounded-lg p-2 w-full"
              v-model="formData.length"
              required
            />
          </div>
          <div>
            <label for="height" class="text-lg font-semibold">Height</label>
            <input
              type="number"
              id="height"
              class="border-2 border-gray-300 rounded-lg p-2 w-full"
              v-model="formData.height"
              required
            />
          </div>
        </div>

        <div class="flex gap-4 mx-8 mt-4 items-center">
          <!-- Create an input for file upload -->
          <label for="image" class="text-lg font-semibold">Image</label>
          <input
            type="file"
            id="image"
            class="border-2 border-gray-300 rounded-lg p-2 w-full"
            @change="formData.image = $event.target.files[0]"
            required
          />
        </div>

        <div class="flex gap-4 mx-8 mt-4 items-center">
          <label for="" class="font-semibold">SKU</label>
          <input
            type="text"
            class="border-2 border-gray-300 rounded-lg p-2 w-full"
            v-model="formData.sku"
            required
          />

          <label for="" class="font-semibold">Price</label>
          <input
            type="number"
            class="border-2 border-gray-300 rounded-lg p-2 w-full"
            v-model="formData.price"
            required
          />
        </div>

        <div class="flex mt-4 justify-center items-center">
          <button
            type="submit"
            class="w-64 h-10 rounded-xl border-black border-2 hover:bg-black hover:text-white transition-all"
          >
            Add product
          </button>
        </div>
      </div>
    </form>
  </main>
</template>
