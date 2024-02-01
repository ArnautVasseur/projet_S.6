<template>
    <!-- <ul class="list">
      <li v-for="user in Users" :key="user.username" >
        {{ user.user_ID }} | {{ user.username }}
      </li>
    </ul> -->
    <div>
      <p>Points: {{ Points }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
const store = useGlobalStore();

const Points = ref();

const getPoints = async () => {
    const response = await API.get(`/users/${store.token}`)
    Points.value = response.data.points
}

onMounted(async () => {
    await store.token
    await getPoints()
})

</script>

<style lang="scss">
    .list{
        list-style: none;
    }
</style>