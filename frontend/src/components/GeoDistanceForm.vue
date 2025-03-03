<template>
  <form @submit.prevent="onSubmit">
    <div class="input-group">
      <label>Punkt 1</label>
      <input v-model.number="point1.lat" placeholder="Szerokość (np. 52.2298)" required />
      <input v-model.number="point1.lng" placeholder="Długość (np. 21.0122)" required />
    </div>
    <div class="input-group">
      <label>Punkt 2</label>
      <input v-model.number="point2.lat" placeholder="Szerokość (np. 41.9028)" required />
      <input v-model.number="point2.lng" placeholder="Długość (np. 12.4964)" required />
    </div>
    <button type="submit">Oblicz odległość</button>
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
.input-group {
  margin-bottom: 10px;
}
</style>
