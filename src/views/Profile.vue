<script setup>
  import {userProfile} from "@/data/user";
  import {ref} from "vue";

  let isAdminLocal = ref(userProfile.isAdmin)

  function toggleAdmin(){
    isAdminLocal.value = !isAdminLocal.value
  }

</script>

<template>
  <div class="profileWrapper">
    <div class="settings">
      <h1>{{ userProfile.name }}</h1>
      <p>Admin? {{isAdminLocal}}</p>
      <p>Change username</p>
      <p>Change password</p>

      <button @click="toggleAdmin()">Make admin</button>
      <button v-if="isAdminLocal">Add Review</button>
    </div>
  </div>
</template>

<style scoped>
  .profileWrapper{
    position: relative;
    width: 50%;
    margin: 0 auto;
  }

  .settings {
    border: var(--border);
    border-radius: var(--border-radious);
    margin-top: 6rem;
    display: flex;
    flex-direction: column;
  }

  button{
    width: fit-content;
  }
</style>