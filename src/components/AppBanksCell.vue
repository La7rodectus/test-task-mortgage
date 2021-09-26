<template>
  <div class="app-banks-cell-container">
    <h1> {{ bank.bankName }} </h1>
    <div class="cell-button-container">
      <router-link :to="{ name: 'editBank', params: { name: bank.bankName} }" >
        Edit
      </router-link>
      <button @click="removeBank"> Remove </button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AppBanksCell',
  props: {
    bank: Object,

  },
  methods: {
    removeBank() {
      this.$store.dispatch('removeBank', { bankName: this.bank.bankName });
    }
  }
};
</script>


<style scoped>

.app-banks-cell-container {
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
}

.cell-button-container {
  display: flex;
  flex-direction: column;
}

.cell-button-container > button {
  width: 100%;

}

.cell-button-container > a {
  display: flex;
  flex-direction: column;
}

</style>
