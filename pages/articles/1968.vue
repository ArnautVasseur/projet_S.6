<template>
  <Comp_Header class="header"></Comp_Header>
  <div v-if="store.achievement__5" class="main">
        <div class="main__presentation">
            Les Disparitions de 1968
        </div>
        <div class="main__article">

            <div class="main__article__introduction">
                <div class="main__article__introduction__content">
                    <div class="main__article__introduction__content__images">
                        <img src="/images/dead_zone.jpg" alt="dead_zone">
                    </div>
                    <div class="main__article__introduction__content__texte">
                        <h2>Introduction</h2>
                        <p>L'année 1968 est marquée par un chapitre sombre et mystérieux de l'histoire maritime, alors que quatre sous-marins ont mystérieusement disparu sans laisser de trace. Ces événements intrigants ont laissé les experts perplexes et ont alimenté des spéculations persistantes sur les circonstances entourant ces disparitions. Dans cet article, nous plongerons dans le passé pour explorer les mystères de ces quatre sous-marins disparus, cherchant des réponses qui échappent encore aux chercheurs des océans.</p>
                    </div>
                </div>
            </div>

            <div class="main__article__content">
                <Comp_Slider/>
            </div>
        </div>
        
        <div class="main__article__conclusion">
            <div class="main__article__conclusion__content">
                <div class="main__article__conclusion__content__images">
                    <img class="image_4" src="/creatures/creature_12.jpg" alt="creature_4">
                </div>
                <div class="main__article__conclusion__content__texte">
                    <h2>Conclusion</h2>
                    <p>La "Dead Zone" du Golfe du Mexique demeure un mystère écologique complexe, témoignant des ramifications de l'activité humaine sur les océans.<br/><br/> Alors que les scientifiques poursuivent leurs efforts pour comprendre et atténuer ce phénomène, la "Dead Zone" rappelle l'importance cruciale de préserver nos écosystèmes marins.<br/><br/> En équilibrant les besoins humains avec la conservation de la vie marine, nous pouvons espérer restaurer la santé des océans et préserver la diversité biologique pour les générations futures.</p>
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
        }
    }
}


h2{
    @include Article_Title;
}

p{
    @include Article_Text;
}

</style>