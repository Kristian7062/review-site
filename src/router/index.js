import { createRouter, createWebHistory } from 'vue-router'
import Explore from '../views/Explore.vue'
import News from '../views/News.vue'
import Reviews from '@/views/Reviews.vue'


const routes = [
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
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router