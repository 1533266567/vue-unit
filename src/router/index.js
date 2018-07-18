import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Event from '@/components/Event'
import VuexTest from '@/components/VuexTest'
import asyncEvent from '@/components/asyncEvent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Test',
      component: Test
    },
    {
      path: '/event',
      name: 'Event',
      component: Event
    },
    {
      path: '/vuexevent',
      name: 'VuexTest',
      component: VuexTest
    },
    {
      path: '/asyncEvent',
      name: 'asyncEvent',
      component: asyncEvent
    }
  ]
})
