<template>
  <div class="PointAndClick">
    <Comp_Target v-if="!isGameWon" @click="startGame()" />
    <div v-if="isGameWon">
      <p>Vous avez gagné!</p>
    </div>
  </div>
  <p>{{ score }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue';

let score = ref(0);
let isGameWon = ref(false);

function startGame() {

  score.value += 1;

  if (score.value === 10) {
    console.log("Vous avez gagné");
    isGameWon.value = true;
  } else {
    console.log(score.value);
  }
}
</script>

<style scoped lang="scss">
.PointAndClick{
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 700px;
  height: 500px;
  background: black;
}
</style>
