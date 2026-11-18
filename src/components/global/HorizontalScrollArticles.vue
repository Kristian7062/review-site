<script setup>
const props = defineProps ({
    articles: Array
})

</script>

<template>
    <div class="horizontalScrollWrapper">
        <div class="newsCards">
            <!-- need to pass in the actual article with :article="article" -->
                <NewsCard v-for="article in props.articles" 
                :key="article.id" 
                :article="article" 
                :type="0" class="newsCard"></NewsCard>
        </div>
    </div>
</template>

<style>
    .newsCards{
        display: flex;
        flex-direction: row;
    }

    .newsCard {
        margin: 1vw;
    }

    .horizontalScrollWrapper{
        
    }

</style>