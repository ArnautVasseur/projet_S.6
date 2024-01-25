<template>
    <ul class="list">
      <li v-for="user in Users" :key="user.username" >
        {{ user.user_ID }} | {{ user.username }}
      </li>
    </ul>

    <ul class="list">
      <li v-for="achievement in Achievements" :key="achievement.name" >
        {{ achievement.achievement_ID }} | {{ achievement.name }}
      </li>
    </ul>
</template>

<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import axios from 'axios';

const props = defineProps(['id']);

const Users = ref([]);
const Achievements = ref([]);

onMounted(async () => {
  try {
    const [
      { data: UsersData },
      { data: AchievementsData },
    ] = await Promise.all([
      axios.get(`http://localhost:4000/Users`),
      axios.get(`http://localhost:4000/Achievements`),
    ]);

    Users.value = UsersData;
    Achievements.value = AchievementsData;
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