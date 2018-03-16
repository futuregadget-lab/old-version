import Vue from 'vue'
import Router from 'vue-router'

import TheTopPage from '@/components/TheTopPage'

import TheAboutPage from '@/components/TheAboutPage'
import TheAboutRoadPage from '@/components/TheAboutPage/TheAboutRoadPage'
import TheAboutLabmenPage from '@/components/TheAboutPage/TheAboutLabmenPage'
import TheAboutStrengthPage from '@/components/TheAboutPage/TheAboutStrengthPage'
import TheAboutDisclaimerPage from '@/components/TheAboutPage/TheAboutDisclaimerPage'

import TheBBSPage from '@/components/TheBBSPage'
import TheBBSPass from '@/components/TheBBSPage/TheBBSPass'

import ThePageNotFound from '@/components/ThePageNotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TopPage',
      component: TheTopPage
    }, {
      path: '/about',
      name: 'AboutPage',
      component: TheAboutPage
    }, {
      path: '/about/road',
      name: 'AboutRoadPage',
      component: TheAboutRoadPage
    }, {
      path: '/about/labmen',
      name: 'AboutLabmenPage',
      component: TheAboutLabmenPage
    }, {
      path: '/about/strength',
      name: 'AboutStrengthPage',
      component: TheAboutStrengthPage
    }, {
      path: '/about/disclaimer',
      name: 'AboutDisclaimerPage',
      component: TheAboutDisclaimerPage
    },
    {
      path: '/bbs',
      name: 'TheBBSPage',
      component: TheBBSPage
    }, {
      path: '/bbs/pass',
      name: 'TheBBSPassPage',
      component: TheBBSPass
    }, {
      path: '*',
      component: ThePageNotFound
    }
  ]
})
