<template>
  <NavBar />
  <div class="container is-max-desktop p-2">
    <RouterView />
  </div>
</template>

<script setup>
/* imports */
import NavBar from '@/components/layout/NavBar.vue'
import { useStoreAuth } from './stores/storeAuth';
import { onMounted } from 'vue';

// store
const store = useStoreAuth();

// mounted
onMounted(() => {
  store.init();
});
</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>