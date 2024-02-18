<template>
  <div class="modal is-active p-2">
    <div class="modal-background"></div>
    <div class="modal-card" ref="modalCardRef">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete Note?</p>
        <button class="delete" aria-label="close" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        Are you sure you want to delete this note?
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <button class="button" @click="closeModal">Cancel</button>
        <button class="button is-danger" @click="store.delete(noteId)">Delete</button>
      </footer>
    </div>
  </div>
</template>

<script setup>
// imports
import { ref, onMounted, onUnmounted } from "vue";
import { onClickOutside } from "@vueuse/core";
import { useStoreNotes } from "@/stores/storeNotes";


// props
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  noteId: {
    type: String
  }
})

// emits
const emit = defineEmits(["update:modelValue"])

const closeModal = () => {
  emit("update:modelValue", false);
}

// click outside to close
const modalCardRef = ref(null)

onClickOutside(modalCardRef, () => {
  closeModal();
});

// keyboard control close
const handleEscapeKey = e => {
  if (e.key === 'Escape') {
    closeModal();
  }
}

onMounted(() => {
  document.addEventListener('keyup', handleEscapeKey)
});

onUnmounted(() => {
  document.removeEventListener('keyup', handleEscapeKey)
})

// delete note
const store = useStoreNotes();

</script>