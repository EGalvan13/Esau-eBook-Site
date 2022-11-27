<script setup>
import { RouterLink } from "vue-router";
import { useRouter } from "vue-router";

const router = useRouter();

const onClickLogout = () => {
  console.log("clicked on logout");
  localStorage.setItem("TOKEN", "");
  router.push("/login");
};
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
    <button class="text-white" @click="onClickLogout()">Logout</button>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  font-size: 1rem;
  text-align: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);

  &:hover {
    background-color: transparent;
  }
}

nav a,
nav > div {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav > div {
  display: inline-block;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  nav {
    text-align: left;
    margin-left: -1rem;
    padding: 1rem 0;
  }
}
</style>
