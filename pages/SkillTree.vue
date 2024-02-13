<template>
    <div class="main">
        <div class="main__1">
            <div class="SkillTree">
                <div class="SkillTree__Start">
                    <div class="SkillTree__Item__Départ" :class="{ 'checked': Achievements[0].checked.value }" @click="checkbox(Achievements[0])">
                        <p>{{ Achievements[0].Name }}</p>
                        <p>{{ Achievements[0].checked }}</p>
                    </div>
                    <div class="SkillTree__Item__Bermudes" :class="{ 'checked': Achievements[1].checked.value }" @click="checkbox(Achievements[1])">
                        <p>{{ Achievements[1].Name }}</p>
                        <p>{{ Achievements[1].checked }}</p>
                    </div>
                </div>
                <div class="SkillTree__Locations">
                    <div class="SkillTree__Item__Dragon" :class="{ 'checked': Achievements[7].checked.value }" @click="checkbox(Achievements[7])">
                        <p>{{ Achievements[7].Name }}</p>
                        <p>{{ Achievements[7].checked }}</p>
                    </div>
                    <div class="SkillTree__Item__DeadZone" :class="{ 'checked': Achievements[9].checked.value }" @click="checkbox(Achievements[9])">
                        <p>{{ Achievements[9].Name }}</p>
                        <p>{{ Achievements[9].checked }}</p>
                    </div>
                    <div class="SkillTree__Item__MarianaTrench" :class="{ 'checked': Achievements[8].checked.value }" @click="checkbox(Achievements[8])">
                        <p>{{ Achievements[8].Name }}</p>
                        <p>{{ Achievements[8].checked }}</p>
                    </div>
                </div>
                <div class="SkillTree__Disappearances">
                    <div class="SkillTree__Item__GhostLights" :class="{ 'checked': Achievements[2].checked.value }" @click="checkbox(Achievements[2])">
                        <p>{{ Achievements[2].Name }}</p>
                        <p>{{ Achievements[2].checked }}</p>
                    </div>
                    <div class="SkillTree__Item__MaryCeleste" :class="{ 'checked': Achievements[4].checked.value }" @click="checkbox(Achievements[4])">
                        <p>{{ Achievements[4].Name }}</p>
                        <p>{{ Achievements[4].checked }}</p>
                    </div>
                    <div class="SkillTree__Item__SubMarines" :class="{ 'checked': Achievements[3].checked.value }" @click="checkbox(Achievements[3])">
                        <p>{{ Achievements[3].Name }}</p>
                        <p>{{ Achievements[3].checked }}</p>
                    </div>
                </div>
                <div class="SkillTree__Creatures">
                    <div class="SkillTree__Item__Bloop" :class="{ 'checked': Achievements[5].checked.value }" @click="checkbox(Achievements[5])">
                        <p>{{ Achievements[5].Name }}</p>
                        <p>{{ Achievements[5].checked }}</p>
                    </div>
                    <div class="SkillTree__Item__Cryptids" :class="{ 'checked': Achievements[6].checked.value }" @click="checkbox(Achievements[6])">
                        <p>{{ Achievements[6].Name }}</p>
                        <p>{{ Achievements[6].checked }}</p>
                    </div>
                </div>

                <div class="SkillTree__Lines">
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
                </div>
            </div>
        </div>
        <div class="main__2">
            <p>Points: {{ Points }}</p>
            <ul class="unlocked">
                <li>Vous avez débloqué: </li> 
                <li v-for="achieve in achievement" :key="achieve.name">
                    {{ achieve.name }}
                </li>
            </ul>
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
        if(succes.name == "La fosse Mariane"){
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
        parent:["SkillTree_2"],
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
        Name: "La fosse Mariane",
        Tooltip: "Débloquez cette partie du site pour 1 Point de Compétence",
        checked: ref(false),
        parent:["SkillTree_9", "SkillTree_7"],
    },
    {
        achievement_ID : 9,
        ID: "SkillTree_9",
        Name: "Golf du Mexique, 'Dead Zone'",
        Tooltip: "Débloquez cette partie du site pour 1 Point de Compétence",
        checked: ref(false),
        parent:["SkillTree_1"],
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

.unlocked{
    margin-top: 50px;
    padding: 20px;

    li{
        margin-top: 10px;
    }
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
    }
}

.SkillTree{
    position: relative;
    padding: 20px;
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(30% 45% at 100% 74%, #3E21CBFF 1%, #073AFF00 100%),
    radial-gradient(35% 56% at 10% 5%, #29AFD87D 1%, #073AFF00 100%),
    linear-gradient(180deg, #301a89 1%, #030020 100%);

    &__Item {

        &__Départ{
            width: 275px;
            height: 176px;
            @include SkillTree__Box;
            top: 20%;
            left: 50%;
            transform: translate(-50%, -50%);

            &.checked {
                border: 5px solid white;
            }
        }

        &__Bermudes{
            width: 211px;
            height: 135px;
            @include SkillTree__Box;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            &.checked {
                border: 5px solid white;
            }
        }

        &__Dragon{
            width: 173px;
            height: 111px;
            @include SkillTree__Box;
            top: 20%;
            left: 27.5%;
            transform: translate(-50%, -50%);

            &.checked {
                border: 5px solid white;
            }
        }

        &__DeadZone{
            width: 173px;
            height: 111px;
            @include SkillTree__Box;
            top: 60%;
            left: 27.5%;
            transform: translate(-50%, -50%);

            &.checked {
                border: 5px solid white;
            }
        }

        &__MarianaTrench{
            width: 173px;
            height: 111px;
            @include SkillTree__Box;
            top: 40%;
            left: 10%;
            transform: translate(-50%, -50%);

            &.checked {
                border: 5px solid white;
            }
        }

        &__GhostLights{
            width: 173px;
            height: 111px;
            @include SkillTree__Box;
            top: 40%;
            left: 72.5%;
            transform: translate(-50%, -50%);

            &.checked {
                border: 5px solid white;
            }
        }

        &__MaryCeleste{
            width: 173px;
            height: 111px;
            @include SkillTree__Box;
            top: 20%;
            left: 90%;
            transform: translate(-50%, -50%);

            &.checked {
                border: 5px solid white;
            }
        }

        &__SubMarines{
            width: 173px;
            height: 111px;
            @include SkillTree__Box;
            top: 60%;
            left: 90%;
            transform: translate(-50%, -50%);

            &.checked {
                border: 5px solid white;
            }
        }

        &__Bloop{
            width: 173px;
            height: 111px;
            @include SkillTree__Box;
            top: 80%;
            left: 50%;
            transform: translate(-50%, -50%);

            &.checked {
                border: 5px solid white;
            }
        }

        &__Cryptids{
            width: 173px;
            height: 111px;
            @include SkillTree__Box;
            top: 80%;
            left: 72.5%;
            transform: translate(-50%, -50%);

            &.checked {
                border: 5px solid white;
            }
        }
    }

    &__Lines{

        &__1{
            width: 5px;
            height: 150px;
            background: white;
            transition: 0.5s;
            transform: translate(-50%, -50%);
            display: none;

            &.checked {
                background-color: white;
                box-shadow: 0px 0px 20px white;
            }
        }
    }
}

</style>