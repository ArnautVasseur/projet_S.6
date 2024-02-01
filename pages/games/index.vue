<template>
    <div>Jeux</div>
</template>

<script>

//renvoie l'user sur l'index s'il n'est pas connecté
definePageMeta({
  middleware: [
    function (to, from) {
    },
    'auth',
  ],
});

</script>

<style>

</style>