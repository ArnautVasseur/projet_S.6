<template>
  <Comp_Header class="header"></Comp_Header>
</template>

<script>

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