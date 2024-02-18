<template>
  <NavBar />
  <div class="container is-max-desktop p-2">
    <RouterView />
  </div>
</template>

<script setup>
/* imports */
import NavBar from '@/components/layout/NavBar.vue'
import { useStoreNotes } from './stores/storeNotes';
import { onMounted } from 'vue';

// store
const store = useStoreNotes();

// mounted
onMounted(() => {
  store.getNotes();
});
</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>