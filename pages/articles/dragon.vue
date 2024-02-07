<template>
  <Comp_Header class="header"></Comp_Header>
  <div v-if="store.achievement__5" class="main">
        <div class="main__presentation">
            Le Triangle du Dragon
        </div>
        <div class="main__article">
            <div class="main__article__introduction">
                <div class="main__article__introduction__content">

                    <div class="main__article__introduction__content__images">
                        <img src="/images/TriangleDuDragon2.png" alt="TriangleDuDragon">
                    </div>

                    <div class="main__article__introduction__content__texte">
                        <h2>Les Mystères du Triangle du Dragon : Entre Légendes et Réalités Cachées</h2>
                        <p>Au cœur de l'océan Pacifique, le Triangle du Dragon, également connu sous le nom de Triangle du Démon, demeure une zone énigmatique associée à des disparitions mystérieuses et à des phénomènes inexplicables.<br/><br/> Bien que moins connu que le Triangle des Bermudes, cet espace maritime a sa propre part de légendes et de récits intrigants.<br/><br/> Dans cet article, nous explorerons les mystères du Triangle du Dragon, plongeant dans son histoire et examinant les théories entourant ses phénomènes inhabituels.</p>
                    </div>
                    
                </div>
            </div>
            <div class="main__article__content">
                <div class="main__article__content__discovery">
                    <div class="main__article__content__discovery__texte">
                        <h2>La Localisation</h2>
                        <p>Situé entre les côtes du Japon, des Philippines et de Guam, le Triangle du Dragon est entouré de mystères qui remontent à des siècles.<br/><br/> Des récits anciens parlent de navires disparus, de phénomènes météorologiques étranges et de lumières mystérieuses observées dans le ciel nocturne.<br/><br/> Les pêcheurs locaux ont longtemps évité cette région, craignant des forces surnaturelles qui pourraient engloutir les imprudents.</p>
                    </div>
                    <img src="/images/TriangleDuDragon.jpg" alt="TriangleDuDragon">
                </div>
                <div class="main__article__content__theory">
                    <h2 class="main__article__content__theory__title">Théories et Spéculations</h2>
                    <div class="main__article__content__theory__texte">
                        <p>Les théories entourant le Triangle du Dragon sont diverses.<br/><br/> Certains chercheurs suggèrent des causes naturelles telles que des courants océaniques complexes, des conditions météorologiques extrêmes ou des phénomènes géologiques sous-marins.<br/><br/> D'autres, imprégnés de mysticisme, évoquent des explications liées à des forces ésotériques ou à des entités mythiques présentes dans la culture asiatique.<br/><br/>Bien que moins documenté que le Triangle des Bermudes, le Triangle du Dragon est lié à des disparitions mystérieuses.<br/><br/> Des navires et des avions ont été signalés manquants, sans explication apparente.<br/><br/> Les enquêtes sur ces disparitions ont souvent été entravées par le manque de preuves tangibles, laissant place à des théories variées allant de problèmes techniques à des forces surnaturelles.</p>
                        <p>Le Triangle du Dragon est souvent associé à des phénomènes étranges, tels que des lumières inhabituelles observées au-dessus de la mer.<br/><br/> Des rapports mentionnent des boules de lumière plongeant dans l'océan, suscitant des spéculations sur des manifestations paranormales ou des activités extraterrestres.<br/><br/> Ces observations ont contribué à la création de légendes locales, amplifiant le mystère qui entoure cette zone maritime.<br/><br/> Bien que moins documenté que le Triangle des Bermudes, le Triangle du Dragon est lié à des disparitions mystérieuses.<br/><br/> Des navires et des avions ont été signalés manquants, sans explication apparente.<br/><br/> Les enquêtes sur ces disparitions ont souvent été entravées par le manque de preuves tangibles, laissant place à des théories variées allant de problèmes techniques à des forces surnaturelles.</p>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="main__article__conclusion">
            <div class="main__article__conclusion__content">

                <div class="main__article__conclusion__content__images">
                    <img src="/images/TriangleDuDragon3.png" alt="TriangleDuDragon3">
                </div>

                <div class="main__article__conclusion__content__texte">
                    <h2>Conclusion</h2>
                    <p>Malgré les siècles de mystère, la quête de la vérité sur le Triangle du Dragon se poursuit.<br/><br/> Les avancées technologiques modernes permettent des investigations approfondies, mais les limites de cette région isolée rendent encore difficile la collecte de données précises.<br/><br/> Les chercheurs cherchent à comprendre les forces complexes qui peuvent influencer les phénomènes inhabituels observés dans cette zone.<br/><br/> Le Triangle du Dragon demeure un territoire mystérieux, mêlant légendes ancestrales et réalités cachées.<br/><br/> Alors que la science et la technologie progressent, la vérité sur les phénomènes étranges associés à cette région pourrait éventuellement émerger.<br/><br/> Pour l'instant, le Triangle du Dragon continue d'intriguer, invitant les esprits curieux à explorer les mystères qui se cachent au cœur de ses eaux tumultueuses et énigmatiques.</p>
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
                    url('/altered_pictures/Dragon_opacity.png'),
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