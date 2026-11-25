<script setup>
    import { useRoute, RouterLink } from 'vue-router'
    import article from '../articles/reviews.json'

    const route = useRoute()
    const id = Number(route.params.id)
    const currentArticle = article[route.params.id]
    

</script>

<template>

  <div class="reviewPageWrapper">

    <div class="reviewPageImgWrapper">
      <img :src="currentArticle.image" :alt="currentArticle.title">
    </div>

    <div class="reviewPageContent">
      <h1>{{ currentArticle.title }}</h1>
      <small>{{ currentArticle.date }}</small>
      <p>{{ currentArticle.content }}</p>
    </div>

  </div>
</template>

<style scoped>
    h1{
      color: white;
      font-size: 4rem;
    }

    small{
      color: var(--text-light);
    }
    .reviewPageWrapper{
      margin: 0;
      padding: 0;

    }

    .reviewPageWrapper img{
      position: absolute;
      width: 100%;
      transform: translateY(-100px);

    }

    .reviewPageImgWrapper::after{
      content:"";
      position: absolute;
      inset: 0;
      transform: translateY(-100px);
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        var(--color-bg) 40%
      );
      z-index: 200;

    }


    .reviewPageContent{
      position: relative;
      z-index: 300;
      width: 80%;
      margin: 0 auto;
    }

</style>