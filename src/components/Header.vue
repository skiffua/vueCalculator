<template>
  <header>
    <div>TheBestCalculator</div>
    <div class="menu-block">
      <ul class="menu">
        <li>
          <router-link to="/" active-class="active-link" exact>Home</router-link>
        <li>
          <router-link to="/history" active-class="active-link">History</router-link>
        </li>
      </ul>
    </div>
    <div class="user-block">
      <div class="user-name">
        Funny user
      </div>
      <div class="logout-element">
        <a href="#"><i class="fas fa-power-off"></i> </a>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">

  @import '../assets/variables';

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    height: 60px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: #373737;
    color: $orange-color;
  }

  .menu {
    display: flex;
    justify-content: space-between;

    li {
      display: inline-block;

      a {
        display: block;
        margin: 0 10px;
        padding: 6px 0;
        text-decoration: none;
        color: inherit;

        &.active-link {
          border-bottom: 1px solid;
        }
      }
    }
  }

  .user-name {
    display: inline-block;
    padding-right: 15px;
    border-right: 1px solid $white-color;
    color: $white-color;

    @media screen and (max-width: 620px) {
      display: none;
    }
  }

  .logout-element {
    display: inline-block;
    padding-left: 15px;
    text-align: center;

    i {
      color: $orange-color;
    }
  }

</style>
