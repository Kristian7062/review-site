<script setup>
import articles from '@/articles/articles.json';
import TagsSorter from '../global/TagsSorter.vue';
import {ref, computed} from 'vue'

const currentTag = ref(0)

function onTagChange(tag) {
    console.log(tag.id );
    //needs .value if not it will change the currentTag from a ref obj to a num
    currentTag.value = tag.id
    console.log(currentTag );

}

function filterArticles(article){
    //if the article has a tag that matches the currentTag then return true
    return article.tags.includes(currentTag.value)
}


//computed makes it change on change not on every page render
const filteredArticles = computed(() => 
    //
    articles.filter(filterArticles)
)



</script>

<template>
    <h2>Browse Topics</h2>
    <div class="tagsWrapper">
        <TagsSorter @tagChange="onTagChange" />
    </div>
    <div class="articleCard">
            <ArticleCard v-for="article in filteredArticles" 
            :key=article.id
            :article="article"
            />
    </div>
</template>

<style scoped>
    .tagsWrapper{
        width: var(--pageWidth);
        margin: 0 auto;
    }
</style>