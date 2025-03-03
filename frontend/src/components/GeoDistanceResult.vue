<template>
  <div v-if="distance">
    <h3>
      Result: <span>{{ distance.km }} km {{ distance.m }} m</span>
    </h3>
  </div>
</template>

<script setup lang="ts">
defineProps({
  distance: Object,
})
</script>
