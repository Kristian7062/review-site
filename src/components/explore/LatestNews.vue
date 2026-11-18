<script setup>
import HorizontalScrollArticles from '../global/HorizontalScrollArticles.vue';
import articles from '@/articles/news.json'

</script>

<template>
    <div>
        <h2>Latest News</h2>
        <HorizontalScrollArticles :articles="articles" />
</div>
</template>

<style scoped>
    h2 {
        color: var(--text-light);
    }
</style>