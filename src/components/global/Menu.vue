<template>
    <nav class="menu">
        <RouterLink to="/"> <img class="logo" src="@/assets/logo.svg" alt="Logo"> </RouterLink>

        <ul class="links">
            <li><RouterLink to="/">Explore</RouterLink></li>
            <li><RouterLink to="/reviews">Reviews</RouterLink></li>
            <li><RouterLink to="/news">News</RouterLink></li>

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
        color: var(--text-light);
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }
    li.active {
        color: black;
        background-color: blueviolet;
    }

    nav li:hover {
        background-color: #ddd;
        color:black;
        box-shadow: 0px 0px 10px white;

    }

    nav a:hover{
        color: black;
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