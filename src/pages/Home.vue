<template>
  <div class="app-home-container">
    <app-header />
    <app-calculator />
  </div>
</template>

<script>

import AppCalculator from '../components/AppCalculator.vue';
import AppHeader from '../components/AppHeader.vue';

export default {
  name: 'Home',
  components: {
    AppCalculator,
    AppHeader,

  },
  mounted() {
    console.log(this.$store.state.banksModule);
  },

};
</script>

<style scoped>

.app-home-container {

}

</style>


