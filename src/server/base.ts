/*
 * @Descripttion: 
 * @version: 
 * @Author: lcx
 * @LastEditors: lcx
 */
import service from "./httpConfig";

export const GET_CITYS = (params: any) => service.request({
    url: '/cities',
    method: 'get',
    params
})

export const GET_CODE = (data: {account: string | number, v_sort: string}) => service.request({
    url: '/user/code/send',
    method: 'post',
    data
})