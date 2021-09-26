<template>
  <div class="app-banks-cell-container">
    <h2> {{ bank.bankName }} </h2>
    <div class="cell-button-container">
      <button @click="linkToBank"> Edit </button>
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
    linkToBank() {
      this.$router.push({ name: 'editBank', params: { name: this.bank.bankName } });
    },
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
  background-color: cadetblue;
  justify-content: space-between;
  margin: 15px;
}

.app-banks-cell-container > h2 {
  padding-left: 15px;
}

.cell-button-container {
  display: flex;
  flex-direction: column;
  width: 140px;
}

.cell-button-container > button {
  flex-grow: 2;
  margin: 5px;
}


</style>
