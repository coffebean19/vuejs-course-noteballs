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
  </div>
</template>

<script setup>
// imports
import { useStoreNotes } from '@/stores/storeNotes';

const store = useStoreNotes();

</script>