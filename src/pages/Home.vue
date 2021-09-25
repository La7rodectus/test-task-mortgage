<template>
  <div class="home">
    <router-link to="/addBank">addBank</router-link>
    <Header msg="msg arg"/>
  </div>
</template>

<script>

import Header from '../components/Header.vue';

export default {
  name: 'Home',
  components: {
    Header,
  },
  mounted() {
    console.log(this.$store.state.main);
  },
};
</script>
