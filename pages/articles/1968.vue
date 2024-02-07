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
                        <img src="/images/Minerve2_1968.jpg" alt="dead_zone">
                    </div>
                    <div class="main__article__introduction__content__texte">
                        <h2>Introduction</h2>
                        <p>L'année 1968 est marquée par un chapitre sombre et mystérieux de l'histoire maritime, alors que quatre sous-marins ont mystérieusement disparu sans laisser de trace.<br/><br/> Ces événements intrigants ont laissé les experts perplexes et ont alimenté des spéculations persistantes sur les circonstances entourant ces disparitions.<br/><br/> Dans cet article, nous plongerons dans le passé pour explorer les mystères de ces quatre sous-marins disparus, cherchant des réponses qui échappent encore aux chercheurs des océans.</p>
                    </div>
                </div>
            </div>

            <div class="main__article__content">

                <div class="main__article__content__presentation">
                    <div class="main__article__content__presentation__borders">
                        <h2>Les Disparitions des 4 Sous-Marins de 1968</h2>
                        <p>
                            En 1968, quatre sous-marins de différentes nations ont disparu dans des circonstances mystérieuses.<br/><br/> Le sous-marin français Minerve, le sous-marin israélien Dakar, le sous-marin américain Scorpion, et le sous-marin soviétique K-129 ont tous été engloutis par les eaux sans laisser de traces évidentes.<br/><br/> Ces disparitions ont suscité des interrogations profondes au sein des communautés militaires et civiles, alimentant les théories du complot et les spéculations sur des activités inexpliquées en haute mer.
                        </p>
                        <span class="border_btm"></span>
                    </div>
                </div>

                <div class="main__article__content__slider">
                    <Comp_Slider/>
                </div>

                <div class="main__article__content__ships">

                    <div class="main__article__content__ships__box">
                        <div class="main__article__content__ships__box__texte">
                            <h2>INS-Dakar Israélien</h2>
                            <p>Le sous-marin israélien Dakar a mystérieusement disparu en mer Méditerranée en janvier 1968.<br/><br/> Après une recherche infructueuse à l'époque, son épave n'a été localisée qu'en 1999, près de l'île de Crète.<br/><br/> Les raisons de sa perte demeurent floues, bien que des spéculations mentionnent des problèmes techniques ou des rencontres avec des navires étrangers.</p>
                            <span class="border_btm"></span>
                        </div>
                        <img src="/images/INS-Dakar_location_1968.png" alt="INS-Dakar_location">
                    </div>

                    <div class="main__article__content__ships__box">
                        <img src="/images/Minerve_location_1968.png" alt="INS-Dakar_location">
                        <div class="main__article__content__ships__box__texte">
                            <h2>Minerve Français</h2>
                            <p>Le 27 janvier 1968, le sous-marin français Minerve a disparu lors d'un exercice en Méditerranée.<br/><br/> Malgré les recherches intensives, son épave n'a été retrouvée qu'en 2019, à une profondeur considérable.<br/><br/> Les circonstances exactes de sa disparition restent inconnues, alimentant des théories allant de problèmes techniques à des rencontres avec des objets non identifiés.</p>
                            <span class="border_btm"></span>
                        </div>
                    </div>

                    <div class="main__article__content__ships__box">
                        <div class="main__article__content__ships__box__texte">
                            <h2>K-129 Soviétique</h2>
                            <p>En mars 1968, le sous-marin soviétique K-129 a disparu dans le Pacifique.<br/><br/> Les Soviétiques ont tenté de localiser l'épave, mais ce sont finalement les Américains qui l'ont retrouvée en 1974, déclenchant une opération secrète connue sous le nom d'Azorian Project.<br/><br/>  Les raisons de la disparition du K-129 restent incertaines, suscitant des spéculations sur des problèmes techniques ou des manœuvres militaires risquées.</p>
                            <span class="border_btm"></span>
                        </div>
                        <img src="/images/K-129_location_1968.png" alt="K-129_location">
                    </div>

                    <div class="main__article__content__ships__box">
                        <img src="/images/UUS-scorpion_location_1968.png" alt="UUS-scorpion_location">
                        <div class="main__article__content__ships__box__texte">
                            <h2>USS Scorpion</h2>
                            <p>Le sous-marin américain USS Scorpion a disparu en mai 1968, alors qu'il effectuait une mission secrète dans l'Atlantique.<br/><br/> Malgré des opérations de recherche massives, son épave n'a été retrouvée qu'en octobre de la même année.<br/><br/> Les circonstances de la disparition du Scorpion sont entourées de mystère, avec des théories allant de défaillances mécaniques à des actes délibérés.</p>
                            <span class="border_btm"></span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
        <div class="main__article__conclusion">
            <div class="main__article__conclusion__content">
                <div class="main__article__conclusion__content__images">
                    <img src="/creatures/creature_6.jpg" alt="creature_6">
                </div>
                <div class="main__article__conclusion__content__texte">
                    <h2>Conclusion</h2>
                    <p>En revisitant les mystères des quatre sous-marins disparus en 1968, nous nous confrontons à des énigmes maritimes qui demeurent insolubles.<br/><br/> Ces disparitions continuent de captiver l'imagination et soulèvent des questions persistantes sur ce qui s'est réellement passé en mer.<br/><br/> Alors que la technologie moderne progresse, les espoirs de résoudre ces mystères grandissent, mais pour l'instant, les circonstances exactes de ces événements demeurent enfouies dans les profondeurs de l'océan, attendant d'être révélées.</p>
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
        url('/altered_creatures/creature_16_opacity.png'),
        radial-gradient(20% 50% at 0% 20%, #05CBA569 0%, #073AFF00 100%),
        radial-gradient(20% 50% at 100% 10%, #05CBA559 0%, #073AFF00 100%),
        radial-gradient(20% 30% at 30% 1%, #8A4FFF4D 9%, #073AFF00 100%),
        linear-gradient(320deg, #020015 42%, #291379FF 100%);
        background-position: center;
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
            width: 100%;

            &__presentation {
                padding: 100px;
                background:$primary-color ;

                &__borders{
                    padding: 50px;
                    position:relative;
                    transition: 1s ease-in-out;

                    &:hover {
                    @include PictureShadow;
                    &:before,
                    &:after {
                        width: 700px;
                        height: 250px;
                        
                    }

                    span.border_btm {
                    &:before,
                    &:after {
                        width: 700px;
                        height: 250px;
                    }
                    }
                }

                    h2{
                        margin-bottom: 30px;
                    }
                    span.border_btm {

                        &:after {
                            display: block;
                            content: "";
                            width: 30px;
                            height: 30px;
                            position: absolute;
                            bottom: -10px;
                            right: -10px;
                            border-bottom: 5px solid $teal-color;
                            border-right: 5px solid $teal-color;
                            transition: 1s ease-in-out;
                        }

                        &:before {
                            display: block;
                            content: "";
                            width: 30px;
                            height: 30px;
                            position: absolute;
                            bottom: -10px;
                            left: -10px;
                            border-bottom: 5px solid $teal-color;
                            border-left: 5px solid $teal-color;
                            transition: 1s ease-in-out;
                        }
                    }

                    &:before {
                        display: block;
                        content: "";
                        width: 30px;
                        height: 30px;
                        position: absolute;
                        top: -10px;
                        left: -10px;
                        border-top: 5px solid $teal-color;
                        border-left: 5px solid $teal-color;
                        transition: 1s ease-in-out;
                    }
                    &:after {
                        display: block;
                        content: "";
                        width: 30px;
                        height: 30px;
                        position: absolute;
                        top: -10px;
                        right: -10px;
                        border-top: 5px solid $teal-color;
                        border-right: 5px solid $teal-color;
                        transition: 1s ease-in-out;
                    }

                }
                
            }

            &__slider{
                background-image: radial-gradient(20% 50% at 0% 20%, #05CBA569 0%, #073AFF00 100%),
                radial-gradient(20% 50% at 100% 10%, #05CBA559 0%, #073AFF00 100%),
                radial-gradient(20% 30% at 30% 1%, #8A4FFF4D 9%, #073AFF00 100%),
                linear-gradient(320deg, #020015 42%, #291379FF 100%);;
                background-position: bottom;
                background-size: 100%;
                background-repeat: no-repeat;
            }

            &__ships{
                background: $primary-color;
                padding: 50px 100px;

                &__box{
                    position:relative;
                    padding: 50px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 50px;
                    transition: 1s;
                    margin: 100px 0px;

                    &:hover {
                        @include PictureShadow;
                        &:before,
                        &:after {
                            width: 700px;
                            height: 250px;
                            
                        }

                        span.border_btm {
                        &:before,
                        &:after {
                            width: 700px;
                            height: 250px;
                        }
                        }
                    }

                    h2{
                        margin-bottom: 30px;
                    }

                    &:before {
                        display: block;
                        content: "";
                        width: 50px;
                        height: 50px;
                        position: absolute;
                        top: -10px;
                        left: -10px;
                        border-top: 5px solid $teal-color;
                        border-left: 5px solid $teal-color;
                        transition: 1s;
                    }
                    &:after {
                        display: block;
                        content: "";
                        width: 50px;
                        height: 50px;
                        position: absolute;
                        top: -10px;
                        right: -10px;
                        border-top: 5px solid $teal-color;
                        border-right: 5px solid $teal-color;
                        transition: 1s;
                    }

                    span.border_btm {

                        &:after {
                            display: block;
                            content: "";
                            width: 50px;
                            height: 50px;
                            position: absolute;
                            bottom: -10px;
                            right: -10px;
                            border-bottom: 5px solid $teal-color;
                            border-right: 5px solid $teal-color;
                            transition: 1s;
                        }

                        &:before {
                            display: block;
                            content: "";
                            width: 50px;
                            height: 50px;
                            position: absolute;
                            bottom: -10px;
                            left: -10px;
                            border-bottom: 5px solid $teal-color;
                            border-left: 5px solid $teal-color;
                            transition: 1s;
                        }
                    }

                    &__texte{
                    width: 60%;
                    @include Article_Text;
                    

                        h2{
                            width: 100%;
                            margin-bottom: 50px;
                            @include h2;
                            text-align: center;
                        }
                    }

                    img{
                        width: 40%;
                    }
                }
            }
        }
    }
}


h2{
    @include Article_Title;
    line-height: 120%;
}

p{
    @include Article_Text;
    line-height: 1.5rem;
}

img{
    @include PictureShadow;
}

</style>