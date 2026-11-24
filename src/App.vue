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
