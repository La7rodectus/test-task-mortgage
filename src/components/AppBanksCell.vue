<template>
  <div class="app-banks-cell-container">
    <h1> {{ bank.bankName }} </h1>
    <p>
      {{ bank.bankName }}
    </p>
    <router-link :to="{ name: 'editBank', params: { name: bank.bankName} }" >edit</router-link>
  </div>
</template>

<script>
export default {
  name: 'AppBanksCell',
  props: {
    bank: Object,

  },
  computed: {

  },
  mounted() {
  },
  methods: {
    asyncData: ({ store }) => new Promise((resolve) => {
      resolve(store.dispatch('isUniqueBankName', {
        name: 'some name',
      }));
    }),

  }
};
</script>


<style scoped>

.app-banks-cell-container {
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: row;
}


</style>
