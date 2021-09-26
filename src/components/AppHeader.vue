<template>
  <div class="app-header-container">
    <div class="nav-div" @click="goTo('/addBank')">
      <router-link to="/addBank">Add bank</router-link>
    </div>
    <div class="nav-div" @click="goTo('/editBank')">
      <router-link to="/editBank">Edit banks</router-link>
    </div>
    <div class="nav-div" @click="goTo('/')" >
      <router-link to="/">Mortgage calculator</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  methods: {
    goTo(route) {
      this.$router.push(route);
    }
  }
};
</script>


<style scoped>

.app-header-container {
  width: 100%;
  height: 150px;
  background-color: brown;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.nav-div {
  width: 25%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.nav-div:hover {
  background-color: saddlebrown;
}

a {
  text-decoration: none;
  cursor: pointer;
  color: orange;
}

a:visited { color:orange; }
a:hover { color:orange; }
a:focus { color:orange; }
a:active { color:orange; }

</style>
