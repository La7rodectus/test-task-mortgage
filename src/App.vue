<template>
  <div id="nav">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: { // global data needed for App work
    asyncData: ({ store }) => new Promise((resolve) => {
      resolve(store.dispatch('fetchBanks'));
    }),
  }
};
</script>

<style>

body, html {
  margin: 0px;
}

</style>
