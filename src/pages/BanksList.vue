<template>
  <div class="about">
    <app-header />
    <app-banks />
  </div>
</template>

<script>
import AppBanks from '../components/AppBanks.vue';
import AppHeader from '../components/AppHeader.vue';


export default {
  name: 'BanksManaging',
  components: {
    AppHeader,
    AppBanks,

  },

};
</script>
