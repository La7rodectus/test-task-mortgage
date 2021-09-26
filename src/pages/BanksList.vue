<template>
  <div class="page-container">
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

<style scoped>

.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

</style>
