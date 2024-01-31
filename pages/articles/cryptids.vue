<template>
    <div class="main">
        <div class="main__header">
            <div class="main__header__logo">
                <RouterLink to="/">
                    <img class="logo" src="/icons/user.png" alt="account_icon">
                </RouterLink>
            </div>
            <nav class="main__header__links">
                <RouterLink to="/skilltree">
                    <Comp_NavButton>Arbre de Compétences</Comp_NavButton>
                </RouterLink>
                <div class="dropdown">
                    <RouterLink to="/articles">Articles</RouterLink>
                    <ul>
                        <li><RouterLink to="/articles/">1</RouterLink></li>
                        <li><RouterLink to="/articles/">2</RouterLink></li>
                        <li><RouterLink to="/articles/">3</RouterLink></li>
                        <li><RouterLink to="/articles/">4</RouterLink></li>
                        <li><RouterLink to="/articles/">5</RouterLink></li>
                    </ul>
                </div>
                <!-- <div class="dropdown_games">
                    <Comp_NavButton>Jeux</Comp_NavButton>
                </div>
                <div class="dropdown_games_content">
                    <RouterLink to="/">Link 1</RouterLink>
                    <RouterLink to="/">Link 2</RouterLink>
                    <RouterLink to="/">Link 3</RouterLink>
                </div> -->
                <RouterLink to="/authentification">
                    <img class="icon" src="/icons/user.png" alt="account_icon">
                </RouterLink>
            </nav>
        </div>
        <div class="main__presentation"></div>
        <div class="main__article"></div>
        <div class="main__linkgame"></div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.main{
    width: 100vw;
    height: 100vh;

    &__header{
        width: 100%;
        height: 15%;
        background-image: radial-gradient(75% 75% at 50% 50%, #010D50 0%, #030020 100%);
        display: flex;

        &__logo{
            display: flex;
            align-items: center;
            align-content: center;
            justify-content: center;
            width: 15%;
            height: 100%;
        }

        &__links{
            display: flex;
            align-items: center;
            align-content: center;
            justify-content: end;
            width: 85%;
            height: 100%;
            gap: 50px;
        }
    }
}

.dropdown{
    list-style: none;
    color: white;
    font-family: $montserrat, "sans-serif";

    ul{ 
        display: none;
        position: absolute;
        overflow: auto;
        width: 17em;
        background-color: $purple-color;
        li{
          float: none;
          border-bottom: 1px solid darken($purple-color, 2%);
        }
    }

    a {
      position: relative;

      &:hover ul{ 
            display: block; 
        }
    }

    
  }


</style>