<script setup>
    const props = defineProps({
        article: Object,
        type: Number
    })
    
    console.log(props.type)

    const typeOf = () => { return props.type ? props.type : 0 }

    
</script>

<template>
    <div class="newsCard-Wrapper">
        <div class="newsCard-img">
            <img :src="props.article.image" :alt="props.article.title">
        </div>
        <div class="newsCard-text">
            <h3>{{ article.title }}</h3>
            <small>{{ article.id }}</small>
        </div>
    </div>
</template>

<style>

    :root{
        --width: 400px;
    }
    .newsCard-Wrapper{
        position: relative;
        border: var(--border);
        border-radius: var(--border-radious);
        overflow: hidden;
        display: flex;
        height: 250px;
        width: var(--width);
    }

    .newsCard-img {
        height: 100%;
        width: 100%;
        overflow: hidden;
        position: relative;
    }

    /* ::after to add pseudo element on top of img, after needs content specified, can be empty
    and the wrapper needs position:relative because you need p:aboslute to overlay it  */
    .newsCard-img::after{
        content:"";
        position: absolute;
        inset: 0; /* same as top: 0; left: 0; */
        width: 100%;
        height: 100%;
        background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.7) 100%
    );
    }

    .newsCard-img img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center;

    }

    .newsCard-text{
        margin: 1vw;
        position: absolute;
        color: var(--text-light);
        width: var(--width);
        display: flex;
        flex-direction: column;
        bottom: 0;
        left: 0;
    }
</style>