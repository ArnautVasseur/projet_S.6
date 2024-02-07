<template>
  <Comp_Header class="header"></Comp_Header>
  <div v-if="store.achievement__5" class="main">
        <div class="main__presentation">
            Le Triangle des Bermudes
        </div>
        <div class="main__article">
            <div class="main__article__introduction">
                <div class="main__article__introduction__content">
                    <div class="main__article__introduction__content__texte">
                        <h2>Les Mystères Insondables du Triangle des Bermudes : Entre Mythe et Réalité</h2>
                        <p>Le Triangle des Bermudes, une région énigmatique de l'océan Atlantique, a longtemps été associé à des disparitions mystérieuses d'aéronefs et de navires.<br/><br/> Cette zone, délimitée par Miami, les Bermudes et Porto Rico, a alimenté l'imagination populaire et suscité des théories diverses sur les causes potentielles de ces incidents.<br/><br/> Dans cet article, nous explorerons les mystères du Triangle des Bermudes, démêlant le mythe de la réalité pour tenter de comprendre les phénomènes étranges qui ont marqué cette zone.</p>
                    </div>
                    <div class="main__article__introduction__content__images">
                        <img src="/images/Bermudes.png" alt="Bermudes">
                    </div>
                </div>
            </div>
            <div class="main__article__content">
                <div class="main__article__content__discovery">
                    <img src="/images/Bermudes4.webp" alt="creature_8">
                    <div class="main__article__content__discovery__texte">
                        <h2>Un Théâtre de Disparitions</h2>
                        <p>Le Triangle des Bermudes a acquis sa notoriété en raison d'un certain nombre de disparitions mystérieuses au cours du XXe siècle.<br/><br/> Des avions et des navires ont disparu sans laisser de traces, donnant naissance à des spéculations allant de phénomènes paranormaux à des explications scientifiques.<br/><br/> Parmi les incidents les plus célèbres figurent la disparition du vol 19 en 1945, le vol 441 en 1954, et le vol 19 en 1965.</p>
                    </div>
                </div>
                <div class="main__article__content__theory">
                    <h2 class="main__article__content__theory__title">Théories et Spéculations</h2>
                    <div class="main__article__content__theory__texte">
                        <p>Des théories paranormales ont souvent été avancées pour expliquer les disparitions dans le Triangle des Bermudes.<br/><br/> Certains ont suggéré l'existence de portails vers d'autres dimensions, d'extraterrestres ou d'activités liées à l'Atlantide.<br/><br/> Ces spéculations, bien que populaires, manquent de preuves tangibles et restent largement rejetées par la communauté scientifique.<br/><br/> Parmi les disparitions les plus célèbres, le vol 19 en 1945 reste emblématique.<br/><br/> Cinq avions de l'US Navy ont disparu au cours d'un exercice d'entraînement, et malgré d'intenses recherches, ni les avions ni les membres d'équipage n'ont été retrouvés.</p>
                        <p>Des explications scientifiques ont également été proposées pour les incidents du Triangle des Bermudes.<br/><br/> Les variations magnétiques, les anomalies géomagnétiques et les phénomènes météorologiques inhabituels sont souvent cités comme des facteurs potentiels contribuant aux problèmes de navigation.<br/><br/> Les experts soulignent également la densité élevée du trafic aérien et maritime dans cette région, augmentant statistiquement le nombre d'incidents.<br/><br/> Ces disparitions ont contribué à la construction de la légende du Triangle des Bermudes.</p>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="main__article__conclusion">
            <div class="main__article__conclusion__content">
                <div class="main__article__conclusion__content__texte">
                    <h2>Conclusion</h2>
                    <p>Malgré des décennies de spéculations, le mystère du Triangle des Bermudes persiste.<br/><br/> Les technologies modernes de navigation et de communication ont considérablement réduit le nombre d'incidents, mais la fascination pour cette zone demeure.<br/><br/> Les chercheurs continuent d'étudier les phénomènes naturels et les facteurs humains qui pourraient expliquer les disparitions passées.<br/><br/> Le Triangle des Bermudes continue de captiver l'imagination du public, mêlant réalité et légende.<br/><br/> Alors que les explications scientifiques offrent des réponses plausibles, les mystères persistants et les disparitions non résolues contribuent à entretenir le mythe.<br/><br/> Que ce soit dû à des forces paranormales, à des phénomènes naturels complexes ou à des facteurs humains, le Triangle des Bermudes reste une énigme intrigante, incitant à la prudence et à l'exploration scientifique des zones maritimes inexplorées de notre planète.</p>
                </div>
                <div class="main__article__conclusion__content__images">
                    <img src="/images/Bermudes2.jpg" alt="Bermudes2">
                </div>
            </div>
        </div>
    </div>
    <div v-else>NOPE</div>
    <Comp_Footer/>
