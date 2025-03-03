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
import { type GeoPoint, type DistanceResult } from './types/index'

const distance = ref<DistanceResult | undefined>(undefined)

const calculateDistance = async (points: { point1: GeoPoint; point2: GeoPoint }) => {
  distance.value = await GeoDistanceService.calculateDistance(points)
}
</script>
