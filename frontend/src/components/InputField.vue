<script setup lang="ts">
defineProps<{
  name: string
  label: string
  placeholder: string
  type?: string
  modelValue: number | string | null
  error?: string
  touch?: () => void
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: number | string | null): void
}>()

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  let value: number | string | null = target.value === '' ? null : target.value

  if (target.type === 'number' && value !== null) {
    value = Number(value)
  }

  emit('update:modelValue', value)
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
