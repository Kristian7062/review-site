<template>
  <Menu class="menu"></Menu>
  <router-view class="mainContent" />
</template>

<script>

//move the menu import inside main.js if youre gonna reuse it
import Menu from './components/global/Menu.vue'
// import Body from './components/Body.vue'

export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style>
#app {
  padding-top: 2rem;
}
body {
  margin: 0;
  width: 100%;
  background-color: var(--color-bg);
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.menu{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}
</style>
