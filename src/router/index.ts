/*
 * @Descripttion: 
 * @version: 
 * @Author: lcx
 * @LastEditors: lcx
 */

import user from './user'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes:Array<RouteRecordRaw> = [
    {   
        path: '/',
        name: 'index',
        component: () => import('../views/index/index.vue')
    },
    {
        path: '/:catchAll(.*)',
        name: '404',
        component: () => import('../views/common/404.vue')
    },
    ...user
]
export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})
