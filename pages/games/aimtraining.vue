<template>
  <div class="container">
    <Comp_Header/>
    <div class="PointAndClick">
      <Comp_Target v-if="!isGameWon" @click="startGame()" />
      <div v-if="isGameWon">
        <p>Vous avez gagné 3 points !</p>
      </div>
    </div>
    <p>Votre score: {{ score }}</p>
    <p>Points: {{ Points }}</p>
  </div>
  
</template>

<script setup lang="ts">
const store = useGlobalStore()
let score = ref(0);
let isGameWon = ref(false);
let Points = ref();

function startGame() {

  score.value += 1;

  if (score.value === 15) {
    console.log("Vous avez gagné");
    isGameWon.value = true;
    let morepoints = Points.value + 3
    AddPoints(store.token, morepoints)
  } else {
    console.log(score.value);
  }
}

onMounted(async () => {
    await store.token,
    await getPoints()
})

const getPoints = async () => {
    const response = await API.get(`/users/${store.token}`)
    Points.value = response.data.points
    console.log(Points.value)
}

const AddPoints = async (userID: number | null, morepoints: number | null) => {
    try {
        const response = await API.put(`/users/${userID}/points/${morepoints}`);
        console.log("Points added successfully:", response.data);
    } catch (error) {
        console.error("Error updating points:", error);
    }
};
</script>

<script lang="ts">

//renvoie l'user sur l'index s'il n'est pas connecté
definePageMeta({
  middleware: [
    'auth',
  ],
});

</script>

<style scoped lang="scss">

.container{
  min-height: 100vh;
  background-image: radial-gradient(50% 50% at -12% 40%, #00FFFF45 3%, #00031700 100%),radial-gradient(34% 46% at 107% 40%, #00FFFF3D 4%, #00031700 100%),radial-gradient(75% 75% at 50% 50%, #0B0D3AFF 0%, #080A1EFF 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  color: white;
}
.PointAndClick{
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 700px;
  height: 500px;
  backdrop-filter: blur(10px);
  border-radius: 20px;
  @include PictureShadow;
}
</style>
