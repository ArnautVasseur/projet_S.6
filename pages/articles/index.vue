<template>
    <Comp_Header class="header"></Comp_Header>
    <div>Articles</div>
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