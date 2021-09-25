<template>
  <div class="page-container">
    <app-header />
    <div class="app-bank-edit-container">

      <h1> Mortgage calculator </h1>
      <h2>Edit {{ bank.bankName }}</h2>

      <div class="app-bank-edit-input-pair-cell">
        <p> Bank name </p>
        <div class="app-bank-edit-input-pair-cell-inputs-wrapper">
          <input type="text" placeholder="Name of the bank"
            :disabled="!bankNameChecked"
            v-model="bank.bankName"
          >
          <input type="checkbox" v-model="bankNameChecked">
        </div>
      </div>

      <div class="app-bank-edit-input-pair-cell">
        <p> Interst rate </p>
        <div class="app-bank-edit-input-pair-cell-inputs-wrapper">
          <input type="number" placeholder="Interst rate"
            :disabled="!interstRateChecked"
            v-model.number="bank.interstRate"
          >
          <input type="checkbox" v-model="interstRateChecked">
        </div>

      </div>

      <div class="app-bank-edit-input-pair-cell">
        <p> Max loan </p>
        <div class="app-bank-edit-input-pair-cell-inputs-wrapper">
          <input type="number" placeholder="Max loan"
            :disabled="!maxLoanChecked"
            v-model.number="bank.maxLoan"
          >
          <input type="checkbox" v-model="maxLoanChecked">
        </div>
      </div>

      <div class="app-bank-edit-input-pair-cell">
        <p> Min down payment </p>
        <div class="app-bank-edit-input-pair-cell-inputs-wrapper">
          <input type="number" placeholder="Min down payment"
            :disabled="!minDownPaymentChecked"
            v-model.number="bank.minDownPayment"
          >
          <input type="checkbox" v-model="minDownPaymentChecked">
        </div>
      </div>

      <div class="app-bank-edit-input-pair-cell">
        <p> Loan term </p>
        <div class="app-bank-edit-input-pair-cell-inputs-wrapper">
          <input type="number" placeholder="Loan term"
            :disabled="!loanTermChecked"
            v-model.number="bank.loanTerm"
          >
            <input type="checkbox" v-model="loanTermChecked">
        </div>
      </div>
      <p id="submit-form-button">
        <button @click="submitForm" type="button"> submit </button>
      </p>

    </div>
  </div>
</template>

<script>

import wdo from '../utils/wdo.js';
import AppHeader from '../components/AppHeader.vue';

export default {
  name: 'BankEdit',
  components: {
    AppHeader,

  },
  data: () => ({
    bank: Object,
    interstRateChecked: false,
    bankNameChecked: false,
    maxLoanChecked: false,
    minDownPaymentChecked: false,
    loanTermChecked: false,

  }),
  created() {
    this.bank = this.$store.state.banksModule.banks[this.$route.params.name];
  },
  methods: {
    submitForm() {
      console.log(JSON.stringify(this.$data.bank));
      wdo.post('http://localhost:7070/updateBank', JSON.stringify(this.$data.bank));
    },
  }
};
</script>

<style scoped>

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
  width: 100%;
  height: 25px;
}

input[type=text] {
  width: 100%;
  height: 25px;
}

input[type=checkbox] {
  width: 25px;
  height: 25px;
}

.app-bank-edit-container {
  width: 40%;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.app-bank-edit-input-pair-cell {
  display: flex;
  width: 100%;
  flex-direction: column;
}

.app-bank-edit-input-pair-cell-inputs-wrapper {
  display: flex;
  justify-content: center;
}

.app-bank-edit-input-pair-cell-inputs-wrapper > input[type=checkbox] {
  margin: 3px 3px 3px 15px;
}

#submit-form-button {
  width: 100%;
}

#submit-form-button > button {
  width: 100%;
  height: 31px;
}

.page-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>


