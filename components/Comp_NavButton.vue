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
    font-size: $desktop-regular;
    border-radius: 10px;
    padding: 7px 20px 7px 20px;
    letter-spacing: 2px;
    color: $text_button-color;
    cursor: pointer;
    transition: ease-in 200ms;
    border: none;
}

.btn:hover{
    
}
</style>