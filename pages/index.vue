<template>
    <div class="container">
        <img class="background" draggable="false" src="/images/jellyfish.gif" alt="jellyfish">
        <div class="container__content">
            <h1>Deep Dive Discovery</h1>
            <div class="container__content__box">
                <div class="container__content__box__1">
                    <img class="logo" src="/images/logo.png" alt="logo">
                </div>

                <div class="container__content__box__2">
                    <p>Venez découvrir les fonds marins et ses mystères irrésolus. <br/><br/>Un site web interactif engageant où vous débloquez les articles grâce à des mini-jeux rapides. <br/><br/> Plongez dès maintenant dans l'expérience mystérieuse et intrigante des abysses où vous apprendrez simplement et à votre choix les sujets qui peuvent vous intéresser.</p>
                    <RouterLink to="/authentification">
                        <Comp_Button>Commencer</Comp_Button>
                    </RouterLink>
                </div>
            </div>
            
            
        </div>
    </div>
</template>

<script>

</script>

<style scoped lang="scss">

// .container{
//     background-image: url('/images/jellyfish.gif');
//     background-size: cover;
//     background-position-y: center;
//     background-repeat: no-repeat;
//     height: 100vh;
//     padding:0;
//     margin:0;
// }

.container{
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: rgba($purple-color, 15%);

    &__content{
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        padding: 100px;

        h1{
            font-size: $desktop-h1;
            font-weight: 500;
            color: $light_blue-color;
            text-align: center;
            animation: fadeIn ease-in-out 1s;
            margin-bottom: 100px;
        }

        &__box{
            display: flex;
            align-items: center;
            
            &__1{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 50%;
                animation: slideRight ease-in-out 1s;
            }

            &__2{
                display: flex;
                flex-direction: column;
                justify-content: center;
                gap: 50px;
                color: white;
                line-height: 1.5rem;
                text-align: center;
                align-items: center;
                width: 50%;
                backdrop-filter: blur(10px);
                @include PictureShadow;
                border-radius: 20px;
                padding: 40px;
                animation: slideLeft ease-in-out 1s;

                p{
                    font-size: $desktop-large;
                }
            }
        }
    }
}

.background{
    opacity: 30%;
    width: 100%;
    transform: translateY(-10%);
    user-select: none;
    z-index: -1;
}

.logo{
    width: 350px;
}

@keyframes slideLeft{
    0%{
        transform: translateX(50px);
        opacity: 0;
    }
    100%{
        transform: translateX(0px);
        opacity: 1;
    }
}

@keyframes slideRight{
    0%{
        transform: translateX(-50px);
        opacity: 0;
    }
    100%{
        transform: translateX(0px);
        opacity: 1;
    }
}

@keyframes fadeIn{
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

</style>