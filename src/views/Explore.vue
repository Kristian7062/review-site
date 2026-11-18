<script setup>
//.json's need to be passed in per component apparently
import Line from '@/components/global/Line.vue';
import articles from '@/articles/articles.json';
import HorizontalScrollArticles from '@/components/global/HorizontalScrollArticles.vue';
import LatestNews from '@/components/explore/LatestNews.vue';

</script>

<template>
    <h1>Explore</h1>

    <ExploreFeatured class="exploreFeatured" />

    <Line />
    <LatestNews />
    <Line />

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
        justify-content: center;
        justify-items: center;
        margin: 0 auto;
        width: 80%;
        gap: 3vw;
    }

     .exploreFeatured {
        margin: 0 auto;
        width: 80%;
     }

     /* *, *::before, *::after {
    box-sizing: border-box;
    } */
</style>
