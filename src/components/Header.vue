<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input id="someBTN" type="button" value="test" @click="test">
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String,
  },
  methods: {
    asyncData: ({ store }) => new Promise((resolve) => {
      console.log('await storage.dispatch');
      resolve(store.dispatch('fetchBanks'));
    }),
    test() {
      //console.log(this.$store.state);
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
