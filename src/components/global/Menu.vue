<script setup>
    import { ref, computed } from 'vue'
    import { useRoute } from 'vue-router';

    const page = useRoute()

    const currentPath = ref(window.location.hash)

    window.addEventListener('hashchange', () => {
    currentPath.value = window.location.hash
    console.log(currentView);
    
    })

    const currentView = computed(() => {
    return routes[currentPath.value.slice(1) || '/'] || NotFound
    console.log(currentView);
    
    })
</script>

<template>
    <nav class="menu">
        <RouterLink to="/"> <img class="logo" src="@/assets/logo.svg" alt="Logo"> </RouterLink>

        <ul class="links">
            <li><RouterLink to="/Explore" >Explore</RouterLink></li>
            <li><RouterLink to="/Reviews">Reviews</RouterLink></li>
            <li><RouterLink to="/News">News</RouterLink></li>

        </ul>
        
        <RouterLink to="/"> <img src="@/assets/user.svg" alt="Profile picture" class="profile" /> </RouterLink>
    </nav>
</template>

<script>
export default {
    name: 'Menu'
}


</script>

<style scoped>
    .menu {
        background-color: var(--color-primary);
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        overflow: hidden;
        height: 42px;
        border-bottom-left-radius: var(--border-radious);
        border-bottom-right-radius: var(--border-radious);
    }
    .menu ul{
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
        background-color: var(--color-primary);
    }

    .menu li.logo{
        float: left;
    }

    .menu li {
        float: center;
    }
    .menu a {
        display: block;
        color: var(--text-light);
        text-align: center;
        padding: 14px 25px;
        text-decoration: none;
        letter-spacing: 1px;
        font-size: 17px;
        font-weight: 500;

    }

    nav li:hover {

    }
    
    a:hover,
    a.router-link-active {
        background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(189, 189, 189, 0.7) 100%
    );
        color:black;
        box-shadow: 0px 0px 10px white;
    }

    nav a:hover{
        color: black;
    }

    .profile{
        margin: 0;
        padding: 0;
        border-radius: 15px;
        scale: 70%;
    }
    .profile:hover{
        box-shadow: 0px 0px 10px white;
    }

    
    .logo:hover{
        box-shadow: 0px 0px 10px white;
    }

    .logo {
        padding: 0 20px 7px 20px;
    }

    
</style>