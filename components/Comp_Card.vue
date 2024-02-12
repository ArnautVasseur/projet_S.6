<template>
  <div class="card" @click="handleClick">
    <img v-if="flipped || matched" :src="imageSrc" alt="Card Image">
    <div v-else class="card-back">?</div>
  </div>  
</template>

<script>
export default {
  props: {
    index: Number,
    flipped: Boolean,
    matched: Boolean,
    imageSrc: String
  },
  methods: {
    handleClick() {
      if (!this.flipped && !this.matched) {
        this.$emit('flip', this.index);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.card {
    width: 100px;
    height: 100px;
    background-color: $blue-color;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    cursor: pointer;
    transition: 0.3s;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
}

.card:hover {
    background-color: $teal-color;
    transform: rotate(15deg);
}

.card-back {
  color: white;
  font-size: 3rem;
}

.flipped {
    background-color: #fff; 
}

.matched {
    background-color: #8aff8a;
}
</style>
