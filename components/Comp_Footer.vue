<template>
    <div class="main">
        <RouterLink to="/">
            <img src="/images/logo.png" alt="logo">
        </RouterLink>
        <div class="main__links">
            <ul>
                <li>Articles</li>
                <li>Triangle des Bermudes</li>
                <li>Triangle du Dragon</li>
                <li>Fosse Mariane</li>
                <li>The Bloop</li>
                <li>Les Cryptides Sous-Marines</li>
                <li>Les Vaisseaux Fantômes</li>
                <li>Mary Celeste</li>
                <li>Les Disparitions de 1968</li>
            </ul>
            <ul>
                <li>Mini-Jeux</li>
                <li>Jeu de Tir</li>
                <li>Flood-It</li>
                <li>Sous-Marin</li>
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
    height: 250px;
}

</style>