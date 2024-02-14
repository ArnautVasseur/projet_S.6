<template>
    <div class="main">
        <div class="main__1">
            <div class="SkillTree">
                <div class="SkillTree__Start">
                    <div class="SkillTree__Item__Départ" :class="{ 'checked': Achievements[0].checked.value }" @click="checkbox(Achievements[0])">
                        <p>{{ Achievements[0].Name }}</p>
                    </div>
                    <div class="SkillTree__Item__Bermudes" :class="{ 'checked': Achievements[1].checked.value }" @click="checkbox(Achievements[1])">
                        <p>{{ Achievements[1].Name }}</p>
                    </div>
                </div>
                
                <div class="SkillTree__FirstRow">
                    <div class="SkillTree__Item__Dragon" :class="{ 'checked': Achievements[7].checked.value }" @click="checkbox(Achievements[7])">
                        <p>{{ Achievements[7].Name }}</p>
                    </div>
                    <div class="SkillTree__Item__Bloop" :class="{ 'checked': Achievements[5].checked.value }" @click="checkbox(Achievements[5])">
                        <p>{{ Achievements[5].Name }}</p>
                    </div>
                    <div class="SkillTree__Item__GhostLights" :class="{ 'checked': Achievements[2].checked.value }" @click="checkbox(Achievements[2])">
                        <p>{{ Achievements[2].Name }}</p>
                    </div>
                </div>
                
                <div class="SkillTree__SecondRow">

                    <div class="SkillTree__Item__DeadZone" :class="{ 'checked': Achievements[9].checked.value }" @click="checkbox(Achievements[9])">
                        <p>{{ Achievements[9].Name }}</p>
                    </div>

                    <div class="SkillTree__Item__Cryptids" :class="{ 'checked': Achievements[6].checked.value }" @click="checkbox(Achievements[6])">
                        <p>{{ Achievements[6].Name }}</p>
                    </div>
                    
                    <div class="SkillTree__Item__MaryCeleste" :class="{ 'checked': Achievements[4].checked.value }" @click="checkbox(Achievements[4])">
                        <p>{{ Achievements[4].Name }}</p>
                    </div>
                    
                </div>

                <div class="SkillTree__ThirdRow">
                    
                    <div class="SkillTree__Item__MarianaTrench"  :class="{ 'checked': Achievements[8].checked.value }" @click="checkbox(Achievements[8])">
                        <p>{{ Achievements[8].Name }}</p>
                    </div>
                    
                    <div class="SkillTree__Item__SubMarines" :class="{ 'checked': Achievements[3].checked.value }" @click="checkbox(Achievements[3])">
                        <p>{{ Achievements[3].Name }}</p>
                    </div>

                </div>

                <!-- <div class="SkillTree__Lines">
                    <div class="SkillTree__Lines__1"></div>
                    <div class="SkillTree__Lines__2"></div>
                    <div class="SkillTree__Lines__3"></div>
                    <div class="SkillTree__Lines__4"></div>
                    <div class="SkillTree__Lines__5"></div>
                    <div class="SkillTree__Lines__6"></div>
                    <div class="SkillTree__Lines__7"></div>
                    <div class="SkillTree__Lines__8"></div>
                    <div class="SkillTree__Lines__9"></div>
                    <div class="SkillTree__Lines__10"></div>
                </div> -->
            </div>
        </div>
        <div class="main__2">
            <ul class="unlocked">
                <h2 class="unlocked__title">Vous avez débloqué: </h2>
                
                <li v-if="store.achievement__1">
                    <RouterLink to="/articles/bermudes">
                        Triangle des Bermudes
                    </RouterLink>
                </li>
                

                <RouterLink to="/articles/ghostships">
                    <li v-if="store.achievement__2">Vaisseaux fantômes de la mer Baltique</li>
                </RouterLink>

                <RouterLink to="/articles/1968">
                    <li v-if="store.achievement__3">Disparitions Sous-Marins 1968</li>
                </RouterLink>

                <RouterLink to="/articles/maryceleste">
                    <li v-if="store.achievement__4">Mary Celeste</li>
                </RouterLink>

                <RouterLink to="/articles/bloop">
                    <li v-if="store.achievement__5">The Bloop</li>
                </RouterLink>

                <RouterLink to="/articles/cryptids">
                    <li v-if="store.achievement__6">Les Cryptides Sous-Marines</li>
                </RouterLink>

                <RouterLink to="/articles/dragon">
                    <li v-if="store.achievement__7">Triangle Du Dragon</li>
                </RouterLink>

                <RouterLink to="/articles/marianatrench">
                    <li v-if="store.achievement__8">La fosse Mariane</li>
                </RouterLink>

                <RouterLink to="/articles/deadzone">
                    <li v-if="store.achievement__9">Golf du Mexique, 'Dead Zone'</li>
                </RouterLink>
                
            </ul>
            <p>Points: {{ Points }}</p>
            <p v-if="errormessage" class="pointserror">Vous n'avez plus de points !</p>
        </div>
    </div>
