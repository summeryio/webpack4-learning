import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export const constantRoutes = [
  {
    path: "/",
    name: "home",
    children: [{
      path: 'home',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: { title: '首页', icon: 'dashboard', affix: true }
    }]
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/About.vue")
  }
]

const createRouter = () => new Router({
  mode: "history",
  scrollBehavior: () => ({y: 0}),
  base: process.env.BASE_URL,
  routes: constantRoutes
})
const router = createRouter()

export default router