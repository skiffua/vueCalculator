<template>
  <header>
    <div class="header_block">TheBestCalculator</div>
    <div class="header_block menu_block">
      <ul class="menu">
        <li class="active_link">
          <a href="#" >Main</a>
        </li>
        <li>
          <a href="#">History</a>
        </li>
      </ul>
    </div>
    <div class="header_block">
      <div class="user_name">
        Funny user
        </div>
      <div class="logout_element">
      <a href="#"><i class="fas fa-power-off"></i> </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  background-color: #373737;
  height: 60px;
  color: #ff7d20;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
}
.menu_block {
  width: 120px;
}
.menu {
  padding-left: 0px;
  display: flex;
  justify-content: space-between;
}
li {
  display: inline-block;
  padding-bottom: 6px;
  padding-top: 6px;
}
.active_link {
  border-bottom: 1px solid;
}
a {
  text-decoration: none;
  color: inherit;
}
.user_name {
  color: #ffffff;
  padding-right: 15px;
  display: inline-block;
  border-right: 1px solid #ffffff;
}
.logout_element {
  display: inline-block;
  padding-left: 15px;
  text-align: center;
}
</style>
