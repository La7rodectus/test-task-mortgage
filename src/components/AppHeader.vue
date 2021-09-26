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

.app-footer-container {
  width: 100%;
  height: 150px;
  background-color: brown;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.app-footer-container > a {
  margin: 20px;
  text-decoration: none;
  cursor: pointer;
}

.app-footer-container > a:visited { color:green; }
.app-footer-container > a:hover { color:green; }
.app-footer-container > a:focus { color:#000; }
.app-footer-container > a:hover, .navBtn:active { color:#000; }

</style>
