<template>
  <div class="notes">
    <AddEditNote v-model="newNote" placeholder="Add a new note" label="" ref="addEditNoteRef">
      <template #buttons>
        <button class="button is-link  has-background-success" @click="addNewNote" :disabled="!newNote">Add new
          note</button>
      </template>
    </AddEditNote>
    <progress v-if="!storeNotes.notesLoaded" class="progress is-large is-success" max="100" />
    <template v-else>
      <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
    </template>
    <div v-if="!storeNotes.notes.length" class="is-size-4 has-text-centered has-text-light-gray is-family-monospace py-6">
      No notes to display
    </div>


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