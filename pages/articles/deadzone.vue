<template>
  <Comp_Header class="header"></Comp_Header>
  <div v-if="store.achievement__9" class="main">
        <div class="main__presentation">
            Golf du Mexique, 'Dead Zone'
        </div>
        <div class="main__article">
            <div class="main__article__introduction">
                <div class="main__article__introduction__content">
                    <div class="main__article__introduction__content__images" data-aos="fade-up" data-aos-duration="1000">
                        <img src="/images/dead_zone.jpg" alt="dead_zone">
                    </div>
                    <div class="main__article__introduction__content__texte" data-aos="fade-left" data-aos-duration="1000">
                        <h2><span class="span_article">Les Mystères de la "Dead Zone" : Un Regard sur les Profondeurs Troublantes du golf du Mexique</span></h2>
                        <p>Au cœur du <span class="span_article">golf du Mexique</span>, une énigme écologique <span class="span_article">fascinante</span> suscite l'inquiétude et l'intérêt des scientifiques : la <span class="span_article">"Dead Zone"</span>. <br/><br/>Cette zone dépourvue d'oxygène, où la vie marine semble <span class="span_article">anéantie</span>, soulève des questions <span class="span_article">cruciales</span> sur l'impact de l'activité humaine sur les écosystèmes marins.<br/><br/> Dans cet article, nous plongerons dans les méandres de la <span class="span_article">"Dead Zone"</span>, explorant ses <span class="span_article">origines</span>, ses <span class="span_article">conséquences</span> et les <span class="span_article">efforts déployés</span> pour comprendre et atténuer ce phénomène troublant.</p>
                    </div>
                </div>
            </div>
            <div class="main__article__content">
                <div class="main__article__content__origines" data-aos="fade-right" data-aos-duration="1000">
                    <h2><span class="span_article">La "Dead Zone" : Une Énigme Marine</span></h2>
                    <div class="main__article__content__origines__texte">
                        <p>Les origines de la <span class="span_article">"Dead Zone"</span> remontent aux pratiques agricoles intensives dans le bassin versant du <span class="span_article">Mississippi</span>.<br/><br/> Les engrais et les pesticides utilisés sur les terres agricoles finissent par se déverser dans le fleuve Mississippi, qui transporte ces substances nutritives excédentaires jusqu'au golf du Mexique.<br/><br/> Là, les eaux riches en nutriments créent un environnement propice à la <span class="span_article">prolifération d'algues</span>, donnant naissance à la "Dead Zone" saisonnière. La "Dead Zone" du golf du Mexique est une zone où les niveaux d'oxygène <span class="span_article">sont si bas</span> qu'ils ne peuvent plus soutenir la vie marine.<br/><br/> Cette situation alarmante est principalement attribuée à un <span class="span_article">excès d'éléments nutritifs</span>, tels que l'azote et le phosphore, provenant des <span class="span_article">activités agricoles et industrielles</span>.<br/><br/> Ces nutriments alimentent la croissance <span class="span_article">excessive d'algues</span>, qui, lorsqu'elles meurent et se décomposent, <span class="span_article">épuisent l'oxygène de l'eau</span>.</p>
                        <img src="/images/map-dead_zone.png" alt="map-dead_zone" data-aos="fade-up" data-aos-duration="1000">
                    </div>
                </div>
                <div class="main__article__content__stat" data-aos="fade-up" data-aos-duration="1000">
                    <Comp_BarChart_DeadZone/>
                    <h3>La taille de la zone d'hypoxie des eaux de fond (oxygène dessous inférieur à 2 mg 1-1) pour 1985-2023 en kilomètres carrés. <br/>
                        « nd » indique l'absence de données: une année sans zone entièrement cartographiée ou sans campagne estivale sur l'ensemble du plateau (1989 et 2016).
                        La superficie de 1988 est minime et n'est pas visible sur le graphique.</h3>
                </div>
                <div class="main__article__content__research">
                    <div class="main__article__content__research__consequences">
                        <div class="main__article__content__research__consequences__box" data-aos="fade-right" data-aos-duration="1000">
                            <p>La "Dead Zone" a des conséquences dramatiques sur la vie marine du Golfe du Mexique. <br/><br/>Les espèces qui dépendent de niveaux d'oxygène normaux sont contraintes de fuir la zone, tandis que celles qui ne peuvent pas s'en échapper peuvent périr. <br/><br/>Les pêcheurs constatent une diminution des captures dans la région touchée, et les écosystèmes marins sont perturbés. </p>
                        </div>
                        <p data-aos="fade-up" data-aos-duration="1000" class="main__article__content__research__consequences__text">Cela soulève des préoccupations quant à la <span class="span_article">durabilité</span> des ressources marines et à <span class="span_article">l'équilibre</span> délicat des écosystèmes.<br/><br/> Des scientifiques du monde entier mènent des recherches <span class="span_article">approfondies</span> pour comprendre les mécanismes de la <span class="span_article">"Dead Zone"</span> et trouver des solutions durables.<br/><br/> Des équipes de recherche surveillent de près les niveaux d'oxygène, la croissance des algues, et les facteurs environnementaux qui contribuent à cette <span class="span_article">énigme écologique</span>. <br/><br/>Les modèles informatiques sont utilisés pour prédire l'étendue et l'intensité de la <span class="span_article">"Dead Zone"</span> chaque année.</p>
                    </div>
                    <div class="main__article__content__research__endeavor" data-aos="fade-left" data-aos-duration="1000">
                        <div class="main__article__content__research__endeavor__text">
                            <p>Les efforts pour atténuer la <span class="span_article">"Dead Zone"</span> se concentrent sur la réduction des déversements de nutriments dans le <span class="span_article">Mississippi</span>. <br/><br/> Des pratiques agricoles durables, telles que la gestion efficace des engrais, sont encouragées pour <span class="span_article">minimiser les excès de nutriments</span>.<br/><br/> Des réglementations environnementales visent également à <span class="span_article">contrôler</span> les déversements industriels et les rejets urbains qui contribuent au problème. <br/><br/>Malgré ces initiatives, la résolution complète de la "Dead Zone" reste un défi <span class="span_article">complexe et continu</span>.</p>
                            <p>Les conséquences de la <span class="span_article">"Dead Zone"</span> ne se limitent pas à l'environnement marin.<br/><br/> Les communautés côtières qui dépendent de la pêche subissent des <span class="span_article">pertes économiques</span>, et les industries liées au tourisme peuvent être touchées par la mauvaise qualité de l'eau.<br/><br/> La lutte contre la <span class="span_article">"Dead Zone"</span> implique donc non seulement des efforts scientifiques, mais aussi une sensibilisation du public et des actions coordonnées pour <span class="span_article">réduire l'empreinte humaine</span> sur les écosystèmes marins.</p>
                        </div>
                        <img src="/images/explanation-dead_zone.png" alt="" data-aos="fade-up" data-aos-duration="1000">
                    </div>
                </div>
            </div>
            
        </div>
        <div class="main__article__conclusion">
            <div class="main__article__conclusion__content">
                <div class="main__article__conclusion__content__images" data-aos="fade-up" data-aos-duration="1000">
                    <img class="image_4" src="/creatures/creature_12.jpg" alt="creature_4">
                </div>
                <div class="main__article__conclusion__content__texte" data-aos="fade-left" data-aos-duration="1000">
                    <h2><span class="span_article">Conclusion</span></h2>
                    <p>La <span class="span_article">"Dead Zone"</span> du Golfe du Mexique demeure un mystère écologique <span class="span_article">complexe</span>, témoignant des ramifications de l'activité humaine sur les océans.<br/><br/> Alors que les scientifiques poursuivent leurs efforts pour <span class="span_article">comprendre et atténuer ce phénomène</span>, la <span class="span_article">"Dead Zone"</span> rappelle l'importance cruciale de préserver nos écosystèmes marins.<br/><br/> En <span class="span_article">équilibrant</span> les besoins humains avec la conservation de la vie marine, nous pouvons espérer <span class="span_article">restaurer</span> la santé des océans et préserver la diversité biologique pour les générations futures.</p>
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

        @include Article_Title;
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
                        @include PictureShadow;
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

            &__stat{
                width: 100%;
                padding: 180px;
                margin-top: 100px;
                background-size: 100%;
                background-position: center;
                background-image: 
                    url('/altered_creatures/creature_14_opacity.png'),
                    radial-gradient(50% 50% at -12% 40%, #00FFFF45 3%, #00031700 100%),
                    radial-gradient(34% 46% at 107% 40%, #00FFFF3D 4%, #00031700 100%),
                    radial-gradient(75% 75% at 50% 50%, #0B0D3AFF 0%, #080A1EFF 100%);
                background-repeat: no-repeat;

                h3{
                    line-height: 35px;
                    font-size: $desktop-large;
                    text-align: center;
                    margin-top: 40px;
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

            &__research{
                width: 100%;
                height: 100%;
                padding: 100px;

                &__text{
                    margin-top: 50px;
                }

                &__consequences{
                    width: 100%;
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                    gap: 50px;

                    &__text{
                        width: 70%; 
                    }
                    
                    &__box{
                        width: 50%;
                        text-align: center;
                        background: $light_blue-color;
                        padding: 20px 60px;
                        box-shadow: 0px 0px 30px $teal-color;
                    }
                }

                &__endeavor{
                    margin-top: 100px;
                    display: flex;
                    align-items: center;
                    gap: 50px;

                    p:first-child{
                        margin-bottom: 30px;
                    }

                    img{
                        width: 40%;
                        @include PictureShadow;
                    }
                }
            }
        }
    }
}

p{
    @include Article_Text;
}

.span_article{
    @include Article_Important;
}

</style>