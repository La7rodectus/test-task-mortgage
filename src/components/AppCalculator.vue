<template>
  <div class="calculator-container">
    <h1> Mortgage calculator </h1>
    <div class="calculator-inputs-container">
      <div class="errors-container" >
        <ul>
          <li v-for="err in errors" :key="err">
            {{ err }}
          </li>
        </ul>
      </div>
      <p> Your Bank </p>
      <select v-model="selectedBankName" name="bank-select">
        <option disabled selected value=""> please, choose the bank </option>
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
      <p id="resault-p"
      >
       Result payment per month: {{ resultPayment }}
      </p>
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
    isErrors() {
      return !this.isFieldsValid().ok;
    },
    selectedBank() {
      return this.$store.getters.getBankByName(this.selectedBankName);
    },
    resultPayment() {
      const { ok } = this.isFieldsValid();
      if (!ok) return '';
      console.log(this.selectedBank);
      const interestRate = this.selectedBank.interstRate;
      const borrowed = this.initialLoan - this.downPayment;
      const n = this.selectedBank.loanTerm;
      const interestRateDiv12 = (interestRate / 12);
      const interestRateDiv12N = (1 + interestRateDiv12) ** n;
      console.log('interestRate', interestRate);
      console.log('borrowed', borrowed);
      console.log('n', n);
      console.log('interestRateDiv12', interestRateDiv12);
      console.log('interestRateDiv12N', interestRateDiv12N);
      const res = ((borrowed * interestRateDiv12 * interestRateDiv12N) /
        (interestRateDiv12N - 1));
      return +res.toFixed(2);
    },
    errors() {
      const { ok, errors } = this.isFieldsValid();
      if (ok) return;
      return errors;
    }
  },
  methods: {
    isFieldsValid() {
      const res = {
        errors: [],
      };
      if (!this.selectedBank || !this.initialLoan || !this.downPayment) {
        res.ok = false;
        return res;
      }
      if (this.selectedBank.maxLoan < this.initialLoan) {
        res.errors.push(
          `Too higth initial loan, it can't be greater than ${this.selectedBank.maxLoan}`
        );
      }
      if (this.selectedBank.minDownPayment > this.downPayment) {
        res.errors.push(`Down payment can't be lower than ${this.selectedBank.minDownPayment}`);
      }
      if (this.initialLoan <= this.downPayment) {
        res.errors.push('Initial loan must be grater than down payment!');
      }
      res.ok = res.errors.length === 0;
      return res;
    }
  }
};
</script>


<style scoped>
.calculator-container {
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
  width: 40%;
  min-width: 250px;

}

.errors-container {
  color: red;
}

#resault-p {
  color: green;
}

.error-color {
  color: red !important;
}

.calculator-inputs-container > input {
  min-width: 100px;
  margin: 0px;
  height: 25px;
}

select {
  min-width: 100px;
  margin: 0px;
  height: 31px;
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
