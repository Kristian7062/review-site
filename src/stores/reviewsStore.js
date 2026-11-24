
//not using this file, i think??

import { ref, computed, readonly } from 'vue'
import initialReviews from '../articles/reviews.json'


const reviews = ref(initialReviews.map(item => ({ ...item })))
let nextId = Math.max(0, ...reviews.value.map(item => item.id)) + 1

const review = {
    reviews: readonly(reviews),

}