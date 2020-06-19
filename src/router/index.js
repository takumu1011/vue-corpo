import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Works from '../views/Works.vue'
import Fuga from '../views/Fuga.vue'
import Bar from '../views/Bar.vue'
import Baz from '../views/Baz.vue'

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
    path: '/fuga',
    name: 'Fuga',
    component: Fuga
  },
  {
    path: '/bar',
    name: 'Bar',
    component: Bar
  },
  {
    path: '/baz',
    name: 'Baz',
    component: Baz
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
