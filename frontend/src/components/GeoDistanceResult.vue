<template>
  <div v-if="distance" class="result-container">
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

<style scoped>
.result-container {
  text-align: center;

  span {
    display: block;
  }
}
</style>
