<template>
  <div id="app">
    <navbar> </navbar>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import SideBar from "./views/Dashboards.vue";
export default {
  components: {
    SideBar,
    Navbar,
  },
  name: "App",
};
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
}
body {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
</style>
