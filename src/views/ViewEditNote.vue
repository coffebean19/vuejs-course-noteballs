<template>
  <div class="edit-note">
    <AddEditNote v-model="noteContent" bg-color="link" placeholder="Edit note" label="Edit note" ref="addEditNoteRef">
      <template #buttons>
        <button @click="$router.back()" class="button is-link is-light">Cancel</button>
        <button class="button is-link has-background-link" :disabled="!noteContent">Save note</button>
      </template>
    </AddEditNote>
    <!-- <pre>{{ $route.params.id }}</pre> -->
  </div>
</template>

<script setup>
// imports
import { ref } from 'vue';
import AddEditNote from '@/components/notes/AddEditNote.vue';
import { useStoreNotes } from '@/stores/storeNotes'
import { useRoute } from 'vue-router';
import router from '@/router';

// router
const route = useRoute();

// console.log(route.params.id)

// store
const noteStore = useStoreNotes();

// note
const noteContent = ref("");
noteContent.value = noteStore.getNoteContent(route.params.id);

</script>