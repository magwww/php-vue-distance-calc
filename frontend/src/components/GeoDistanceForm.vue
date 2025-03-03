<template>
  <form @submit.prevent="onSubmit">
    <div class="input-group">
      <label>Point 1 📍</label>
      <div class="inputs">
        <input v-model.number="point1.lat" placeholder="Latitude (e.g. 52.2298)" required />
        <input v-model.number="point1.lng" placeholder="Longitude (e.g. 21.0122)" required />
      </div>
    </div>
    <div class="input-group">
      <label>Point 2 📍</label>
      <div class="inputs">
        <input v-model.number="point2.lat" placeholder="Latitude (e.g. 41.9028)" required />
        <input v-model.number="point2.lng" placeholder="Longitude (e.g. 12.4964)" required />
      </div>
    </div>
    <button type="submit">Calculate distance</button>
  </form>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'

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

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.inputs {
  display: flex;
  gap: 1rem;
}

input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
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
