import Vue from 'vue'
import VueRouter from 'vue-router'

import UTestComp from '@/js/components/unit/UTestComp'
import STestComp from '@/js/components/structural/STestComp'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: UTestComp
        },
        {
            path: '/test',
            name: 'test',
            component: STestComp
        }
    ]
})

export default router
