<template>
  <div id="app">    
    <Header/>
    <EnvironmentBlock />
  </div>
</template>

<script>
import Header from './components/Header'
import EnvironmentBlock from './components/EnvironmentBlock'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    Header,
    EnvironmentBlock,
    HelloWorld
  }
}
</script>

<style>
body {
  margin: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
}
</style>
