<template>
  <div class="stats">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ store.getTotalNotes }}</td>
        </tr>
        <tr>
          <td>Number of Characters</td>
          <td>{{ store.getTotalCharacters }}</td>
        </tr>
      </tbody>
    </table>
    <input class="input" type="text" placeholder="Do you like noteballs?" v-autofocus v-model="loveNoteballsRef" />
  </div>
</template>

<script setup>
// imports
import { ref } from 'vue';
import { useStoreNotes } from '@/stores/storeNotes';
import { vAutofocus } from "@/directives/vAutofocus"
import { useWatchCharacters } from '@/use/useWatchCharacters';

const store = useStoreNotes();

// love noteballs
const loveNoteballsRef = ref('');

useWatchCharacters(loveNoteballsRef, 50);

</script>