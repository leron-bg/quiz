import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import FirstQuestion from '@/components/FirstQuestion'
import SecondQuestion from '@/components/SecondQuestion'
import ThirdQuestion from '@/components/ThirdQuestion'
import FourthQuestion from '@/components/FourthQuestion'
import FifthQuestion from '@/components/FifthQuestion'
import Register from '@/components/Register'
import FinalScore from '@/components/FinalScore'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/question/1',
      name: 'FirstQuestion',
      component: FirstQuestion
    },
    {
      path: '/question/2',
      name: 'SecondQuestion',
      component: SecondQuestion
    },
    {
      path: '/question/3',
      name: 'ThirdQuestion',
      component: ThirdQuestion
    },
    {
      path: '/question/4',
      name: 'FourthQuestion',
      component: FourthQuestion
    },
    {
      path: '/question/5',
      name: 'FifthQuestion',
      component: FifthQuestion
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/score',
      name: 'FinalScore',
      component: FinalScore
    }
  ]
})
