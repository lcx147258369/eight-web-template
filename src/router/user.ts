/*
 * @Descripttion: 
 * @version: 
 * @Author: lcx
 * @LastEditors: lcx
 */
export default [
    {
        path: '/user',
        component: () => import('../views/user/user.vue')
    },
    {
        path: '/login',
        component: () => import('../views/user/login.vue')
    }       
]