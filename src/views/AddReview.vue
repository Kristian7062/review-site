<script setup>
    import { userProfile } from '@/data/user';

</script>

<template>
    <div class="addReviewWrapper">
        <h1>Add a review</h1>
        <form>
            <label for="title">Review Title</label>
            <input id="title" type="text" required v-model="title">
            <label for="content">Review Content</label>
            <textarea id="content" type="text" required v-model="content">Enter text here</textarea>
            <label for="title">Review Title</label>
            <input id="title" type="text" required v-model="title">

            <p>Author: {{ userProfile.name }}</p>
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