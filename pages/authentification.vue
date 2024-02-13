<template>
    <body class="container">
        <div class="container__section">
            <Comp_Form></Comp_Form>
            <Comp_Button @click="deconnexion">Déconnexion</Comp_Button>
        </div>
    </body>
</template>

<script setup>

const store = useGlobalStore();

const deconnexion = async () => {
    store.clearToken()
    router.push('/authentification')
}

</script>

<style scoped lang="scss">
.container{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;
    margin: 0px;
    width: 100vw;
    height: 100vh;
    background-image: 
        url('/altered_creatures/creature_13_opacity.png'),
        radial-gradient(20% 50% at 0% 20%, #05CBA569 0%, #073AFF00 100%),
        radial-gradient(20% 50% at 100% 10%, #05CBA559 0%, #073AFF00 100%),
        radial-gradient(20% 30% at 30% 1%, #8A4FFF4D 9%, #073AFF00 100%),
        linear-gradient(320deg, #020015 42%, #291379FF 100%);
    background-position: right bottom;
    background-size: 120%;
    background-repeat: no-repeat;

    &__section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 100px;
        width: 100%;
        height: 100%;
    }
}
</style>
