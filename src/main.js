import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//add new components you want to be able to access globaly here CHECK SPELLING COPY 4X
import ArticleCard from './components/ArticleCard.vue'
import ExploreFeatured from './components/ExploreFeatured.vue'
import ReviewCardFeatured from './components/ReviewCardFeatured.vue'

//importing css variables, should work globaly
import './styles/variables.css'

const app = createApp(App)
//i think this lets you use components as tags? check spelling when adding new component 4x!!
//this replaces the -> export default{name:'App', components:{componentName}} that u have in App.vue
app.component('ArticleCard', ArticleCard)
app.component('ExploreFeatured', ExploreFeatured)
app.component('ReviewCardFeatured', ReviewCardFeatured)
app.use(router).mount('#app')