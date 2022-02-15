import Vue from 'vue'
import VueRouter from 'vue-router'
import { Message } from "element-ui";
import resetMessage from '../resetMessage'
import Home from '../views/home.vue'
import Carousel from '../views/Carousel .vue'
import Help from '../views/Help.vue'

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home', component: Home,
        children: [
            {
                path: '/',
                component: Carousel
            },
            {
                path: 'carousel', name: 'carousel', component: Carousel
            },
            {
                path: 'variety', name: 'variety', component: () => import('../views/Variety.vue')
            },
            {
                path: 'select', name: 'select', component: () => import('../views/Select.vue')
            },
            {
                path: 'news', name: 'news', component: () => import('../views/News.vue')
            },
            {
                path: 'help', name: 'help', component: Help,
            },
            {
                path: 'deal', name: 'deal', component: () => import('../views/Deal.vue')
            },
            {
                path: 'callme', name: 'callme', component: () => import('../views/CallMe.vue')
            },

        ]
    },
    {
        path: '/login', name: 'login', component: () => import('../views/Login.vue')
    },
    {
        path: '/register', name: 'register', component: () => import('../views/Register.vue')
    },

    {
        path: '/new1', name: 'new1', component: () => import('../views/New1.vue')
    },
    {
        path: '/new2', name: 'new2', component: () => import('../views/New2.vue')
    },
    {
        path: '/new3', name: 'new3', component: () => import('../views/New3.vue')
    },
    {
        path: '/new4', name: 'new4', component: () => import('../views/New4.vue')
    },
    {
        path: '/new5', name: 'new5', component: () => import('../views/New5.vue')
    },
    {
        path: '/person', name: 'person', component: () => import('../views/Person.vue')
    },


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})





//前置路由守卫
router.beforeEach((to, from, next) => {
    const isLogin = sessionStorage.eleToken ? true : false
    if (to.path === '/person') {
        if (isLogin) {
            next()
        } else {
            if (from.path === '/login') {
                resetMessage({
                    message: "请先登录",
                    type: "warning",
                    duration: 1000,
                });

            } else {
                router.push('/login')
                Message({
                    message: "请先登录",
                    type: "warning",
                    duration: 1000,
                });
            }

        }
    }
    else {
        next()
    }

})


Vue.use(VueRouter)
export default router