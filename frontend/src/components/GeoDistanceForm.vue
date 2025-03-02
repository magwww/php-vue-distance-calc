<template>
  <form>
    <div class="input-group">
      <label>Punkt 1</label>
      <input placeholder="Szerokość (np. 52.2298)" required />
      <input placeholder="Długość (np. 21.0122)" required />
    </div>
    <div class="input-group">
      <label>Punkt 2</label>
      <input placeholder="Szerokość (np. 41.9028)" required />
      <input placeholder="Długość (np. 12.4964)" required />
    </div>
    <button type="submit">Oblicz odległość</button>
  </form>
</template>

<script setup lang="ts"></script>

<style scoped>
.input-group {
  margin-bottom: 10px;
}
</style>
