import Vue from 'vue'
import Router from 'vue-router'

import ViewAppliedStudents from './components/ViewAppliedStudents/Index.vue'
import Apply from './components/Apply/Index.vue'
import Login from './components/Login/Index.vue'
import Home from './components/Home/Index.vue'

Vue.use(Router)

export default new Router ({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
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
            path: '/apply',
            name: 'Apply',
            component: Apply,
            //component: ()=> import('./components/Resume/Index'),
            // meta: {
            //   permission: -1,
            //   restrict: false,
            // }
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
            //component: ()=> import('./components/Resume/Index'),
            // meta: {
            //   permission: -1,
            //   restrict: false,
            // }
        },
        {
            path : '/login',
            name : 'login',
            component : Login,
        }
    ]
})
