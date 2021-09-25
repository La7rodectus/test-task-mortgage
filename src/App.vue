<template>
  <div id="nav">
    <router-view/>
  </div>
</template>

<script>
import someMixin from './mixins/someMixin.js';

export default {
  name: 'App',
  mixins: [someMixin], //global mixins
};
</script>

<style>

</style>
