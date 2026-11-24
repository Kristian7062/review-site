import { createRouter, createWebHistory } from 'vue-router'
import Explore from '../views/Explore.vue'
import News from '../views/News.vue'
import Reviews from '@/views/Reviews.vue'
import ReviewPage from './views/ReviewPage.vue'


const routes = [
    { 
    history: createMemoryHistory(),
    //makes default page go to Explore, / links still go to explore but dont get
    //highlighted as active
    path: '/', 
    redirect: '/Explore' },
    {
    path: '/',
    name: 'Explore',
    component: Explore
    },
    {
    path: '/reviews',
    name: 'Reviews',
    component: Reviews
    },
    {
    path: '/news',
    name: 'News',
    component: News
    },
    { 
    path: '/ReviewPage/:id', 
    name:'ReviewPage', 
    component: ReviewPage 
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router