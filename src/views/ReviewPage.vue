<script setup>
    import { useRoute, RouterLink } from 'vue-router'
    import article from '../articles/reviews.json'


    const route = useRoute()
    const id = Number(route.params.id)
    const currentArticle = article[route.params.id]
    

</script>

<template>
    <h1>{{ currentArticle.title }}</h1>
    <p>{{ currentArticle.date }}</p>
    <h1>Hello</h1>

</template>

<style scoped>
    h1{
        padding: 5rem;
        color: white;
    }

</style>