</template>

<script setup lang="ts">
const store = useGlobalStore();

let Points = ref();
let achievement = ref<Array<{ name: string }>>([]);
let errormessage = ref(false)

const getPoints = async () => {
    const response = await API.get(`/users/${store.token}`)
    Points.value = response.data.points
}

const getAchievement = async () => {
    const response = await API.get(`/achievements/${store.token}`);
    achievement.value = response.data
    const userAchievements = response.data.map((ach: { name: string }) => ach.name);
    
    achievement.value.forEach((succes: { name: string; }) =>{
        if(succes.name == "Triangle Des Bermudes"){
            store.achievement__1 = true;
        }
        if(succes.name == "Vaisseaux fantômes de la mer Baltique"){
            store.achievement__2 = true;
        }
        if(succes.name == "Disparitions Sous-Marins 1968"){
            store.achievement__3 = true;
        }
        if(succes.name == "Mary Celeste"){
            store.achievement__4 = true;
        }
        if(succes.name == "The Bloop"){
            store.achievement__5 = true;
        }
        if(succes.name == "Les Cryptides Sous-Marines"){
            store.achievement__6 = true;
        }
        if(succes.name == "Triangle Du Dragon"){
            store.achievement__7 = true;
        }
        if(succes.name == "La Fosse Mariane"){
            store.achievement__8 = true;
        }
        if(succes.name == "Golf du Mexique, 'Dead Zone'"){
            store.achievement__9 = true;
        }
    })

    Achievements.forEach((ach) => {
        if (ach.Name === "Départ") {
            ach.checked.value = true;
        } else {
            ach.checked.value = userAchievements.includes(ach.Name);
        }
    });
};

onMounted(async () => {
    await store.token
    await getPoints()
    await getAchievement()
})

let Achievements = [
    {
        achievement_ID : 0,
        ID: "SkillTree_0",
        Name: "Départ",
        Tooltip: "Cette partie vous est gratuite",
        checked: ref(true),
        parents:[]
    },
    {
        achievement_ID : 1,
        ID: "SkillTree_1",
        Name: "Triangle Des Bermudes",
        Tooltip: "Cette partie vous est gratuite, clickez ici pour la débloquer",
        checked: ref(false),
        parent:["SkillTree_0"],
    },
    {
        achievement_ID : 2,
        ID: "SkillTree_2",
        Name: "Vaisseaux fantômes de la mer Baltique",
        Tooltip: "Débloquez cette partie du site pour 1 Point de Compétence",
        checked: ref(false),
        parent:["SkillTree_1"],
    },
    {
        achievement_ID : 3,
        ID: "SkillTree_3",
        Name: "Disparitions Sous-Marins 1968",
        Tooltip: "Débloquez cette partie du site pour 1 Point de Compétence",
        checked: ref(false),
        parent:["SkillTree_4"],
    },
    {
        achievement_ID : 4,
        ID: "SkillTree_4",
        Name: "Mary Celeste",
        Tooltip: "Débloquez cette partie du site pour 1 Point de Compétence",
        checked: ref(false),
        parent:["SkillTree_2"],
    },
    {
        achievement_ID : 5,
        ID: "SkillTree_5",
        Name: "The Bloop",
        Tooltip: "Débloquez cette partie du site pour 1 Point de Compétence",
        checked: ref(false),
        parent:["SkillTree_1"],
    },
    {
        achievement_ID : 6,
        ID: "SkillTree_6",
        Name: "Les Cryptides Sous-Marines",
        Tooltip: "Débloquez cette partie du site pour 1 Point de Compétence",
        checked: ref(false),
        parent:["SkillTree_5"],
    },
    {
        achievement_ID : 7,
        ID: "SkillTree_7",
        Name: "Triangle Du Dragon",
        Tooltip: "Débloquez cette partie du site pour 1 Point de Compétence",
        checked: ref(false),
        parent:["SkillTree_1"],
    },
    {
        achievement_ID : 8,
        ID: "SkillTree_8",
        Name: "La Fosse Mariane",
        Tooltip: "Débloquez cette partie du site pour 1 Point de Compétence",
        checked: ref(false),
        parent:["SkillTree_9"],
    },
    {
        achievement_ID : 9,
        ID: "SkillTree_9",
        Name: "Golf du Mexique, 'Dead Zone'",
        Tooltip: "Débloquez cette partie du site pour 1 Point de Compétence",
        checked: ref(false),
        parent:["SkillTree_7"],
    },
]

