<script setup>
import { RouterView } from "vue-router";
// import Navbar from "./Navbar.vue";
import Navbar from "./Navbar.vue";
</script>

<template>
  <header>
    <div class="header-inner">
      <img alt="Logo" class="logo" src="@/assets/logos/Dino.png" width="100" height="100" />
      <Navbar />
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  padding: 1rem;
  max-height: 100vh;
  margin-bottom: 2rem;
  border-bottom: 1px solid #000;

  .header-inner {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    line-height: 1.5;
  }
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    .header-inner {
      display: flex;
      place-items: center;
      align-items: center;
    }
  }

  .logo {
    margin: 0 auto 0 0;
  }
}
</style>
