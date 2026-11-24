<script setup>
import articles from '@/articles/reviews.json'

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
             <div class="featuredReviewContent">
                <h3>{{ title }}</h3>
                <small>{{ date }}</small>
            </div>
        </div> 
        <div class="featuredLine"></div>

        <div class="latestReviews">
            <h3>Latest Reviews</h3>
            <ReviewCard :article="articles[0]" />
            <ReviewCard :article="articles[1]" />
            <ReviewCard :article="articles[2]" />
        </div>

    </div>
</template>


<style scoped>

    .featuredWrapper {
        display: grid;
        grid-template-columns: 1.5fr 0.01fr 1fr;
    }

    .featuredReview {
        color: var(--text-light);
        border: var(--border);
        border-radius: var(--border-radious);
        overflow: hidden;
        color: var(--text-light);
        background-position: center;
        background-size: cover;
        margin: 1vw;        


        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        background-image: linear-gradient(transparent, rgba(0,0,0,1));
    }

    .featuredLine{
        border-left: 1px solid #fff;
        width: 2px;
        height: 70%;
        margin: auto 0;

    }

    .featuredReviewContent {
        padding: 10px;
    }

    .latestReviews {
        display: flex;
        flex-direction: column;
        margin: 1vw;        
        padding: 0;
    }

    .latestReviews > *{
        margin: 4px;
    }

    .latestReviews h3{
        padding: 0;
        margin: 0;
        margin-bottom: 1vw;
        color: var(--text-light);
        font-size: 34px;
        
        }
</style>