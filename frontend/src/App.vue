<template>
  <div>
    <GeoDistanceForm />
    <GeoDistanceResult :distance="{ km: 12, m: 10 }" />
  </div>
</template>

<script setup lang="ts">
import GeoDistanceForm from './components/GeoDistanceForm.vue'
import GeoDistanceResult from './components/GeoDistanceResult.vue'
</script>
