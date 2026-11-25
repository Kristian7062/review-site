<script setup>
import articles from '@/articles/reviews.json';
import BrowseTopic from '@/components/explore/BrowseTopic.vue';

</script>

<template>
    <div class="explorePage">

        <ExploreFeatured class="exploreFeatured" />

        <Line class="line" />
        <LatestNews />
        <Line class="line"/>

        <!--passing in all articles, needs key specified -->

        <BrowseTopic></BrowseTopic>
    </div>
</template>

<style>
    .explorePage{
        padding-top: 3rem;
    }
    h1{
        width: var(--pageWidth);
        color: var(--text-light);
    }

    h2{
        color: var(--text-light);
        width: var(--pageWidth);
        margin: 0 auto;
        font-size: var(--h2Size);
    }
     .articleCard {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-content: center;
        justify-items: center;
        margin: 0 auto;
        width: var(--pageWidth);
        gap: 3vw;
    }

     .exploreFeatured {
        margin: 0 auto;
        width: var(--pageWidth);
     }

     .line{
        padding: 3rem;
     }

     /* *, *::before, *::after {
    box-sizing: border-box;
    } */
</style>
