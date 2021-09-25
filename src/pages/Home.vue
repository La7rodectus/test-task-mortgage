<template>
  <div class="home">
    <router-link to="/addBank">addBank</router-link>
    <AppCalculator msg="msg arg"/>
  </div>
</template>

<script>

import AppCalculator from '../components/AppCalculator.vue';

export default {
  name: 'Home',
  components: {
    AppCalculator,
  },
  mounted() {
    console.log(this.$store.state.main);
  },
};
</script>
