import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    {
      path: '/home',
      name: 'home',
      meta: {
        footShow: true
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "home" */ './views/home/Home.vue')
    },
    {
      path: '/kind',
      name: 'kind',
      meta: {
        footShow: true
      },
      component: () => import(/* webpackChunkName: "kind" */ './views/kind/Kind.vue'),
    },
    
    {
      path: '/find',
      name: 'find',
      // redirect: '/find/article',
      meta: {
        footShow: true
      },
      component: () => import(/* webpackChunkName: "find" */ './views/find/Find.vue'),
      children: [
      
      ]
    },
  
    {
      path: '/main',
      name: 'main',
      meta: {
        footShow: true
      },
      component: () => import(/* webpackChunkName: "main" */ './views/main/Main.vue'),

    },
    
    {
      path: '*',
      redirect: '/home'
    }

  ]
})
