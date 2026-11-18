import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//add new components you want to be able to access globaly here CHECK SPELLING COPY 4X
import ArticleCard from './components/articles/ArticleCard.vue'
import ExploreFeatured from './components/explore/ExploreFeatured.vue'
import Line from './components/global/Line.vue'
import ReviewCard from './components/articles/ReviewCard.vue'
import NewsCard from './components/articles/NewsCard.vue'
import HorizontalScrollArticles from './components/global/HorizontalScrollArticles.vue'
import LatestNews from './components/explore/LatestNews.vue'
//importing css variables, should work globaly
import './styles/variables.css'

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
app.use(router).mount('#app')