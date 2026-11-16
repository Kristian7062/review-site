<template>
  <h1>{{ title }}</h1>
  <teleport to=".modals" v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">Sign up now</a>
        <a href="#">more info</a>
      </template>
      <h1>Giveaway</h1>
      <p>Bottom text</p>
    </Modal>
  </teleport>

  <div v-if="showModalTwo">
    <Modal @close="toggleModalTwo">
      <h1>Giveaway 2</h1>
      <p>Bottom text 2</p>
    </Modal>
  </div>
  <button @click="toggleModal">Open modal</button>
  <button @click="toggleModalTwo">Open modal</button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    Modal
  },
  data(){
    return{
      title: 'My First Vue app',
      header: 'Header',
      text: 'text',
      showModal: false,
      showModalTwo:false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo
    }

  }
}
</script>

<style>
#app, .modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(81, 115, 146);
  margin-top: 60px;
}

body {
  background-color: #2c3e50;
}
.active {
  background-color: aquamarine;
}
</style>
