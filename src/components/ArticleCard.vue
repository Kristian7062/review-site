<script setup>
    const props = defineProps({
        article: Object
    })
</script>
// https://www.merge-json-files.com/blog/how-to-add-an-image-in-json
<template>
    <div class="reviewCard">
        <img :src="article.image" :alt="article.title">
        <h3>{{ article.title }}</h3>
        <small>{{ article.date }}</small>
        <p>{{ article.content }}</p>
    </div>
</template>


<style scoped>

    .reviewCard {
        border: var(--border);
        border-radius: var(--border-radious);
        overflow: hidden;
        width: 20vw;
        color: var(--text-light);
        margin: 1vw;
    }
    .reviewCard img {
        width: 100%;
    }

</style>