<template>
  <Comp_Header class="header"></Comp_Header>
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

export default {
  meta: {
    requiresUnlock: 'The Bloop',
  },
};

</script>

<style>

</style>