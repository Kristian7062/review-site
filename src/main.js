import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

//add new components you want to be able to access globaly here CHECK SPELLING COPY 4X
import ArticleCard from './components/articles/ArticleCard.vue'
import ExploreFeatured from './components/explore/ExploreFeatured.vue'
import Line from './components/global/Line.vue'
import ReviewCard from './components/articles/ReviewCard.vue'
import NewsCard from './components/articles/NewsCard.vue'
import HorizontalScrollArticles from './components/global/HorizontalScrollArticles.vue'
import LatestNews from './components/explore/LatestNews.vue'
import TagsSorter from './components/global/TagsSorter.vue'
import BrowseTopic from './components/explore/BrowseTopic.vue'

//importing css variables, should work globaly
import './styles/variables.css'
import './styles/global.css'
import News from './views/News.vue'
import Explore from './views/Explore.vue'
import Reviews from './views/Reviews.vue'
import ReviewPage from './views/ReviewPage.vue'
import Help from './views/Help.vue'
import Profile from './views/Profile.vue'
import AddReview from './views/AddReview.vue'
import ChangePassword from './views/ChangePassword.vue'
import ChangeUsername from './views/ChangeUsername.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        //makes default page go to Explore, / links still go to explore but dont get
        //highlighted as active
        { path: '/', redirect: '/Explore' },

        { path: '/Explore', name: 'Explore', component: Explore },
        { path: '/Reviews', name: 'Reviews', component: Reviews },
        { path: '/News', name: 'News', component: News },
        { path: '/Help', name:'Help', component: Help },
        { path: '/Profile', name: 'Profile', component: Profile},
        { path: '/Profile/AddReview', name: 'AddReview', component: AddReview},
        { path: '/ChangePassword', name: 'ChangePassword', component: ChangePassword},
        { path: '/ChangeUsername', name: 'ChangeUsername', component: ChangeUsername},
        { path: '/ReviewPage/:id', name:'ReviewPage', component: ReviewPage }

    ]
});


const app = createApp(App)
//i think this lets you use components as tags? check spelling when adding new component 4x!!
//this replaces the -> export default{name:'App', components:{componentName}} that u have in App.vue
app.component('ArticleCard', ArticleCard)
app.component('ExploreFeatured', ExploreFeatured)
app.component('ReviewCard', ReviewCard)
app.component('Line', Line)
app.component('NewsCard', NewsCard)
app.component('HorizontalScrollArticles', HorizontalScrollArticles)
app.component('LatestNews', LatestNews)
app.component('TagsSorter', TagsSorter)
app.component('BrowseTopic', BrowseTopic)
app.use(router).mount('#app')