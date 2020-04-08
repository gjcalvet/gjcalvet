import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cavaleiros from '../views/Cavaleiros.vue'
import Sobre from '../views/Sobre.vue'
import News from '../views/News.vue'
import Contato from '../views/Contato.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cavaleiros',
    name: 'Cavaleiros',
    component: Cavaleiros
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: Sobre
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/contato',
    name: 'Contato',
    component: Contato
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
