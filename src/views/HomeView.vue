
<template>
  <!-- <div>
      <iframe
        src="../../Books/Gary Hamel - Humanocracy_ Creating Organizations as Amazing as the People Inside Them (2020) (1).pdf"
        frameborder="0"
        scrolling="auto"
        height="1000px"
        width="100%"
      ></iframe>
  </div>-->
  <div class="flex flex-wrap justify-center">
    <div v-for="book,index in allBooks" :key="index">
      <div
        class="cursor-pointer w-96 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-1"
        style="height: 305px"
        @click="onClickBook(book.id)"
      >
        <div class="relative">
          <img class="rounded-t-lg h-52 w-full" :src="book.image" alt />
          <button
            v-if="book.favorite"
            @click.stop="onClickFavorite(book)"
            type="button"
            class="absolute right-1 top-1 text-white bg-red-100 hover:bg-red-200 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <i class="text-red-600 fa-solid fa-heart fa-xl"></i>
          </button>
          <button
            v-if="!book.favorite"
            @click.stop="onClickFavorite(book)"
            type="button"
            class="absolute right-1 top-1 text-white bg-red-100 hover:bg-red-200 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <i class="fa-solid fa-heart fa-xl"></i>
          </button>
        </div>
        <div class="p-5">
          <div>
            <h6
              class="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white"
            >{{book.name}}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const allBooks = ref(JSON.parse(localStorage.getItem("BOOKS")) || []);
const onClickBook = (id) => {
  router.push(`/book/${id}`);
};
const onClickFavorite = (b) => {
  // console.log(b);
  allBooks.value.map((book) => {
    if (Number(book.id) === Number(b.id)) {
      book.favorite = book.favorite === true ? false : true;
      return book;
    }
    return book;
  });
  localStorage.setItem("BOOKS", JSON.stringify(allBooks.value));
};
</script>