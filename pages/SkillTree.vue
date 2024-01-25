<template>
    <div class="SkillTree">
        <div class="SkillTree__Start">
            <div class="SkillTree__Item SkillTree__Start__Départ" @click="checkbox(Skills[0])">
                <p>{{ Skills[0].Name }}</p>
                <p>{{ Skills[0].checked }}</p>
            </div>
            <div class="SkillTree__Item SkillTree__Start__Bermudes" @click="checkbox(Skills[0].children[0])">
                <p>{{ Skills[0].children[0].Name }}</p>
                <p>{{ Skills[0].children[0].checked }}</p>
            </div>
        </div>
        <div class="SkillTree__Locations">
            <div class="SkillTree__Item SkillTree__Locations__Dragon" @click="checkbox(Skills[0].children[0].children[2])">
                <p>{{ Skills[0].children[0].children[2].Name }}</p>
                <p>{{ Skills[0].children[0].children[2].checked }}</p>
            </div>
            <div class="SkillTree__Item SkillTree__Locations__DeadZone" @click="checkbox(Skills[0].children[0].children[3])">
                <p>{{ Skills[0].children[0].children[3].Name }}</p>
                <p>{{ Skills[0].children[0].children[3].checked }}</p>
            </div>
            <div class="SkillTree__Item SkillTree__Locations__MarianaTrench" @click="checkbox(Skills[0].children[0].children[2].children[0])">
                <p>{{ Skills[0].children[0].children[2].children[0].Name }}</p>
                <p>{{ Skills[0].children[0].children[2].children[0].checked }}</p>
            </div>
        </div>
        <div class="SkillTree__Disappearances">
            <div class="SkillTree__Item SkillTree__Disappearances__GhostLights" @click="checkbox(Skills[0].children[0].children[0])">
                <p>{{ Skills[0].children[0].children[0].Name }}</p>
                <p>{{ Skills[0].children[0].children[0].checked }}</p>
            </div>
            <div class="SkillTree__Item SkillTree__Disappearances__MaryCeleste" @click="checkbox(Skills[0].children[0].children[0].children[0])">
                <p>{{ Skills[0].children[0].children[0].children[0].Name }}</p>
                <p>{{ Skills[0].children[0].children[0].children[0].checked }}</p>
            </div>
            <div class="SkillTree__Item SkillTree__Disappearances__SubMarines" @click="checkbox(Skills[0].children[0].children[0].children[1])">
                <p>{{ Skills[0].children[0].children[0].children[1].Name }}</p>
                <p>{{ Skills[0].children[0].children[0].children[1].checked }}</p>
            </div>
        </div>
        <div class="SkillTree__Creatures">
            <div class="SkillTree__Item SkillTree__Creatures__Bloops" @click="checkbox(Skills[0].children[0].children[1])">
                <p>{{ Skills[0].children[0].children[1].Name }}</p>
                <p>{{ Skills[0].children[0].children[1].checked }}</p>
            </div>
            <div class="SkillTree__Item SkillTree__Creatures__Cryptids" @click="checkbox(Skills[0].children[0].children[1].children[0])">
                <p>{{ Skills[0].children[0].children[1].children[0].Name }}</p>
                <p>{{ Skills[0].children[0].children[1].children[0].checked }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';

let Skills = [
    {
        ID: "SkillTree_0",
        Name: "Départ",
        Tooltip: "Cette partie vous est gratuite",
        checked: ref(false),
        children: [
            {
                ID: "SkillTree_1",
                Name: "Triangle Des Bermudes",
                Tooltip: "Cette partie vous est gratuite, clickez ici pour la débloquer",
                checked: ref(false),
                children: [
                    {
                        ID: "SkillTree_2",
                        Name: "Vaisseaux fantômes de la mer Baltique",
                        Tooltip: "Débloquez cette partie du site pour 1 Point de Compétence",
                        checked: ref(false),
                        children: [
                            {
                                ID: "SkillTree_3",
                                Name: "Disparitions Sous-Marins 1968",
                                Tooltip: "Débloquez cette partie du site pour 1 Point de Compétence",
                                checked: ref(false),
                                children: []
                            },
                            {
                                ID: "SkillTree_4",
                                Name: "Mary Celeste",
                                Tooltip: "Débloquez cette partie du site pour 1 Point de Compétence",
                                checked: ref(false),
                                children: []
                            }
                        ]
                    },
                    {
                        ID: "SkillTree_5",
                        Name: "The Bloop",
                        Tooltip: "Débloquez cette partie du site pour 1 Point de Compétence",
                        checked: ref(false),
                        children: [
                            {
                                ID: "SkillTree_6",
                                Name: "Les cryptides sous-marines",
                                Tooltip: "Débloquez cette partie du site pour 1 Point de Compétence",
                                checked: ref(false),
                                children: []
                            }
                        ]
                    },
                    {
                        ID: "SkillTree_7",
                        Name: "Triangle du Dragon",
                        Tooltip: "Débloquez cette partie du site pour 1 Point de Compétence",
                        checked: ref(false),
                        children: [
                            {
                                ID: "SkillTree_8",
                                Name: "La fosse Mariane",
                                Tooltip: "Débloquez cette partie du site pour 1 Point de Compétence",
                                checked: ref(false),
                                children: []
                            }
                        ]
                    },
                    {
                        ID: "SkillTree_9",
                        Name: "Golf du Mexique, 'Dead Zone'",
                        Tooltip: "Débloquez cette partie du site pour 1 Point de Compétence",
                        checked: ref(false),
                        children: [
                            {
                                ID: "SkillTree_8",
                                Name: "La fosse Mariane",
                                Tooltip: "Débloquez cette partie du site pour 1 Point de Compétence",
                                checked: ref(false),
                                children: []
                            }
                        ]
                    }
                ]
            },
        ]
    }
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
    &__Item
        {
            width: 100px;
            height: 100px;
            background-color: rgb(50, 50, 162);
            color: white;
            text-align: center;
        }

    &__Start
        {
            background-color: rgba(255, 0, 0, 0.3);
        }

    &__Locations
        {
            background-color: rgba(0, 0, 255, 0.3);
        }

    &__Disappearances
        {
            background-color: rgba(0, 255, 0, 0.3);
        }

    &__Creatures
        {
            background-color: rgba(255, 0, 255, 0.3);
        }
}


</style>