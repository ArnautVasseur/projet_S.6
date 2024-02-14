<template>
    <div class="main">
        <RouterLink to="/">
            <img src="/images/logo.png" alt="logo">
        </RouterLink>
        <div class="main__links">
            <ul>

                <li>
                    Articles
                </li>

                <li>
                    <RouterLink to="/articles/bermudes">
                        Triangle des Bermudes
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="/articles/dragon">
                        Triangle du Dragon
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="/articles/marianatrench">
                        Fosse Mariane
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="/articles/bloop">
                        The Bloop
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="/articles/cryptids">
                        Les Cryptides Sous-Marines
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="/articles/ghostships">
                        Les Vaisseaux Fantômes
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/articles/maryceleste">
                        Mary Celeste
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="/articles/1968">
                        Les Disparitions de 1968
                    </RouterLink>
                </li>
            </ul>
            <ul>
                <li>
                    Mini-Jeux
                </li>
                <li>
                    <RouterLink to="/games/aimtraining">
                        Jeu de Tir
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/games/aimtraining">
                        Flood-It
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/games/aimtraining">
                        Sous-Marin
                    </RouterLink>
                </li>
                <li>Jeu de mémoire</li>
            </ul>
            <ul>
                <li>Autres</li>
                <li>Page d'Accueil</li>
                <li>Arbre de Compétence</li>
                <li>Inscription / Connexion</li>
                <li>À propos</li>
            </ul>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>

a{
    all: unset;
}

.main{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: $primary-color;
    color: white;
    padding: 50px;

    &__links{
        width: 70%;
        display: flex;
        justify-content: space-around;

        ul{
            list-style: none;
            padding: 10px;
            border-left: 2px solid $teal-color;
            height: fit-content;

            li{
                padding: 10px;
                transition: 200ms ease-in-out;
            }

            li:first-child{
                font-size: $desktop-large;
                font-weight: 600;
                margin-bottom: 20px;
            }

            li:hover{
                cursor: pointer;
                background: rgb(182, 234, 255);
                color: black;
            }
        }
    }   
}

img{
    width: 250px;
}

</style>