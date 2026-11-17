<script setup>
import articles from '../articles/articles.json'

const featuredReview = 0

const title = articles[featuredReview].title
const date = articles[featuredReview].date
const content = articles[featuredReview].content
const image = articles[featuredReview].image

</script>
// https://www.merge-json-files.com/blog/how-to-add-an-image-in-json

<!-- <div class="hero" :style="{ backgroundImage: `url(${article.image})` }"></div> -->
<template>
   <div class="featuredWrapper"> 
        <!-- needs inline style because bg image needs url and variables are strings -->
        <div class="featuredReview" :style="{ backgroundImage: `url(${image})` }">
            <!-- <img :src="image" :alt="title"> -->
            <h3>{{ title }}</h3>
            <small>{{ date }}</small>
        </div>

        <div class="latestReviews">
            <ReviewCardFeatured :article="articles[0]" />
        </div>

    </div>
</template>


<style scoped>

    .featuredWrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 0 auto;
        width: 80%;
    }

    .featuredReview {
        color: var(--text-light);
        border: var(--border);
        border-radius: var(--border-radious);
        overflow: hidden;
        color: var(--text-light);
        margin: 1vw;
        width: 100%;
        height: 25vw;
        background-position: center;
        background-size: cover;
    }

    .latestReviews {
    }

</style>