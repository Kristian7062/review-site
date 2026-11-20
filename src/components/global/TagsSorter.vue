<script setup>
import tags from '@/articles/tags.json'
import { ref } from 'vue';

const emit = defineEmits(['tagChange'])

const selectedTag = ref(0)

function selectTag(tag){
    // console.log("Tag: "+tag);
    // console.log("selectTag: " + selectTag);
    // console.log("selectTag.value: " + selectTag.value);
    selectedTag.value = tag.id;    

    //tell parent active tag changed:
    emit('tagChange', tag);
}

</script> 

<template>
    <div class="tagWrapper">
        <p v-for="tag in tags" :key="tag.id" @click="selectTag(tag)" 
        :class="{'active' : selectedTag === tag.id}" >{{ tag.tag }}</p>
    </div>
</template>

<style scoped>
.tagWrapper{
    display: flex;
    flex-direction: row;
}


.tagWrapper p {
    background-color: aliceblue;
    padding: 0 15px;

}

.tagWrapper p.active{
    background-color: aqua;
}

.tagWrapper p:first-child{
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}

.tagWrapper p:last-child{

    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}

.tagWrapper:first-child {
    border-radius: 20px;
}
</style>