<template>
  <div>
    <div>
      <button
        type="button"
        @click="$router.back()"
        class="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <i class="fa-solid fa-arrow-left fa-lg"></i>
      </button>
    </div>
    <div class="mt-5">
      <iframe class="w-full" style="height: 100vh" :src="book.book" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const allBooks = ref(JSON.parse(localStorage.getItem("BOOKS")) || []);
const book = ref({});

onMounted(() => {
  book.value = allBooks.value.find(
    (book) => Number(book.id) === Number(route.params.id)
  );
});
</script>

<style>
</style>