<template>
  <div class="target" :style="{ left: targetPosition.x + 'px', top: targetPosition.y + 'px', width: targetSize.width + 'px', height: targetSize.height + 'px' }" @click="hitTarget"></div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

let targetPosition = ref({ x: 325, y: 225 });
let targetSize = ref({ width: 50, height: 50 });

function hitTarget() {
  targetPosition.value.x = Math.random() * 600;
  targetPosition.value.y = Math.random() * 450;
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
    animation: pulse 1s ease-in-out infinite; /* Apply the pulse animation */
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}
</style>
