<template>
    <div>
        <Header />
        <Calculator />
    </div>
</template>
<script>

import Header from '../components/Header.vue';
import Calculator from '../components/Calculator.vue';

export default {

  name: 'Home',

  components: {
    Header,
    Calculator,
  },

};

</script>

<style scoped>

</style>
