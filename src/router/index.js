import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/Home.vue');
const Works = () => import('../views/Works.vue');
const News = () => import('../views/News.vue');

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/works',
    name: 'Works',
    component: Works
  },
  {
    path: '/news',
    name: 'News',
    component: News
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
