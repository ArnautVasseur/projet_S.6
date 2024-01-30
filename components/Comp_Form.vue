<template>
    <div class="form" :class="{ slide: isActive }">
        <div class="form__signin box">
            <h2>Vous avez déjà un compte ?</h2>
            <Comp_Button @click="SwitchConnexion" class="form__signin__btn">Connexion</Comp_Button>
        </div>
        <div class="form__signup box">
            <h2>Vous n'avez pas de compte ?</h2>
            <Comp_Button @click="SwitchConnexion" class="form__signup__btn">Inscription</Comp_Button>
        </div>
        <div class="formBx">
            <div class="formBx__inscription">
                <form>
                    <h2>Inscription</h2>
                    <div class="formBx__inscription__input">
                        <input placeholder=" " type="text">
                        <span>Pseudonyme</span>
                    </div>
                    <div class="formBx__inscription__input">
                        <input placeholder=" " type="password">
                        <span>Mot de passe</span>
                    </div>
                    <Comp_Button>INSCRIPTION</Comp_Button>
                </form>
            </div>
            <div class="formBx__connection">
                <form>
                    <h2>Connexion</h2>
                    <div class="formBx__connection__input">
                        <input placeholder=" " type="text">
                        <span>Pseudonyme</span>
                    </div>
                    <div class="formBx__connection__input">
                        <input placeholder=" " type="password">
                        <span>Mot de passe</span>
                    </div>
                    <Comp_Button>CONNEXION</Comp_Button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isActive: ref(false),
        };
    },
    methods: {
        SwitchConnexion() {
            this.isActive = !this.isActive
        },
    },
};
</script>

<style scoped lang="scss">
.form{
    color: white;
    position: relative;
    width: 800px;
    height: 400px;
    background: $purple-color;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 1s ease-in-out;
    animation: SlideInTop 1s ease-out;

    .formBx{
        position: absolute;
        width: 350px;
        height: 480px;
        background: $primary-color;
        left: 50px;
        z-index: 1000;
        transition: 1s;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        overflow: hidden;
        box-shadow: 0px 0px 20px $purple-color;

        form{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 30px;

            h2{
                font-size: $desktop-h2;
                text-transform: uppercase;
            }
        }

        &__connection{
            opacity: 1;
            position: absolute;
            top: 50%;
            transform: translate(0, -50%);
            transition: all 1s ease-in-out;

            &__input{
            width: 100%;
            color: white;
            letter-spacing: 1.5px;
            position: relative;
            display: flex;
            justify-content: center;
            align-content: center;
            align-items: center;

                input{
                    width: 100%;
                    border-radius: 5px;
                    padding: 10px;
                    font-size: $desktop-large;
                    border: 1px solid white;
                    background: $primary-color;
                    outline: none;
                    font-weight: 200;
                    color: white;
                    letter-spacing: 1.5px;
                }

                input:focus ~ span,
                input:not(:placeholder-shown) ~ span{
                    color: lighten($purple-color, 25%);
                    transition: 0.5s;
                    top: -22%;
                    left: 10px;
                    padding: 5px;
                    font-size: $desktop-caption;
                    background: $primary-color;
                }

                span{
                    position: absolute;
                    left: 0;
                    top: 30%;
                    padding-left: 10px;
                    color: $text_button-color;
                    text-transform: uppercase;
                    pointer-events: none;
                }
            }   
        }

        &__inscription{
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            position: absolute;
            bottom: 100%;
            transition: all 1s ease-in-out;

            &__input{
            width: 100%;
            color: white;
            letter-spacing: 1.5px;
            position: relative;
            display: flex;
            justify-content: center;
            align-content: center;
            align-items: center;

                input{
                    width: 100%;
                    border-radius: 5px;
                    padding: 10px;
                    font-size: $desktop-large;
                    border: 1px solid white;
                    background: $primary-color;
                    outline: none;
                    font-weight: 200;
                    color: white;
                    letter-spacing: 1.5px;
                }

                input:focus ~ span,
                input:not(:placeholder-shown) ~ span{
                    color:lighten($deep_blue-color, 40%);
                    transition: 0.5s;
                    top: -22%;
                    left: 10px;
                    padding: 5px;
                    font-size: $desktop-caption;
                    background: $primary-color;
                }

                span{
                    position: absolute;
                    left: 0;
                    top: 30%;
                    padding-left: 10px;
                    color: $text_button-color;
                    text-transform: uppercase;
                    pointer-events: none;
                }
            }
        }
    }

    .box{
        position: relative;
        width: 50%;
        height: 100%;
        z-index: 10;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 30px;

        h2{
            color: white;
            font-size: $desktop-h2;
            margin-bottom: 20px;
        }
    }
}

.slide{
    background: $deep_blue-color;

    .formBx{
        left: 400px;
        transition: 1s;
        box-shadow: 0px 0px 15px $deep_blue-color;

        &__inscription{
            opacity: 1;
            bottom: 50%;
            transform: translate(0, 50%);
        }

        &__connection{
            opacity: 0;
            top: 100%;
        }
    }
}

@keyframes SlideInTop{
    0%{
        opacity: 0;
        transform: translateY(50%)
    }
    100%{
        opacity: 1;
        transform: translateY(0%)
    }
}
</style>