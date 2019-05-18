import Vue from 'vue'
import Router from 'vue-router'

import ViewAppliedStudents from './components/ViewAppliedStudents/Index.vue'
import Apply from './components/Apply/Index.vue'
import ApplyNotice from './components/ApplyNotice/Index.vue'
import Login from './components/Login/Index.vue'
import Home from './components/Home/Index.vue'
import SignUp from './components/SignUp/Index.vue'
import ApplyList from './components/ApplyList/Index.vue'
import Profile from './components/Profile/Index.vue'

Vue.use(Router)

function loggedin(to, from, next) {
    if(!localStorage.token){
      alert('로그인 하세요')
      next('/login')
    }
    else{
      next();
    }
  }
  function login(to, from, next) {
    if(localStorage.token){
      next('/home')
    }
    else{
      next();
    }
  }


export default new Router ({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'root',
            component: ()=> import('./components/Home/Index.vue'),
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
            beforeEnter: loggedin,
            //component: ()=> import('./components/Resume/Index'),
            // meta: {
            //   permission: -1,
            //   restrict: false,
            // }
        },
        {
            path: '/signup',
            name: 'SignUp',
            component: SignUp,
            beforeEnter: login
        },
        {
            path : '/login',
            name : 'login',
            component : Login,
            beforeEnter: login
        },
        {
            path: '/coapply',
            name: 'coApply',
            component: Apply,
            //component: ()=> import('./components/Resume/Index'),
            // meta: {
            //   permission: -1,
            //   restrict: false,
            // }
        },
        {
            path: '/applyNotice',
            name: 'ApplyNotice',
            component: ApplyNotice,
            //component: ()=> import('./components/Resume/Index'),
            // meta: {
            //   permission: -1,
            //   restrict: false,
            // }
        },
        {
            path: '/apply',
            name: 'Apply',
            component : ApplyList,
        },
        {
            path: '/appliedStd',
            name: 'ViewAppliedStudents',
            component: ViewAppliedStudents,
            //component: ()=> import('./components/Resume/Index'),
            // meta: {
            //   permission: -1,
            //   restrict: false,
            // }
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile,
            //component: ()=> import('./components/Resume/Index'),
            // meta: {
            //   permission: -1,
            //   restrict: false,
            // }
        },
    ]
})
