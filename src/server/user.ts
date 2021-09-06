/*
 * @Descripttion: 
 * @version: 
 * @Author: lcx
 * @LastEditors: lcx
 */

import service from "./httpConfig";

export const USER_LOGIN = (data: {account: string, code: string | number, url?: string, source?: string}) => service.request({
    url: '/auth/mobile/login',
    method: 'post',
    data
})

