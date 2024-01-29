<template>
    <button class="btn">
        <slot/>
    </button>
</template>

<script>

</script>

<style scoped lang="scss">
.btn{
    text-transform: uppercase;
    background: none;
    font-family: $montserrat;
    font-size: $desktop-h2;
    border: 2px solid white;
    border-radius: 10px;
    padding: 7px 20px 7px 20px;
    letter-spacing: 3px;
    color: $text_button-color;
    cursor: pointer;
    transition: ease-in 200ms;
}

.btn:hover{
    background: white;
    color: black;
}
</style>