interface AchievementItem {
    name: string;
}

interface Achievement {
    achievement_ID : number;
    ID: string;
    Name: string;
    Tooltip: string;
    checked: { value: boolean };
    parent?: string[];
}

async function checkbox(skill: Achievement) {
    if (Points.value <= 0) {
        console.log("Vous n'avez plus assez de points");
        errormessage.value = true;
    } else {
        if (skill.checked.value === false) {
            // Check if any parent is checked
            if (skill.parent && skill.parent.some(parentId => Achievements.find(parent => parent.ID === parentId)?.checked.value)) {
                // Display confirmation dialog
                if (window.confirm(`Are you sure you want to unlock ${skill.Name}?`)) {
                    const NewPoints = Points.value - 1;
                    updatePoints(store.token, NewPoints);
                    Points.value = NewPoints;
                    console.log("points: " + Points.value);
                    skill.checked.value = true;

                    // Add achievement to the database
                    await addAchievement(store.token, skill.Name);

                    // Update the corresponding DOM element
                    const skillElement = document.querySelector(`.SkillTree__Item__${skill.Name.replace(/\s+/g, '')}`);
                    if (skillElement) {
                        skillElement.classList.add('checked');
                    }
                }
            } else {
                console.log("Cannot click because one of the parents is not checked");
            }
        } else {
            console.log("Case déjà cochée");
        }
    }
}

const updatePoints = async (userID: number | null, NewPoints: number) => {
    try {
        const response = await API.put(`/users/${userID}/points/${NewPoints}`, { points: NewPoints });
        console.log("Points updated successfully:", response.data);
    } catch (error) {
        console.error("Error updating points:", error);
    }
};

const addAchievement = async (userID: number | null, Name: string ) => {
    try {
        if (userID === null) {
            console.error("User ID is null");
            return;
        }

        const response = await API.post(`/users/${userID}/achievement/${Name}`);
        console.log("Achievement added successfully:", response.data);
    } catch (error) {
        console.error("Error adding achievement:", error);
    }
};

//renvoie l'user sur l'index s'il n'est pas connecté
definePageMeta({
  middleware: [
    'auth',
  ],
});

</script>

<style lang="scss" scoped>

h2{
    text-align: center;
    font-size: $desktop-large;
    font-weight: 500;
    margin-bottom: 50px;
}

a{
    all: unset;
    cursor: pointer;
}

.unlocked{
    margin-top: 50px;
    padding: 20px;

    li{
        padding: 10px;
        margin: 10px;
        border: 2px solid $teal-color;
        transition: 300ms ease-in-out;
        text-align: center;
    }
}

.unlocked li:hover{
    background: $teal-color;
    color: $primary-color;
    padding: 20px 10px;
}
.main{
    display: flex;
    width: 100vw;
    height: 100vh;
    color: white;

    &__1{
        width: 80vw;
        height: 100vh;
    }

    &__2{
        width: 20vw;
        height: 100vh;
        background: none;

        p{
            text-align: center;
            font-size: $desktop-large;
            font-weight: 400;
        }
    }
}

.SkillTree{
    position: relative;
    padding: 20px;
    overflow-y: scroll;
    overflow-x: hidden;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(30% 45% at 100% 74%, #3E21CBFF 1%, #073AFF00 100%),
    radial-gradient(35% 56% at 10% 5%, #29AFD87D 1%, #073AFF00 100%),
    linear-gradient(180deg, #301a89 1%, #030020 100%);

    &__Item {

        &__Départ{
            width: 320px;
            height: 205px;
            border-radius: 20px;
            display: flex;
            justify-content: center;
            text-align: center;
            align-items: center;
            background: $light_blue-color;
            font-size: 1.5rem;

            &.checked {
                background: $blue-color;
            }
        }

        &__Bermudes, &__Dragon, &__DeadZone, &__MarianaTrench, &__GhostLights, &__MaryCeleste, &__SubMarines, &__Bloop, &__Cryptids{
            width: 275px;
            height: 176px;
            border-radius: 20px;
            padding: 20px;
            display: flex;
            justify-content: center;
            text-align: center;
            align-items: center;
            background: none;
            backdrop-filter: blur(10px);
            @include PictureShadow;
            transition: 1s ease-in-out;
            font-size: 1.3rem;

            &.checked {
                background: $light_blue-color;
                box-shadow: none;
            }
        }
    }

    &__Start{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 50px;
        width: 100%;
        margin-bottom: 50px;
    }

    &__FirstRow, &__SecondRow{
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 50px;
        width: 100%;
        margin-bottom: 80px;
    }

     &__ThirdRow{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 50px;
        width: 100%;
     }

}

</style>