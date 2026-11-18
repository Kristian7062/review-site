<script setup>
    const props = defineProps({
        linePad: Number
    })

    let padLine = 2


</script>

<template>

    <div class="genericLine"></div>


</template>

<style>
    .genericLine {
        border-bottom: 1px solid #fff;
        width: 90%;
        height: 2px;
        margin: 0 auto;

    }

</style>