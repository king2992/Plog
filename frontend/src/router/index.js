import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import (/* webpackChunkName: "home" */
        '../views/home.vue')
    }, {
        path: '/login',
        name: 'login',
        component: () => import (/* webpackChunkName: "login" */
        '../components/join/login.vue')
    }, {
        path: '/signUp',
        name: 'signUp',
        component: () => import (/* webpackChunkName: "signUp" */
        '../components/join/signUp.vue')
    }, {
        path: '/introduce',
        name: 'introduce',
        component: () => import (/* webpackChunkName: "introduce" */
        '../views/introduce/introduce.vue')
    }, {
        path: '/project',
        name: 'project',
        component: () => import (/* webpackChunkName: "project" */
        '../views/project/project.vue')
    }, {
        path: '/blog',
        name: 'blog',
        component: () => import (/* webpackChunkName: "blog" */
        '../views/blog/blog.vue')
    }, {
        path: '/blogAdd',
        name: 'blogAdd',
        component: () => import (/* webpackChunkName: "blog" */
        '../views/blog/blogAdd.vue')
    },{
        path: '/blogView',
        name: 'blogView',
        component: () => import (/* webpackChunkName: "blog" */
        '../views/blog/blogView.vue')
    }, {
        path: '/users',
        name: 'users',
        component: () => import (/* webpackChunkName: "users" */
        '../views/users/users.vue')
    }, {
        path: '/management',
        name: 'management',
        component: () => import (/* webpackChunkName: "management" */
        '../views/management/management.vue')
    },{
        path: '/privacy',
        name: 'privacy',
        component: () => import (/* webpackChunkName: "privacy" */
        '../components/footer/privacy.vue')
    }
]

const router = new VueRouter(
    {mode: 'history', base: process.env.BASE_URL, routes}
)

export default router
