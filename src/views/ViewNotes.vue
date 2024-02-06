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

      <Note v-for="note in notes" :key="note.id" :note="note" @deleteClicked="deleteNote" />

    </div>
  </div>
</template>

<script setup>
// imports
import { ref } from 'vue';
import Note from '@/components/notes/Note.vue'

// notes
const notes = ref([
  {
    id: 'id1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est error reprehenderit debitis itaque ipsam omnis sedunde eum ut nam illum doloribus accusamus placeat consectetur tenetur perferendis, a sint excepturi?'
  },
  {
    id: 'id2',
    content: 'Another note with shorter things in it.!'
  },
])

const newNote = ref('');
const newNoteRef = ref(null);

const addNewNote = () => {
  let currentDate = new Date().getTime(),
    id = currentDate.toString();

  const note = {
    id,
    content: newNote.value,
  }

  notes.value.unshift(note);
  newNote.value = '';
  newNoteRef.value.focus();
}

// delete note
const deleteNote = idToDelete => {
  notes.value = notes.value.filter(note => { return note.id !== idToDelete })
}

</script>