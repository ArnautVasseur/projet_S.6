<script setup lang="ts">
import { ref } from 'vue';
</script>

<template>
  <div id="app">
    <Target v-if="!isGameWon" @click="isGameWon ? null : increaseScore()" />
    <div v-if="isGameWon">
      <p>Vous avez gagné!</p>
    </div>
  </div>
</template>

<script lang="ts">
let score = ref(0);
let isGameWon = ref(false);

function increaseScore() {
  score.value += 1;

  if (score.value === 10) {
    console.log("Vous avez gagné");
    isGameWon.value = true;
  } else {
    console.log(score.value);
  }
}
</script>

<style scoped>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: relative;
}
</style>
