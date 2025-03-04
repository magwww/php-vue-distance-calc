<script setup lang="ts">
defineProps<{
  name: string
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
    <label v-if="label" :for="name">{{ label }}</label>
    <input
      :id="name"
      :name="name"
      :type="type || 'text'"
      :placeholder="placeholder"
      :value="modelValue"
      @input="handleInput"
      required
    />
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
