<script setup>
    const props = defineProps({
        article: Object
    })
</script>

<template>
    
    <div class="reviewCardFeatured-Wrapper">
        <div id="revCardFeat-img">
            <img :src="article.image" alt="article.title">
        </div>
        <div id="revCardFeat-text">
            <h3>{{ article.title }}</h3>
            <small>{{ date }}</small>
            <p>{{ article.content }}</p>
        </div>
    </div>


</template>

<script>

</script>

<style scoped>
    .reviewCardFeatured-Wrapper{
        border: var(--border);
        border-radius: var(--border-radious);
        overflow: hidden;
        display: flex;
    }

    #revCardFeat-img {
        height: 20px;
        width: 30px;
    }

    #revCardFeat-img img {
        
    }

    #revCardFeat-text{
        color: var(--text-light);
        display: flex;
        flex-direction: column;
    }


</style>