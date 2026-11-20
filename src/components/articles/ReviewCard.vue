<script setup>
    const props = defineProps({
        article: Object,
        type: Number
    })

    // const typeOf = () => { return props.type ? props.type : 0 }

</script>

<template>
    
    <div class="reviewCard-Wrapper">
        <!-- <RouterLink :to="{ name: 'ReviewPage', params: { id:article.id } }"> -->
            <div class="revCard-img">
                <img :src="article.image" :alt="article.title">
            </div>
            <div class="revCard-text">
                <h3>{{ article.title }}</h3>
                <small>{{ article.date }}</small>
                <p>{{ article.content }}</p>
            </div>
        <!-- </RouterLink> -->
    </div>


</template>

<script>

</script>

<style scoped>
    .reviewCard-Wrapper{
        border: var(--border);
        border-radius: var(--border-radious);
        overflow: hidden;
        display: flex;
        height: 100px;
        width: 100%;
    }

    .revCard-img {
        height: 100%;
        width: 200px;
        overflow: hidden;
    }

    .revCard-img img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center;
    }

    .revCard-text{
        color: var(--text-light);
        display: flex;
        flex-direction: column;
    }


</style>