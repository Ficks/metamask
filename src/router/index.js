import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: resolve => require(['@/components/Index.vue'], resolve)
  }, {
    path: '/purchase',
    name: 'purchase',
    component: resolve => require(['@/components/purchase.vue'], resolve)
  }, {
    path: '/purchasesubmit',
    name: 'purchasesubmit',
    component: resolve => require(['@/components/purchasesubmit.vue'], resolve)
  }]
})
