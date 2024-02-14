<template>
  <div class="card has-background-success-dark p-4 mb-5">
    <div class="field">
      <label class="label">Message</label>
      <div class="control">
        <textarea :value="props.modelValue" @input="$emit('update:modelValue', modelValue)" class="textarea"
          placeholder="Add a new note" ref="newNoteRef" />
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
// props
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  }
})

// emits
const emit = defineEmits(['update:modelValue'])
</script>