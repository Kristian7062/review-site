<template>
  <Menu class="menu"></Menu>
  <router-view/>
</template>

<script>

//move the menu import inside main.js if youre gonna reuse it
import Menu from './components/Menu.vue'
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
  margin: 0;
  padding: 0;
  padding-top: 2rem;
}
body{
  background-color: var(--color-bg);
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.menu{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
</style>
