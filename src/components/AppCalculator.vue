<template>
  <div class="calculator-container">
    <h1> Mortgage calculator </h1>
    <p> Your Bank </p>
    <div class="calculator-inputs-container">
      <select v-model="selectedBankName" name="bank-select">
        <option
          v-for="bank in Object.values($store.getters.getBanks)"
          :key="bank.bankName"  :value="bank.bankName">
          {{ bank.bankName }}
        </option>
      </select>
      <p> Initial loan </p>
      <input v-model.number="initialLoan" type="number" placeholder="Initial loan">
      <p> Down payment </p>
      <input  v-model.number="downPayment" type="number" placeholder="Down payment">
      <p> Result payment per month</p>
      <p> {{ resultPayment }} </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppCalculator',
  data: () => ({
    selectedBankName: null,
    initialLoan: null,
    downPayment: null,

  }),
  computed: {
    resultPayment() {
      const selectedBank = this.$store.getters.getBankByName(this.selectedBankName);
      if (!selectedBank || !this.initialLoan || !this.downPayment) return '';
      if (this.initialLoan <= this.downPayment) {
        return 'Initial loan must be grater than down payment!';
      }
      console.log(selectedBank);
      const interestRate = selectedBank.interstRate;
      const borrowed = this.initialLoan - this.downPayment;
      const n = selectedBank.loanTerm;
      const interestRateDiv12 = (interestRate / 12);
      const interestRateDiv12N = (1 + interestRateDiv12) ** n;
      console.log('interestRate', interestRate);
      console.log('borrowed', borrowed);
      console.log('n', n);
      console.log('interestRateDiv12', interestRateDiv12);
      console.log('interestRateDiv12N', interestRateDiv12N);
      return ((borrowed * interestRateDiv12 * interestRateDiv12N) /
        (interestRateDiv12N - 1)
      );
    }
  },
  methods: {

  }
};
</script>


<style scoped>
.calculator-container {
  width: 100%;
  height: 100%;
  display: flex;
  min-width: 300px;
  min-height: 500px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.calculator-inputs-container {
  display: flex;
  flex-direction: column;

}

.calculator-inputs-container > input {
  min-width: 100px;
  margin: 10px;

}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}

.calculator-bank-container > select {
  width: 100px;
  height: 25px;
}

</style>
