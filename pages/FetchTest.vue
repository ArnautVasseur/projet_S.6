<template>
    <ul class="list">
      <li v-for="user in Users" :key="user.username" >
        {{ user.user_ID }} | {{ user.username }}
      </li>
    </ul>
</template>

<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';

const props = defineProps(['id']);

const Users = ref([]);

onMounted(async () => {
  try {
    const [
      { data: UsersData },
    ] = await Promise.all([
      API.get(`/Users`),
    ]);

    Users.value = UsersData;
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
});
</script>

<style lang="scss">
    .list{
        list-style: none;
    }
</style>