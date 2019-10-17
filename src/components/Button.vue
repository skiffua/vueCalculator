<template>
  <button v-button_color="button_goal">{{ button_label }}</button> 
</template>

<script>
import button_color from '../directives/buttonColor'
export default {
    props: ['button_label','button_goal'], 
    directives: {
      button_color,      
    }   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  button {
    font-weight: 400;
    font-size: 1.2em; 
  }
  button:hover {
    cursor: pointer;
    filter: brightness(95%);
  }
  button:focus {
    outline:0;
  }
</style>
