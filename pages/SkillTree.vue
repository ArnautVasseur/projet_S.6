<template>
    <div class="main">
        <div class="main__1">
            <div class="SkillTree">
                <div class="SkillTree__Start">
                    <div class="SkillTree__Item__Départ" @click="checkbox(Achievements[0])">
                        <p>{{ Achievements[0].Name }}</p>
                        <p>{{ Achievements[0].checked }}</p>
                    </div>
                    <div class="SkillTree__Item__Bermudes" @click="checkbox(Achievements[1])">
                        <p>{{ Achievements[1].Name }}</p>
                        <p>{{ Achievements[1].checked }}</p>
                    </div>
                </div>
                <div class="SkillTree__Locations">
                    <div class="SkillTree__Item__Dragon" @click="checkbox(Achievements[7])">
                        <p>{{ Achievements[7].Name }}</p>
                        <p>{{ Achievements[7].checked }}</p>
                    </div>
                    <div class="SkillTree__Item__DeadZone" @click="checkbox(Achievements[9])">
                        <p>{{ Achievements[9].Name }}</p>
                        <p>{{ Achievements[9].checked }}</p>
                    </div>
                    <div class="SkillTree__Item__MarianaTrench" @click="checkbox(Achievements[8])">
                        <p>{{ Achievements[8].Name }}</p>
                        <p>{{ Achievements[8].checked }}</p>
                    </div>
                </div>
                <div class="SkillTree__Disappearances">
                    <div class="SkillTree__Item__GhostLights" @click="checkbox(Achievements[2])">
                        <p>{{ Achievements[2].Name }}</p>
                        <p>{{ Achievements[2].checked }}</p>
                    </div>
                    <div class="SkillTree__Item__MaryCeleste" @click="checkbox(Achievements[4])">
                        <p>{{ Achievements[4].Name }}</p>
                        <p>{{ Achievements[4].checked }}</p>
                    </div>
                    <div class="SkillTree__Item__SubMarines" @click="checkbox(Achievements[3])">
                        <p>{{ Achievements[3].Name }}</p>
                        <p>{{ Achievements[3].checked }}</p>
                    </div>
                </div>
                <div class="SkillTree__Creatures">
                    <div class="SkillTree__Item__Bloop" @click="checkbox(Achievements[5])">
                        <p>{{ Achievements[5].Name }}</p>
                        <p>{{ Achievements[5].checked }}</p>
                    </div>
                    <div class="SkillTree__Item__Cryptids" @click="checkbox(Achievements[6])">
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
                </div>
            </div>
        </div>
        <div class="main__2">
        </div>
    </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';

let Achievements = [
    {
        ID: "SkillTree_0",
        Name: "Départ",
        Tooltip: "Cette partie vous est gratuite",
        checked: ref(true),
        parents:[]
    },
    {
        ID: "SkillTree_1",
        Name: "Triangle Des Bermudes",
        Tooltip: "Cette partie vous est gratuite, clickez ici pour la débloquer",
        checked: ref(false),
        parent:["SkillTree_0"],
    },
    {
        ID: "SkillTree_2",
        Name: "Vaisseaux fantômes de la mer Baltique",
        Tooltip: "Débloquez cette partie du site pour 1 Point de Compétence",
        checked: ref(false),
        parent:["SkillTree_1"],
    },
    {
        ID: "SkillTree_3",
        Name: "Disparitions Sous-Marins 1968",
        Tooltip: "Débloquez cette partie du site pour 1 Point de Compétence",
        checked: ref(false),
        parent:["SkillTree_2"],
    },
    {
        ID: "SkillTree_4",
        Name: "Mary Celeste",
        Tooltip: "Débloquez cette partie du site pour 1 Point de Compétence",
        checked: ref(false),
        parent:["SkillTree_2"],
    },
    {
        ID: "SkillTree_5",
        Name: "The Bloop",
        Tooltip: "Débloquez cette partie du site pour 1 Point de Compétence",
        checked: ref(false),
        parent:["SkillTree_1"],
    },
    {
        ID: "SkillTree_6",
        Name: "Les Cryptides Sous-Marines",
        Tooltip: "Débloquez cette partie du site pour 1 Point de Compétence",
        checked: ref(false),
        parent:["SkillTree_5"],
    },
    {
        ID: "SkillTree_7",
        Name: "Triangle du Dragon",
        Tooltip: "Débloquez cette partie du site pour 1 Point de Compétence",
        checked: ref(false),
        parent:["SkillTree_1"],
    },
    {
        ID: "SkillTree_8",
        Name: "La fosse Mariane",
        Tooltip: "Débloquez cette partie du site pour 1 Point de Compétence",
        checked: ref(false),
        parent:["SkillTree_9", "SkillTree_7"],
    },
    {
        ID: "SkillTree_9",
        Name: "Golf du Mexique, 'Dead Zone'",
        Tooltip: "Débloquez cette partie du site pour 1 Point de Compétence",
        checked: ref(false),
        parent:["SkillTree_1"],
    },
]

interface Achievement {
    ID: string;
    Name: string;
    Tooltip: string;
    checked: { value: boolean };
    parent?: string[];
}

function checkbox(skill: Achievement) {
    if (skill.checked.value === false) {
        // Check if any parent is checked
        if (skill.parent && skill.parent.some(parentId => Achievements.find(parent => parent.ID === parentId)?.checked.value)) {
            // Display confirmation dialog
            if (window.confirm(`Are you sure you want to check ${skill.Name}?`)) {
                skill.checked.value = true;
                if (skill.ID === 'SkillTree_1') {
                const bermudesItem = document.querySelector('.SkillTree__Item__Bermudes');
                const line1 = document.querySelector('.SkillTree__Lines__1')
                    if (bermudesItem && line1) {
                        bermudesItem.classList.add('checked');
                        line1.classList.add('checked')
                    }
                }
            }
        } else {
            console.log("Cannot click because one of the parents is not checked");
        }
    } else {
        console.log("Case déjà cochée");
    }
}

</script>

<style lang="scss">
.main{
    display: flex;
    width: 100vw;
    height: 100vh;

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
                background-color: white;
                color: black;
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
                background-color: white;
                color: black;
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
                background-color: white;
                color: black;
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
                background-color: white;
                color: black;
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
                background-color: white;
                color: black;
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
                background-color: white;
                color: black;
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
                background-color: white;
                color: black;
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
                background-color: white;
                color: black;
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
                background-color: white;
                color: black;
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
                background-color: white;
                color: black;
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