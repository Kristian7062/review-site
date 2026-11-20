<script setup>
    import { useRoute } from 'vue-router'

    const props = defineProps({
        article: Object
    })

    const route = useRoute()
    const id = parseInt(route.params.id)

</script>

<template>
    <h1>{{ article.title }}</h1>
    <h1>Hello</h1>

</template>

<style scoped>
h1{
    padding: 5rem;
}

</style>