<template>
    <nav class="header">
        <ul>
            <div class="header__logo">
                <RouterLink to="/">
                    <img class="logo" src="/images/logo.png" alt="logo">
                </RouterLink>
            </div>

            <div class="header__links">
                <li>
                    <RouterLink to="/skilltree">
                        Arbre de Compétences
                    </RouterLink>
                </li>
                <li>
                    <div>
                        Articles
                    </div>
                    <ul>
                        <li><RouterLink to="/articles/bermudes">Triangle des Bermudes</RouterLink></li>
                        <li><RouterLink to="/articles/dragon">Triangle du Dragon</RouterLink></li>
                        <li><RouterLink to="/articles/deadzone">La 'Dead Zone' du golf du Mexique</RouterLink></li>
                        <li><RouterLink to="/articles/marianatrench">Fosse Mariane</RouterLink></li>
                        <li><RouterLink to="/articles/bloop">The Bloop</RouterLink></li>
                        <li><RouterLink to="/articles/cryptids">Les Cryptides sous-marines</RouterLink></li>
                        <li><RouterLink to="/articles/ghostships">Les Vaisseaux Fantômes</RouterLink></li>
                        <li><RouterLink to="/articles/maryceleste">Mary Celeste</RouterLink></li>
                        <li><RouterLink to="/articles/1968">Les disparitions de 1968</RouterLink></li>
                    </ul>
                </li>
                <li>
                    <div>
                        Mini-Jeux
                    </div>
                    
                    <ul>
                        <li><RouterLink to="/games/aimtraining">Jeu de tir</RouterLink></li>
                        <li><RouterLink to="/games/floodit">Flood It</RouterLink></li>
                        <li><RouterLink to="/games/minitas">Sous-marin</RouterLink></li>
                        <li><RouterLink to="/games/memorycards">Jeu de mémoire</RouterLink></li>
                    </ul>
                </li>
                <li>
                    <RouterLink to="/authentification">
                        <img class="icon" src="/icons/user.png" alt="account_icon">
                    </RouterLink>
                </li>
            </div>
        </ul>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">

.header{
    z-index: 1000;
    position: sticky;
    top: 0;
    width: 100%;
    height: 15vh;
    display: flex;
    align-content: center;
    align-items: center;
    backdrop-filter: blur(7px);

    &__logo{
        width: 15%;
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
    }

    &__links{
        width: 85%;
        display: flex;
        justify-content: end;
        align-content: center;
        align-items: center;
        gap: 150px;
        text-transform: uppercase;
        padding: 0px 50px;
    }
}

nav{

    a{
        color: $teal-color;
        display: block;
        text-decoration: none;
        
    }
    ul{
        width: 100%;
        list-style: none;
        color: white;
        display: flex;
        align-content: center;
        align-items: center;

        li{
            font-weight: 600;
            color: $teal-color;

            ul{ 
                padding: 20px;
                display: none;
                position: absolute;
                overflow: hidden;
                width: 450px;
                transform: translateX(-40%);
                background-color: $primary-color;
                text-align: center;
                border-bottom: 10px solid $teal-color;

                li{
                    padding: 10px;
                    display: block;
                    width: 100%;
                    height: 100%;

                    :hover{
                        color: $text_button-color;
                        border-left: 5px solid $text_button-color;
                        transition: 0.2s ease-in-out;
                    }
                }

            

            }
            
            &:hover ul{ 
                display: block; 
            }
        }
    }
}

a{
    all: unset;
    cursor: pointer;
}

.logo{
    width: 100px;
}

.icon{
    width: 40px;
    height: 40px;
}

</style>