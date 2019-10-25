<template>
  <div id="app">
    <Header />
    <Calculator />
  </div>
</template>

<script>
  import Header from "./components/Header";
  import Calculator from './components/Calculator';

  export default {
    name: "app",
    components: {
      Header,
      Calculator,
    },
  };
</script>

<style>
  @import '~normalize.css/normalize.css';

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

</style>
