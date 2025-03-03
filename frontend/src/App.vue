<template>
  <div class="container animate-in">
    <h1>Calculate distance</h1>
    <GeoDistanceForm @calculate="calculateDistance" />
    <GeoDistanceResult :distance="distance" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import GeoDistanceForm from '@/components/GeoDistanceForm.vue'
import GeoDistanceResult from '@/components/GeoDistanceResult.vue'
import { GeoDistanceService } from '@/services/GeoDistanceService'
import { type GeoPoint, type DistanceResult } from '@/types/index'

const distance = ref<DistanceResult | undefined>(undefined)

const calculateDistance = async (points: { point1: GeoPoint; point2: GeoPoint }) => {
  distance.value = await GeoDistanceService.calculateDistance(points)
}
</script>

<style scoped>
.container {
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  opacity: 0;
}

@keyframes bounceIn {
  0% {
    transform: translateY(30px);
    opacity: 0;
  }
  70% {
    transform: translateY(-8px);
    opacity: 1;
  }
  85% {
    transform: translateY(4px);
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-in {
  animation: bounceIn 0.8s cubic-bezier(0.36, 0, 0.66, -0.56) forwards;
}
</style>
