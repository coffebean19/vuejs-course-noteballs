<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="card mb-4">
      <div class="card-content">
        <div class="content">
          {{ note.content }}
          <div class="has-text-right has-text-gray-light mt-2"> <small> {{ characterLength }}</small></div>
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item" @click.prevent="handleDeleteClick">Delete</a>
      </footer>
    </div>
  </div>
</template>

<script setup>
// imports
import { computed } from 'vue';

// props
const props = defineProps({
  note: {
    type: Object,
    required: true,
  }
})

// emits
const emit = defineEmits([
  'deleteClicked'
])

// character length

const characterLength = computed(() => {
  let length = props.note.content.length
  let description = length > 1 ? 'characters' : 'character'
  return `${length} ${description}`
})

// handle delete click

const handleDeleteClick = () => {
  emit('deleteClicked', props.note.id);
}

</script>