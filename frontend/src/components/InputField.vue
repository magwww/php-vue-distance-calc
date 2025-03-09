<script setup lang="ts">
defineProps<{
  name: string
  label: string
  placeholder: string
  type?: string
  modelValue: number | null
  error?: string
  touch?: () => void
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: number | null): void
}>()

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value ? Number(target.value) : null)
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
      @blur="touch?.()"
    />
    <p v-if="error" class="error">{{ error }}</p>
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

.error {
  color: red;
  font-size: 0.875rem;
}
</style>
