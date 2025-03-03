<template>
  <div class="input-group">
    <label>{{ label }}</label>
    <input
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      required
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  placeholder: string
  type?: string
  modelValue: string | number
}>()

defineEmits(['update:modelValue'])
</script>

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
