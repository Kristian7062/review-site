<script setup>

</script> 

<template>
    <div class="tagsWrapper">
        <p>tag</p>
        <p>tag</p>
        <p>tag</p>
        <p>tag</p>
        <p>tag</p>
        <p>tag</p>
        <p>tag</p>
    </div>
</template>

<style>
.tagsWrapper{
    display: flex;
    flex-direction: row;
}

.tagsWrapper p {
    background-color: aliceblue;
}

.tagsWrapper:first-child {
    border-radius: 20px;
}
</style>