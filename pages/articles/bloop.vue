<template>
  <Comp_Header class="header"></Comp_Header>
  <div v-if="store.achievement__5" class="main">
        <div class="main__presentation">
            Le Bloop
        </div>
        <div class="main__article">
            <div class="main__article__introduction">
                <div class="main__article__introduction__content">
                    <div class="main__article__introduction__content__texte">
                        <h2>Les Mystères du "Bloop" : Un Son sous-marin Énigmatique</h2>
                        <p>Les profondeurs de l'océan abritent une symphonie mystérieuse, un monde sonore caché qui défie parfois l'entendement humain. <br/><br/> Parmi les nombreux phénomènes énigmatiques, le "Bloop" se distingue comme l'un des mystères les plus captivants des abysses océaniques. <br/><br/>Dans cet article, nous plongerons dans l'histoire de ce son sous-marin mystérieux, explorant les théories et les spéculations qui entourent le "Bloop" et son impact sur la compréhension de notre monde océanique.</p>
                    </div>
                    <div class="main__article__introduction__content__images">
                        <img class="image_8" src="/creatures/creature_8.jpg" alt="creature_8">
                    </div>
                </div>
            </div>
            <div class="main__article__content">
                <div class="main__article__content__discovery">
                    <img class="image_8" src="/creatures/bloop.jpg" alt="creature_8">
                    <div class="main__article__content__discovery__texte">
                        <h2>La découverte du "Bloop"</h2>
                        <p>Le "Bloop" a été enregistré pour la première fois en 1997 par les hydrophones de l'Administration nationale océanique et atmosphérique (NOAA) près de l'Antarctique. <br/><br/> Ce son inhabituel, caractérisé par une amplitude extrêmement puissante, a captivé les scientifiques du monde entier.<br/> L'émission du "Bloop" a été détectée sur une large gamme de fréquences, défiant les caractéristiques typiques des sons émis par les baleines ou d'autres animaux marins.<br/><br/> Quelle que soit son origine, le "Bloop" a eu un impact significatif sur la manière dont nous percevons les mystères des profondeurs océaniques. <br/><br/>En suscitant l'imagination du public, il a renforcé l'intérêt pour l'exploration des abysses et la recherche de créatures inconnues. <br/><br/> Le mystère du "Bloop" rappelle que même à l'ère de la technologie avancée, les océans continuent de cacher des secrets intrigants, incitant les chercheurs à explorer davantage les mystères sous-marins.</p>
                    </div>
                </div>
                <div class="main__article__content__theory">
                    <h2 class="main__article__content__theory__title">Théories et Spéculations</h2>
                    <div class="main__article__content__theory__texte">
                        <p>Les spéculations sur l'origine du "Bloop" sont variées et parfois fantaisistes.<br/> L'une des premières théories avancées suggérait qu'il pouvait provenir d'une créature marine inconnue, peut-être même d'une espèce gigantesque cachée dans les profondeurs.<br/><br/> Cependant, la communauté scientifique a rapidement écarté cette idée, soulignant que la fréquence et le volume du son étaient incompatibles avec les caractéristiques biologiques connues.</p>
                        <p>Une explication plus plausible est venue des scientifiques de la NOAA, qui ont conclu que le "Bloop" était probablement d'origine glaciaire. <br/><br/>Selon cette théorie, le son pourrait résulter du craquement des icebergs en train de se détacher et de s'effondrer dans l'océan.<br/><br/> Bien que cette explication ait apaisé une partie des mystères entourant le "Bloop," certains sceptiques ont continué à émettre des doutes, arguant que la puissance du son dépassait de loin ce qui était attendu pour un phénomène glaciaire.</p>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="main__article__conclusion">
            <div class="main__article__conclusion__content">
                <div class="main__article__conclusion__content__texte">
                    <h2>Conclusion</h2>
                    <p>Le "Bloop" demeure un mystère sous-marin fascinant, laissant derrière lui une symphonie d'interrogations et de spéculations. <br/>Alors que les scientifiques continuent d'étudier et de comprendre les mystères des océans, le "Bloop" demeure une énigme qui défie facilement les explications simples.<br/><br/> Peut-être que dans le futur, de nouvelles découvertes et avancées technologiques nous permettront de résoudre ce mystère sonore, dévoilant ainsi un chapitre de plus dans le livre des secrets océaniques.</p>
                </div>
                <div class="main__article__conclusion__content__images">
                    <img class="image_4" src="/creatures/creature_4.jpg" alt="creature_4">
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
                    url('/altered_creatures/creature_9_opacity.png'),
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