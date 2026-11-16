<template>
  <h1>test</h1>
  <Menu></Menu>
  <router-view/>
</template>

<script>
import Menu from './components/Menu.vue'
// import Body from './components/Body.vue'

export default {
  name: 'App',
  components: {
    Menu
  }
  // data() {
  //   return {
  //     currentPage: 'explore'
  //   }
  // },
  // methods: {
  //   changePage(page) {
  //     this.currentPage = page
  //   }
  // }
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
}
</style>
