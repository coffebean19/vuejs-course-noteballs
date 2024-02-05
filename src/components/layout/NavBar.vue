<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop p-2">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">Noteballs</div>

        <a @click.prevent="showModal = !showModal" role="button" :class="{ 'is-active': showModal }" class="navbar-burger"
          aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" :class="{ 'is-active': showModal }" class="navbar-menu">
        <div class="navbar-end">
          <RouterLink to="/" class="navbar-item" active-class="is-active">Notes</RouterLink>
          <RouterLink to="/stats" class="navbar-item" active-class="is-active">Stats</RouterLink>
        </div>
      </div>
    </div>

  </nav>
</template>

<script setup>
//imports
import { ref } from "vue";

//Navbar burger button
const showModal = ref(false);

</script>

<style scoped>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>