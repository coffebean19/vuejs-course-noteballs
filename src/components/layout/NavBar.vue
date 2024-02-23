<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop p-2">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">Noteballs</div>

        <a @click.prevent="showModal = !showModal" role="button" :class="{ 'is-active': showModal }" class="navbar-burger"
          aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" ref="navbarBurgerRef">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarBasicExample" :class="{ 'is-active': showModal }" class="navbar-menu" ref="navbarMenuRef">
        <div class="navbar-start">
          <button class="button is-small is-info mt-3 ml-3">Log out</button>
        </div>
        <div class="navbar-end">
          <RouterLink @click="showModal = false" to="/" class="navbar-item" active-class="is-active">Notes</RouterLink>
          <RouterLink @click="showModal = false" to="/stats" class="navbar-item" active-class="is-active">Stats
          </RouterLink>
        </div>
      </div>
    </div>

  </nav>
</template>

<script setup>
//imports
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core"

//Navbar burger button
const showModal = ref(false);

const navbarMenuRef = ref(null);
const navbarBurgerRef = ref(null);

onClickOutside(navbarMenuRef, () => {
  showModal.value = false;
}, {
  ignore:
    [navbarBurgerRef]
});

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