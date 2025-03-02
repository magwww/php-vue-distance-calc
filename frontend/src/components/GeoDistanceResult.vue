<template>
  <div v-if="distance">
    <h3>Wynik:</h3>
    <p>Odległość: {{ distance.km }} km {{ distance.m }} m</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  distance: Object,
})
</script>
