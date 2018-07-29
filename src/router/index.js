import Vue from 'vue'
import Router from 'vue-router'
import Url from '@/components/Url'
import SignUp from '@/components/Signup'
import LogIn  from '@/components/LogIn'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Url',
      component: Url
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/LogIn',
      name: 'LogIn',
      component: LogIn
    }
  ]
})
