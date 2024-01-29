<template>
    <body class="container">
        <div class="container__section__1"></div>
        <div class="container__section__2">
            <Comp_Form></Comp_Form>
        </div>
        
    </body>
</template>

<style scoped lang="scss">
.container{
    display: flex;
    margin: 0px;
    width: 100vw;
    height: 100vh;
    background-image: 
        url('/images/creature.png'),
        radial-gradient(20% 50% at 0% 20%, #05CBA569 0%, #073AFF00 100%),
        radial-gradient(20% 50% at 100% 10%, #05CBA559 0%, #073AFF00 100%),
        radial-gradient(20% 30% at 30% 1%, #8A4FFF4D 9%, #073AFF00 100%),
        linear-gradient(320deg, #020015 42%, #291379FF 100%);
    background-position: right bottom;
    background-size: 120%; /* Adjust the background size as needed */
    background-repeat: no-repeat;

    &__section__1 {
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        width: 40vw;
        height: 100vh;
        background: none;
    }

    &__section__2 {
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        width: 60vw;
        height: 100vh;
        background-color: $primary-color;
        box-shadow: -15px 0px 20px $primary-color;
    }
}
</style>
