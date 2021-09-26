<template>
  <div class="app-banks-container">
    <h1> Banks managing </h1>
    <div class="banks-container">
      <app-banks-cell v-for="bank in Object.values($store.getters.getBanks)"
        :key="bank.bankName" :bank="bank" />
    </div>
  </div>
</template>

<script>
import AppBanksCell from './AppBanksCell.vue';

export default {
  name: 'AppBanks',
  components: {
    AppBanksCell,

  },
};
</script>


<style scoped>

.app-banks-container {
  width: 40%;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.banks-container {
  width: 100%;
  min-width: 250px;
  align-items: center;
  display: flex;
  flex-direction: column;
}

</style>
