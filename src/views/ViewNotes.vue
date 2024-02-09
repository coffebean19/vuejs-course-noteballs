<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea v-model="newNote" class="textarea" placeholder="Add a new note" ref="newNoteRef" />
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button class="button is-link  has-background-success" @click="addNewNote" :disabled="!newNote">Add new
            note</button>
        </div>
      </div>

      <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" @deleteClicked="deleteNote" />

    </div>
  </div>
</template>

<script setup>
// imports
import { ref } from 'vue';
import Note from '@/components/notes/Note.vue'
import { useStoreNotes } from '@/stores/storeNotes'

// notes

const newNote = ref('');
const newNoteRef = ref(null);

const storeNotes = useStoreNotes();

const addNewNote = () => {
  storeNotes.addNote(newNote);
  newNote.value = '';
  newNoteRef.value.focus();
}

</script>