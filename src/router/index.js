/**
 * Vue Router
 *
 * @library
 *
 * https://router.vuejs.org/en/
 */

// Lib imports
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Create a new router
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('../App'),
      children: [
        {
          path: '/',
          name: 'Landing',
          component: () => import('../views/Landing')
        },
        {
          path: '/products',
          name: 'Products',
          component: () => import('../views/Products')
        },
        {
          path: '/products/:id',
          name: 'Product',
          component: () => import('../views/Product')
        },
        {
          path: '/cart',
          name: 'ShoppingCart',
          component: () => import('../views/ShoppingCart')
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 }
  }
})

// router.beforeEach((to, from, next) => {
//   if (credentials.isLogin()) {
//     if (to.name === 'Login' || to.name === 'Verificar Usuario') next({ name: 'Dashboard' })
//     else next()
//   } else {
//     if (to.name === 'Home' || to.name === 'Login' || to.name === 'Verificar Usuario' || to.name === 'Revisar') next()
//     else next({ name: 'Home' })
//   }
// })

export default router
