<template>
  <div class="page-container">
    <app-header />
    <div class="app-add-bank-container">

      <h1> Add new bank </h1>

      <div class="app-bank-edit-input-pair-cell">
        <p> Bank name </p>
        <div class="app-bank-edit-input-pair-cell-inputs-wrapper">
          <input type="text" placeholder="Name of the bank"
            v-model="bankName"
          >
        </div>
      </div>

      <div class="app-bank-edit-input-pair-cell">
        <p> Interst rate </p>
        <div class="app-bank-edit-input-pair-cell-inputs-wrapper">
          <input type="number" placeholder="Interst rate"
            v-model.number="interstRate"
          >
        </div>

      </div>

      <div class="app-bank-edit-input-pair-cell">
        <p> Max loan </p>
        <div class="app-bank-edit-input-pair-cell-inputs-wrapper">
          <input type="number" placeholder="Max loan"
            v-model.number="maxLoan"
          >
        </div>
      </div>

      <div class="app-bank-edit-input-pair-cell">
        <p> Min down payment </p>
        <div class="app-bank-edit-input-pair-cell-inputs-wrapper">
          <input type="number" placeholder="Min down payment"
            v-model.number="minDownPayment"
          >
        </div>
      </div>

      <div class="app-bank-edit-input-pair-cell">
        <p> Loan term </p>
        <div class="app-bank-edit-input-pair-cell-inputs-wrapper">
          <input type="number" placeholder="Loan term"
            v-model.number="loanTerm"
          >
        </div>
      </div>
      <p id="submit-form-button">
        <button @click="submitForm" type="button"> submit </button>
      </p>

    </div>
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
    bankName: null,
    interstRate: null,
    maxLoan: null,
    minDownPayment: null,
    loanTerm: null,
    interstRateChecked: false,
    bankNameChecked: false,
    maxLoanChecked: false,
    minDownPaymentChecked: false,
    loanTermChecked: false,

  }),
  methods: {
    submitForm() {
      const postData = {
        bankName: this.bankName,
        interstRate: this.interstRate,
        maxLoan: this.maxLoan,
        minDownPayment: this.minDownPayment,
        loanTerm: this.loanTerm,
      };
      console.log(JSON.stringify(postData));
      this.$store.dispatch('addBank', { postData });
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

.app-add-bank-container {
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


