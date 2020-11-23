import Vue from 'vue'
import VueRouter from 'vue-router'
const resovle = (viewPath) => {
  return () => import(`@/views/${viewPath}/${viewPath}.vue`);
};
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/index',
    name: 'Index',
    component: resovle('Index')
  },
  {
    path: '/study',
    name: 'Study',
    component: resovle('Study')
  },
  {
    path: '/tailor',
    name: 'Tailor',
    component: resovle('Tailor')
  },
  {
    path: '/login',
    name: 'Login',
    component: resovle('Login')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 全局路由拦截
router.beforeEach((to, from, next) => {
  next()
  // if(sessionStorage.userId) {
  //   next()
  // } else {
  //   sessionStorage.userId = 1
  //   next({
  //     path: '/login'
  //   })
  // }
  // if(to.path === "/") {
  //   console.log(111)
  //   next({
  //     name: "Login"
  //   })
  // }
  // console.log(to, from, next)
})



export default router
