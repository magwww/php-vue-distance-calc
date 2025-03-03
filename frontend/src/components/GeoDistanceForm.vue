<template>
  <form @submit.prevent="onSubmit">
    <div>
      <p>Point 1 📍</p>
      <div class="inputs">
        <InputField
          name="latitude"
          type="number"
          v-model="point1.lat"
          label="Latitude"
          placeholder="e.g. 52.2298"
        />
        <InputField
          name="longitude"
          type="number"
          v-model="point1.lng"
          label="Longitude"
          placeholder="e.g. 21.0122"
        />
      </div>
    </div>
    <div>
      <p>Point 2 📍</p>
      <div class="inputs">
        <InputField
          name="latitude"
          type="number"
          v-model="point2.lat"
          label="Latitude"
          placeholder="e.g. 41.9028"
        />
        <InputField
          name="longitude"
          type="number"
          v-model="point2.lng"
          label="Longitude"
          placeholder="e.g. 12.4964"
        />
      </div>
    </div>
    <button type="submit">Calculate distance</button>
  </form>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import InputField from '@/components/InputField.vue'

const point1 = ref({ lat: '', lng: '' })
const point2 = ref({ lat: '', lng: '' })

const emit = defineEmits(['calculate'])

const onSubmit = () => {
  emit('calculate', { point1: point1.value, point2: point2.value })
}
</script>

<style scoped>
form {
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.inputs {
  display: flex;
  gap: 1rem;
}

button {
  padding: 0.75rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.4s;
}

button:hover {
  background-color: #1d5220;
}
</style>
