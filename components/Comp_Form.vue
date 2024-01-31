<template>
    <div class="form" :class="{ slide: isActive }">
        <div class="form__signin box">
            <h2>Vous avez déjà un compte ?</h2>
            <Comp_Button @click="Switchlogin" class="form__signin__btn">Connexion</Comp_Button>
        </div>
        <div class="form__signup box">
            <h2>Vous n'avez pas de compte ?</h2>
            <Comp_Button @click="Switchlogin" class="form__signup__btn">Inscription</Comp_Button>
        </div>
        <div class="formBx">
            <div class="formBx__inscription">
                <form @submit.prevent="inscription">
                    <h2>Inscription</h2>
                    <div class="formBx__inscription__input">
                        <input v-model="inscriptionData.username" placeholder=" " type="text">
                        <span>Pseudonyme</span>
                    </div>
                    <div class="formBx__inscription__input">
                        <input v-model="inscriptionData.password" placeholder=" " type="password">
                        <span>Mot de passe</span>
                    </div>
                    <Comp_Button>INSCRIPTION</Comp_Button>
                </form>
            </div>
            <div class="formBx__connection">
                <form @submit.prevent="login">
                    <h2>Connexion</h2>
                    <div class="formBx__connection__input">
                        <input v-model="loginData.username" placeholder=" " type="text">
                        <span>Pseudonyme</span>
                    </div>
                    <div class="formBx__connection__input">
                        <input v-model="loginData.password" placeholder=" " type="password">
                        <span>Mot de passe</span>
                    </div>
                    <Comp_Button>Connexion</Comp_Button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import {API} from "../utils/axios"
import { ref } from 'vue';
import { useGlobalStore } from '../stores/global'

// Accéder au store global
const globalStore = useGlobalStore()

// Fonction pour définir le token
const setToken = (token) => {
  globalStore.setToken(token)
}

const inscriptionData = ref({
  username: '',
  password: '',
});

const loginData = ref({
  username: '',
  password: '',
});

const login = async () => {
  try {
    const response = await API.post('/login', loginData.value);
    // localStorage.setItem('token', JSON.stringify(response.data.userId))
      globalStore.setToken(response.data.token)
    // Optionally, you can reset the form data after successful login
    loginData.value.username = '';
    loginData.value.password = '';
  } catch (error) {
    console.error('Error during login:', error);
  }
};


const inscription = async () => {
  try {
    const response = await API.post('/inscription', inscriptionData.value);

    // Optionally, you can reset the form data after successful submission
    inscriptionData.value.username = '';
    inscriptionData.value.password = '';
  } catch (error) {
    console.error('Error during inscription:', error.message);
  }
};

</script>

<script>
export default {
    data() {
        return {
            isActive: ref(false),
        };
    },
    methods: {
        Switchlogin() {
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
    background: $blue-color;

    .formBx{
        left: 400px;
        transition: 1s;
        box-shadow: 0px 0px 15px $blue-color;

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