<template>
  <div class="target" :style="{ left: targetPosition.x + 'px', top: targetPosition.y + 'px', width: targetSize.width + 'px', height: targetSize.height + 'px' }" @click="hitTarget"></div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

let targetPosition = ref({ x: 0, y: 0 });
let targetSize = ref({ width: 50, height: 50 });

function hitTarget() {
  targetPosition.value.x = Math.random() * 200;
  targetPosition.value.y = Math.random() * 200;
  const newSize = getRandomSize();
  targetSize.value.width = newSize;
  targetSize.value.height = newSize;
};

function getRandomSize() {
  return Math.random() * (100 - 20) + 20; // Adjust the range of random sizes as needed
};
</script>

<style scoped>
.target {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background: radial-gradient(#3223de, #7cc6d1);
  position: absolute;
  transition-duration: 300ms;
}
</style>
