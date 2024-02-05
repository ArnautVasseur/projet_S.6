<template>
  <Comp_Header class="header"></Comp_Header>
  <div v-if="store.achievement__5" class="main">
        <div class="main__presentation">
            Golf du Mexique, 'Dead Zone'
        </div>
        <div class="main__article">
            <div class="main__article__introduction">
                <div class="main__article__introduction__content">
                    <div class="main__article__introduction__content__images">
                        <img src="/images/dead_zone.jpg" alt="dead_zone">
                    </div>
                    <div class="main__article__introduction__content__texte">
                        <h2>Les Mystères de la "Dead Zone" : Un Regard sur les Profondeurs Troublantes du Golfe du Mexique</h2>
                        <p>Au cœur du Golfe du Mexique, une énigme écologique fascinante suscite l'inquiétude et l'intérêt des scientifiques : la "Dead Zone". <br/><br/>Cette zone dépourvue d'oxygène, où la vie marine semble anéantie, soulève des questions cruciales sur l'impact de l'activité humaine sur les écosystèmes marins.<br/><br/> Dans cet article, nous plongerons dans les méandres de la "Dead Zone", explorant ses origines, ses conséquences et les efforts déployés pour comprendre et atténuer ce phénomène troublant.</p>
                    </div>
                </div>
            </div>
            <div class="main__article__content">
                <div class="main__article__content__origines">
                    <h2>La "Dead Zone" : Une Énigme Marine</h2>
                    <div class="main__article__content__origines__texte">
                        <p>Les origines de la "Dead Zone" remontent aux pratiques agricoles intensives dans le bassin versant du Mississippi.<br/><br/> Les engrais et les pesticides utilisés sur les terres agricoles finissent par se déverser dans le fleuve Mississippi, qui transporte ces substances nutritives excédentaires jusqu'au Golfe du Mexique.<br/><br/> Là, les eaux riches en nutriments créent un environnement propice à la prolifération d'algues, donnant naissance à la "Dead Zone" saisonnière. La "Dead Zone" du Golfe du Mexique est une zone où les niveaux d'oxygène sont si bas qu'ils ne peuvent plus soutenir la vie marine.<br/><br/> Cette situation alarmante est principalement attribuée à un excès d'éléments nutritifs, tels que l'azote et le phosphore, provenant des activités agricoles et industrielles.<br/><br/> Ces nutriments alimentent la croissance excessive d'algues, qui, lorsqu'elles meurent et se décomposent, épuisent l'oxygène de l'eau.</p>
                        <img src="/images/map-dead_zone.png" alt="map-dead_zone">
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
import { ref } from 'vue';
import { onMounted } from 'vue';
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

    
    
    achievement.value.forEach((succes) =>{
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
        url('/altered_pictures/dead_zone2_opacity.png'),
        radial-gradient(20% 50% at 0% 20%, #05CBA569 0%, #073AFF00 100%),
        radial-gradient(20% 50% at 100% 10%, #05CBA559 0%, #073AFF00 100%),
        radial-gradient(20% 30% at 30% 1%, #8A4FFF4D 9%, #073AFF00 100%),
        linear-gradient(320deg, #020015 42%, #291379FF 100%);
        background-position: top right;
        background-size: 100%;
        background-repeat: no-repeat;

        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        padding: 130px 0px;

        @include Article__title
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
                        @include PictureShadow
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

            &__origines{
                padding: 50px 100px 0px 100px;
                gap: 100px;

                h2{
                    @include h2;
                    text-align: center;
                    margin-bottom: 50px;
                }

                &__texte{
                    width: 100%;
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                    gap: 30px;

                    img{
                        width: 40%;
                        margin: auto;
                    }
                }
            }
        }
    }
}

p{
    @include Article_Text
}

</style>