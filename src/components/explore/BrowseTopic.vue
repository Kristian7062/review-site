<script setup>
import articles from '@/articles/articles.json';
import TagsSorter from '../global/TagsSorter.vue';

</script>

<template>
    <h1>Browse Topics</h1>
    <TagsSorter></TagsSorter>
    <div class="articleCard">
            <ArticleCard v-for="article in articles" 
            :key=article.id
            :article="article"
            />
    </div>
</template>

<style>

</style>