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
  data: () => ({

  }),
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

.banks-container {
  width: 60%;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

</style>
