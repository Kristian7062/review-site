<script setup>
//.json's need to be passed in per component apparently
import articles from '../articles/articles.json'
</script>

<template>
    <h1>Explore</h1>

    <ExploreFeatured />

    <!--passing in all articles, needs key specified -->
    <div class="articleCard">
        <ArticleCard v-for="article in articles" 
        :key="article.id"
        :article="article"

        />
    </div>
</template>

<style>
    h1{
        color: var(--text-light);
    }
     .articleCard {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin: 0 auto;
        width: 80%;
     }
</style>
