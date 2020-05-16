import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
  ],
})

// dynamically set application title to current view
router.afterEach((to) => {
  // let title =
  //   to.path === '/home'
  //     ? process.env.PRODUCT_NAME
  //     : `${to.meta.title} - ${process.env.PRODUCT_NAME}`
  //
  // if (!title) {
  //   title = 'Home'
  // }
  //
  // document.title = title
})

export default router
