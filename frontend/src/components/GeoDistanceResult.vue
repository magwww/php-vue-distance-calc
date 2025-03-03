<template>
  <div v-if="distance" class="result-container">
    <h3>
      Result:
      <p>
        <span v-if="distance.m === 0">Points are the same.</span>
        <span v-else-if="distance.km">{{ distance.km }} km</span>
        <span v-else>{{ distance.m }} m</span>
      </p>
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
