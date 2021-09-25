<template>
  <div class="app-bank-edit-container">
    <app-header />
    <h1> Mortgage calculator </h1>
    <p> Edit {{ bank.bankName }} </p>
  </div>
</template>

<script>

import AppHeader from '../components/AppHeader.vue';

export default {
  name: 'BankEdit',
  components: {
    AppHeader,

  },
  data: () => ({
    bank: Object,

  }),
  created() {
    this.bank = this.$store.state.banksModule.banks[this.$route.params.name];
  },

};
</script>

<style scoped>

.app-bank-edit-container {

}

</style>


