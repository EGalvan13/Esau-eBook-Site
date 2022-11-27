<template>
  <div>
    <Header />
    <div class="wrapper">
      <HelloWorld msg="📔 Ebook 📔" />
    </div>
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import HelloWorld from "../components/HelloWorld.vue";
export default {
  components: { Header, HelloWorld },
};
</script>

<style lang="scss" scoped>
.greetings {
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin-bottom: 2rem;
}

@media (min-width: 1024px) {
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>