<template>
    <nav class="menu">
    <img src="@/assets/logo.png" alt="Logo" />

        <ul class="links">
            <li><RouterLink to="/">Explore</RouterLink></li>
            <li><RouterLink to="/reviews">Reviews</RouterLink></li>
            <li><RouterLink to="/news">News</RouterLink></li>

        </ul>
        <a href="#">profile</a>

    </nav>
</template>

<script>
// import img from "./assets/Logo.png"
export default {
    name: 'Menu'
}

</script>

<style scoped>
    .menu {
        background-color: aqua;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        overflow: hidden;
        height: 42px;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }
    .menu ul{
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
        background-color: bisque;
        overflow: hidden;
    }

    .menu li.logo{
        float: left;
    }

    .menu li {
        float: center;
    }
    .menu a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }
    li.active {
        color: black;
        background-color: blueviolet;
    }

    nav a:hover {
        background-color: #ddd;
        color:black;
    }

    
</style>