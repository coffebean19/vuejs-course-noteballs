<template>
  <div class="notes">
    <AddEditNote v-model="newNote" placeholder="Add a new note" label="" ref="addEditNoteRef">
      <template #buttons>
        <button class="button is-link  has-background-success" @click="addNewNote" :disabled="!newNote">Add new
          note</button>
      </template>
    </AddEditNote>

    <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />

  </div>
</template>

<script setup>
// imports
import { ref } from 'vue';
import Note from '@/components/notes/Note.vue'
import AddEditNote from '@/components/notes/AddEditNote.vue'
import { useStoreNotes } from '@/stores/storeNotes'
import { useWatchCharacters } from "@/use/useWatchCharacters"

// notes

const newNote = ref('');

const storeNotes = useStoreNotes();
const addEditNoteRef = ref(null);

const addNewNote = () => {
  storeNotes.addNote(newNote.value);
  newNote.value = '';
  addEditNoteRef.value.focusTextArea();
}

useWatchCharacters(newNote);

</script>