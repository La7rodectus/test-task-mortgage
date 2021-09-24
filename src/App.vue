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
  asyncData({ storage }) {
    
  }
};
</script>

<style>
#app {

}
</style>
