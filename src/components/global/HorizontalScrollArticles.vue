<script setup>
//need ref for reactive variables
import { ref } from 'vue'

const props = defineProps ({
    articles: Array
})

let scrollCounter = ref(0);
let overscrollValue = ref("contain")


function scrollEvent(event){
    
    // event.deltaY>0 ? scrollCounter++ : scrollCounter--
    //need to select the value for reactive variables
    
    // event.deltaY<0 ? scrollCounter.value=scrollCounter.value+420 : 1600, scrollCounter.value=scrollCounter.value-420
    


    //the humble horizontal stepped scrolling logic. On scroll transforms content based on 
    //contentWidth and checks if we hit the limits defined. reads deltaY from the @wheel event
    //TODO make contentWidth calculate automatically
    const maxScroll = 0
    const minScroll = -1200
    const contentWidth = 414

    if(event.deltaY<0){
        // console.log("check1 : " + scrollCounter.value );
        
        if((scrollCounter.value+contentWidth) > maxScroll){
            // console.log("check2 : " + scrollCounter.value );
            overscrollValue = ref("unset")

            return
        }else{
            // console.log("check3 : " + scrollCounter.value );
            overscrollValue === ref("unset") ? overscrollValue=ref("contain") : overscrollValue = ref("unset")
            scrollCounter.value = scrollCounter.value + contentWidth
            return
        }

    }else{
        if(scrollCounter.value < minScroll){
             // console.log("check5 : " + scrollCounter.value );


            return
        }else{
            // console.log("check6 : " + scrollCounter.value );
            // overscrollValue = ref("unset")
            scrollCounter.value=scrollCounter.value - contentWidth
        }
    }
    
    // console.log(scrollCounter)
}

</script>

<template>
    <div class="horizontalScrollWrapper">
        <div class="newsCards" @wheel="scrollEvent($event)">
            <!-- need to pass in the actual article with :article="article" -->
                <NewsCard v-for="article in props.articles" 
                :key="article.id" 
                :article="article" 
                :type="0" class="newsCard"></NewsCard>
        </div>
        <div class="scollOverlay"  ></div>
    </div>
</template>

<style>
    .newsCards{
        transition: 200ms;
        display: flex;
        flex-direction: row;

        transform: translateX( v-bind('scrollCounter + "px"'));

        
    
        /* hide scrollbar, need all 3 to work in all browsers */
        scrollbar-width: none;
        -ms-overflow-style: none;
        } ::-webkit-scrollbar {
            display: none;
        }

    .newsCards > * {
        flex: 0 0 auto;     
    }

    .newsCard {
        margin: 7px;
    }

    .horizontalScrollWrapper{
        /* stops scrolling on hover */
        overflow-x: auto;
        /* overscroll-behavior: v-bind('overscrollValue'); */
        overscroll-behavior: contain;

        position: relative;
        width: 100%;
        margin: 0;
        padding: 0;

    }

    .scollOverlay{
        content: "";
        scroll-behavior: none;
        pointer-events: none;
        position: absolute;
        inset: 0;
        margin: 0;
        padding: 0;
        width: 100%;
        background: rgba(0,0,0,0.2);
        background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0) 80%,
        rgba(0, 0, 0, 0.7) 100%
        );
    }

</style>