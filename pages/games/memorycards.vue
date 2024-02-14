<template>
  <div class="container">
    <div class="card-container">
      <Comp_Card class="card"
        v-for="(card, index) in cards"
        :key="index"
        :imageSrc="card.value"
        :index="index"
        :flipped="card.flipped"
        :matched="card.matched"
        @flip="flipCard"
      />
    </div>
    <p>Points: {{ Points }}</p>
  </div>
</template>

<script setup>
const store = useGlobalStore()
let Points = ref();

const getPoints = async () => {
    const response = await API.get(`/users/${store.token}`)
    Points.value = response.data.points
    console.log(Points.value)
}

const AddPoints = async (userID, morepoints) => {
    try {
        const response = await API.put(`/users/${userID}/points/${morepoints}`);
        console.log("Points added successfully:", response.data);
    } catch (error) {
        console.error("Error updating points:", error);
    }
};

onMounted(async () => {
    await store.token,
    await getPoints()
})

const cards = ref([
  { value: '/memorycards_icons/coquiperl.png', flipped: false, matched: false },
  { value: '/memorycards_icons/raie.png', flipped: false, matched: false },
  { value: '/memorycards_icons/star.png', flipped: false, matched: false },
  { value: '/memorycards_icons/meduse.png', flipped: false, matched: false },
  { value: '/memorycards_icons/dolphin.png', flipped: false, matched: false },
  { value: '/memorycards_icons/raie.png', flipped: false, matched: false },
  { value: '/memorycards_icons/meduse.png', flipped: false, matched: false },
  { value: '/memorycards_icons/star.png', flipped: false, matched: false },
  { value: '/memorycards_icons/coquiperl.png', flipped: false, matched: false },
  { value: '/memorycards_icons/seal.png', flipped: false, matched: false },
  { value: '/memorycards_icons/seal.png', flipped: false, matched: false },
  { value: '/memorycards_icons/dolphin.png', flipped: false, matched: false }
]);

const flippedCards = ref([]);
const isChecking = ref(false);

const flipCard = (index) => {
  if (!isChecking.value) {
    cards.value[index].flipped = true;
    flippedCards.value.push(index);

    if (flippedCards.value.length === 2) {
      isChecking.value = true;
      setTimeout(() => {
        checkMatch();
      }, 500);
    }
  }
};

const checkMatch = () => {
  const [index1, index2] = flippedCards.value;
  if (cards.value[index1].value === cards.value[index2].value) {
    cards.value[index1].matched = true;
    cards.value[index2].matched = true;
  } else {
    cards.value[index1].flipped = false;
    cards.value[index2].flipped = false;
  }

  flippedCards.value = [];
  isChecking.value = false;

  // Check if all cards are matched, then reset the game
  if (cards.value.every(card => card.matched)) {
    alert('Congratulations! You won the game!');
    let morepoints = Points.value + 3
    console.log(morepoints)
    AddPoints(store.token, morepoints); // Assuming AddPoints and store are
    resetGame();
  }
};

</script>

<script>
export default {
  data() {
    return {
      cards: [
        { value: '/memorycards_icons/coquiperl.png', flipped: false, matched: false },
        { value: '/memorycards_icons/raie.png', flipped: false, matched: false },
        { value: '/memorycards_icons/star.png', flipped: false, matched: false },
        { value: '/memorycards_icons/meduse.png', flipped: false, matched: false },
        { value: '/memorycards_icons/dolphin.png', flipped: false, matched: false },
        { value: '/memorycards_icons/raie.png', flipped: false, matched: false },
        { value: '/memorycards_icons/meduse.png', flipped: false, matched: false },
        { value: '/memorycards_icons/star.png', flipped: false, matched: false },
        { value: '/memorycards_icons/coquiperl.png', flipped: false, matched: false },
        { value: '/memorycards_icons/seal.png', flipped: false, matched: false },
        { value: '/memorycards_icons/seal.png', flipped: false, matched: false },
        { value: '/memorycards_icons/dolphin.png', flipped: false, matched: false }
      ],
      flippedCards: [],
      isChecking: false
    };
  },
  methods: {
    flipCard(index) {
      if (!this.isChecking) {
        this.cards[index].flipped = true;
        this.flippedCards.push(index);

        if (this.flippedCards.length === 2) {
          this.isChecking = true;
          setTimeout(() => {
            this.checkMatch();
          }, 500);
        }
      }
    },

    checkMatch() {
      const [index1, index2] = this.flippedCards;
      if (this.cards[index1].value === this.cards[index2].value) {
        this.cards[index1].matched = true;
        this.cards[index2].matched = true;
      } else {
        this.cards[index1].flipped = false;
        this.cards[index2].flipped = false;
      }

      this.flippedCards = [];
      this.isChecking = false;

      // Check if all cards are matched, then reset the game
      if (this.cards.every(card => card.matched)) {
        alert('Congratulations! You won the game!');

        AddPoints(store.token, morepoints)

        this.resetGame();
      }
    },

    resetGame() {
      this.cards.forEach(card => {
        card.flipped = false;
        card.matched = false;
      });
      this.flippedCards = [];
      this.isChecking = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.container{
    background-size: 100% 100%;
    background-position: 0px 0px,0px 0px,0px 0px;
    background-image: radial-gradient(50% 50% at -12% 40%, #00FFFF45 3%, #00031700 100%),radial-gradient(34% 46% at 107% 40%, #00FFFF3D 4%, #00031700 100%),radial-gradient(75% 75% at 50% 50%, #0B0D3AFF 0%, #080A1EFF 100%);
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
    align-items: center;
    color: white;
}

.card-container {
    background: $light_blue-color;
    border-radius: 10px;
    width: 550px;
    height: fit-content;
    padding: 30px 0px;
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    @include PictureShadow
}
</style>