</template>

<script setup lang="ts">
const store = useGlobalStore()

//renvoie l'user sur l'index s'il n'est pas connecté
definePageMeta({
  middleware: [
    'auth',
  ],
});

let achievement = ref<Array<{ name: string }>>([]);

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
};

onMounted(async () => {
    await store.token
    await getAchievement()
})

</script>

<style lang="scss" scoped>

.main{
    color: white;
    font-family: $montserrat, "sans-serif";

    &__presentation{
        background-image: 
        url('/altered_creatures/creature_8_opacity.png'),
        radial-gradient(20% 50% at 0% 20%, #05CBA569 0%, #073AFF00 100%),
        radial-gradient(20% 50% at 100% 10%, #05CBA559 0%, #073AFF00 100%),
        radial-gradient(20% 30% at 30% 1%, #8A4FFF4D 9%, #073AFF00 100%),
        linear-gradient(320deg, #020015 42%, #291379FF 100%);
        background-position: bottom;
        background-size: 120%;
        background-repeat: no-repeat;

        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        padding: 130px 0px;

        @include Article_Title
    }

    &__article{
        
        &__conclusion, &__introduction{
            padding: 100px;
            background-size: 100% 100%;
            background-position: 0px 0px,0px 0px,0px 0px;
            background-image: radial-gradient(50% 50% at -12% 40%, #00FFFF45 3%, #00031700 100%),radial-gradient(34% 46% at 107% 40%, #00FFFF3D 4%, #00031700 100%),radial-gradient(75% 75% at 50% 50%, #0B0D3AFF 0%, #080A1EFF 100%);

            &__content{
                display: flex;
                align-content: center;
                align-items: center;
                gap: 100px;

                &__images{
                    position: relative;
                    margin: auto;

                    img{
                        width: 100%;
                        margin: auto;
                        box-shadow: 0px 0px 50px $teal-color;
                    }
                }

                &__texte{
                    height: 100%;
                    line-height: 1.5rem;
                    display: flex;
                    flex-direction: column;
                    gap: 30px;

                    h2{
                        @include h2;
                        line-height: 40px;
                        text-align: center;
                    }
                }
            }
        }

        &__content{
            background: $primary-color;
            padding-top: 50px;

            &__theory{
                width: 100%;
                padding: 100px;
                margin-top: 100px;
                background-size: 100%;
                background-position: center;
                background-image: 
                    url('/altered_pictures/Bermudes2_opacity.png'),
                    radial-gradient(50% 50% at -12% 40%, #00FFFF45 3%, #00031700 100%),
                    radial-gradient(34% 46% at 107% 40%, #00FFFF3D 4%, #00031700 100%),
                    radial-gradient(75% 75% at 50% 50%, #0B0D3AFF 0%, #080A1EFF 100%);
                background-repeat: no-repeat;

                
                &__title{
                    @include h2;
                    text-align: center;
                    margin-bottom: 100px;
                }

                &__texte{
                    display: flex;
                    justify-content: center;
                    gap: 50px;
                    line-height: 20px;

                    p{
                        width: 100%;
                    }
                }
            }

            &__discovery{
                padding: 50px 100px 0px 100px;
                border-top: 5px ;
                display: flex;
                align-content: center;
                align-items: center;
                gap: 100px;

                &__texte{
                    width: 70%;
                    display: flex;
                    flex-direction: column; 
                    gap: 30px;

                    h2{
                        @include h2;
                        text-align: center;
                    }

                    p{
                        line-height: 1.5rem;
                    }
                }

                img{
                    width: 50%;
                    margin: auto;
                    box-shadow: 0px 0px 50px $teal-color;
                }
            }
        }
    }
}

img{
    box-shadow: 0px 0px 50px $teal-color;
}

</style>