<template>
  <div class="app-footer-container">
    <router-link to="/addBank">Add bank</router-link>
    <router-link to="/">Mortgage calculator</router-link>
    <router-link to="/editBank" exact>Edit banks</router-link>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>


<style scoped>


</style>