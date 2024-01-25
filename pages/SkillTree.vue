<template>
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
                <p>{{ Achievements[7].Name }}</p>
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
    </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';

let Achievements = [
    {
        ID: "SkillTree_0",
        Name: "Départ",
        Tooltip: "Cette partie vous est gratuite",
        checked: ref(false),
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

function checkbox(skill: { checked: { value: boolean } }) {
    if(skill.checked.value == false){
        skill.checked.value = true;
    }
    else{
        console.log("case déjà cochée")
    }   
}

</script>

<style lang="scss">

.SkillTree{
    width: 1100px;
    height: 900px;
    padding: 20px;
    border: 2px solid black;

    &__Item
        {
            &__Départ{
                top: 100px;
                left: 500px;
                width: 100px;
                height: 100px;
                background-color: rgba(0, 0, 255, 0.5);
                color: white;
                text-align: center;
                position: absolute;
            }

            &__Bermudes{
                top: 300px;
                left: 500px;
                width: 100px;
                height: 100px;
                background-color: rgba(0, 0, 255, 0.5);
                color: white;
                text-align: center;
                position: absolute;
            }

            &__Dragon{
                top: 500px;
                left: 100px;
                width: 100px;
                height: 100px;
                background-color: rgba(0, 0, 255, 0.5);
                color: white;
                text-align: center;
                position: absolute;
            }

            &__DeadZone{
                top: 500px;
                left: 300px;
                width: 100px;
                height: 100px;
                background-color: rgba(0, 0, 255, 0.5);
                color: white;
                text-align: center;
                position: absolute;
            }

            &__MarianaTrench{
                top: 700px;
                left: 200px;
                width: 100px;
                height: 100px;
                background-color: rgba(0, 0, 255, 0.5);
                color: white;
                text-align: center;
                position: absolute;
            }

            &__GhostLights{
                top: 500px;
                left: 700px;
                width: 100px;
                height: 100px;
                background-color: rgba(0, 0, 255, 0.5);
                color: white;
                text-align: center;
                position: absolute;
            }

            &__MaryCeleste{
                top: 500px;
                left: 900px;
                width: 100px;
                height: 100px;
                background-color: rgba(0, 0, 255, 0.5);
                color: white;
                text-align: center;
                position: absolute;
            }

            &__SubMarines{
                top: 700px;
                left: 700px;
                width: 100px;
                height: 100px;
                background-color: rgba(0, 0, 255, 0.5);
                color: white;
                text-align: center;
                position: absolute;
            }

            &__Bloop{
                top: 500px;
                left: 500px;
                width: 100px;
                height: 100px;
                background-color: rgba(0, 0, 255, 0.5);
                color: white;
                text-align: center;
                position: absolute;
            }

            &__Cryptids{
                top: 700px;
                left: 500px;
                width: 100px;
                height: 100px;
                background-color: rgba(0, 0, 255, 0.5);
                color: white;
                text-align: center;
                position: absolute;
            }
        }
}

</style>