<template>
  <div>
    <GeoDistanceForm @calculate="calculateDistance" />
    <GeoDistanceResult :distance="distance" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import GeoDistanceForm from './components/GeoDistanceForm.vue'
import GeoDistanceResult from './components/GeoDistanceResult.vue'
import { GeoDistanceService } from './services/GeoDistanceService'

const distance = ref(null)

const calculateDistance = async (points) => {
  distance.value = await GeoDistanceService.calculateDistance(points)
}
</script>
