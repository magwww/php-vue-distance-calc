<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

defineProps<{
  label: string
  placeholder: string
  type?: string
  modelValue: string | number
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target) {
    emit('update:modelValue', target.value)
  }
}
</script>

<template>
  <div class="input-group">
    <label>{{ label }}</label>
    <input :placeholder="placeholder" :value="modelValue" @input="handleInput" required />
  </div>
</template>

<style scoped>
.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
}

input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
}
</style>
