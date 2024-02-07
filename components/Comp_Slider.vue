<template>
  <div class="container" @wheel="handleScroll">
    <div class="slider" ref="slider">

      <div class="slider-item"> 
        <img src="/images/INS-Dakar_1968.jpg" alt="INS-Dakar">
        <div class="slider-item-background">
          <h2>INS-Dakar</h2>
          <p>A disparu en mer vers le 25 janvier 1968</p>
        </div>
      </div>

      <div class="slider-item"> 
        <img src="/images/Minerve_1968.jpg" alt="Minerve">
        <div class="slider-item-background">
          <h2>Minerve</h2>
          <p>A disparu en mer le 27 janvier 1968 au large de Toulon</p>
        </div>
      </div>

      <div class="slider-item">
        <img src="/images/k-129_1968.jpg" alt="K-129"> 
        <div class="slider-item-background">
          <h2>k-129</h2>
          <p>A disparu en mer le 8 mars 1968</p>
        </div>
      </div>
      <div class="slider-item"> 
        <img src="/images/Scorpion_1968.jpg" alt="Scorpion"> 
        <div class="slider-item-background">
          <h2>USS Scorpion</h2>
          <p>A disparu en mer le 22 mai 1968</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleScroll(event) {
      this.$refs.slider.scrollLeft += event.deltaY;
      event.preventDefault();
    }
  }
};
</script>

<style lang="scss" scoped>

h2{
  @include h2
}

.container {
  display: flex;
  justify-content: center;
  overflow: hidden; /* Hide the vertical scrollbar */
}

.slider {
  margin: 0px 100px;
  width: 100%;
  display: flex;
  align-items: center;
  align-content: center;
  gap: 200px;
  overflow-y: hidden;
  overflow-x: scroll; /* Enable horizontal scrolling */
  scrollbar-width: none; /* Firefox: Hide scrollbar */
  -ms-overflow-style: none; /* Internet Explorer 10+ and Microsoft Edge: Hide scrollbar */
}

.slider::-webkit-scrollbar {
  display: none; /* Webkit: Hide scrollbar */
}

.slider-item {
  width: 500px;
  height: 450px;
  margin-top: 50px;

  :first-child{
    margin-left: 25px;
  }

  img {
    width: 500px;
    height: 300px;
    object-fit: cover;
    z-index: 1;
    border-radius: 10px;
  }

  &-background{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: -100px;
    background-image: radial-gradient(50% 50% at -12% 40%, #00FFFF45 3%, #00031700 100%),radial-gradient(34% 46% at 107% 40%, #00FFFF3D 4%, #00031700 100%),radial-gradient(75% 75% at 50% 50%, rgb(15, 18, 86) 0%, rgb(15, 22, 102) 100%);
    border-radius: 20px;
    width: 550px;
    height: 200px;
    z-index: 0;
    transition: 0.5s;
    
    h2{
      margin-top: 90px;
    }
  }
}
</style>
