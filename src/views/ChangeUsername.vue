<script setup>
    import { userProfile } from '@/data/user';
</script>

<template>
    <div class="addReviewWrapper">
        <h1>Change your username</h1>
        <form>
            <p>Current username: {{ userProfile.name }}</p>

            <label for="newUser">New Username</label>
            <input id="newUser" type="text">

            
            <label for="accEmail">Account email</label>
            <input id="accEmail" type="text">

            <div class="buttons">
                <button type="submit">Submit</button>
                <router-link to="/Profile"><button>Cancel</button> </router-link>
            </div>
        </form>
    </div>
</template>

<style>
    .addReviewWrapper{
        position: relative;
        width: 50%;
        margin: 0 auto;
        color: var(--text-light);
        border: var(--border);
        border-radius: var(--border-radious);
    }

    .addReviewWrapper h1{
        width: 80%;
        margin: 1rem auto;
    }

    .addReviewWrapper form{
        width: 60%;
        margin: 0 auto;
    }

    form{
        display: flex;
        flex-direction: column;
    }
    form >*{
        padding: 1rem 0 0 0;
    }

    #content{
        height: 100px;
        resize: vertical;
    }
    .buttons{
        margin: auto;
    }
    .buttons >*{
        margin: 2rem;
    }
</style>