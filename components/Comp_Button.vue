<template>
    <button class="btn">
        <slot/>
    </button>
</template>

<script>

</script>

<style scoped lang="scss">
.btn{
    font-family: $montserrat;
    font-size: $desktop-h2;
    background: $primary-color;
    border: 2px solid $primary-color;
    border-radius: 30px;
    padding: 7px 30px 7px 30px;
    color: $text_button-color;
    filter: drop-shadow(0 0 20px $primary-color);
    
}

.btn:hover{
    transition: ease-in 200ms;
    filter: drop-shadow(0 0 15px $primary-color) drop-shadow(0 0 50px $primary-color);
}
</style>