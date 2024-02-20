<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="card mb-4">
      <div class="card-content">
        <div class="content">
          {{ note.content }}
          <div class="columns is-mobile has-text-gray-light mt-2">
            <small class="column">{{ dateFormatted }}</small>
            <small class="column has-text-right"> {{ characterLength }}</small>
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <RouterLink :to="`/editNote/${note.id}`" class="card-footer-item">
          Edit
        </RouterLink>
        <a href="#" class="card-footer-item" @click.prevent="modals.deleteNote = true">Delete</a>
      </footer>
      <ModalDeleteNote v-if="modals.deleteNote" v-model="modals.deleteNote" :noteId="note.id" />
    </div>
  </div>
</template>

<script setup>
// imports
import { computed, reactive } from 'vue';
import { useStoreNotes } from '@/stores/storeNotes';
import ModalDeleteNote from './ModalDeleteNote.vue';
import { useDateFormat } from '@vueuse/core';

// store
// eslint-disable-next-line no-unused-vars
const storeNotes = useStoreNotes();

// props
const props = defineProps({
  note: {
    type: Object,
    required: true,
  }
})
// character length

const characterLength = computed(() => {
  let length = props.note.content.length
  let description = length > 1 ? 'characters' : 'character'
  return `${length} ${description}`
})

// date formated
const dateFormatted = computed(() => {
  let date = new Date(parseInt(props.note.date));
  return useDateFormat(date, 'DD-MM-YYYY @ HH:mm').value;
})

const modals = reactive({
  deleteNote: false
})

</script>