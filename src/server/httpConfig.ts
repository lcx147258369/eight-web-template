/*
 * @Descripttion: 
 * @version: 
 * @Author: lcx
 * @LastEditors: lcx
 */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, CustomResponse } from "axios"
import router from '../router'
import { RouteLocationNormalized } from 'vue-router'
import { browser }  from "../utils/utils"
import qs from 'qs'

interface ResponseData {
    status: number,
    data: any,
    message: string
}

let service = axios.create({
    baseURL: '/api', // api 的 base_url
    timeout: 50000, // 请求超时时间
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    transformRequest: [function (data, headers) {
      // if(config.method === 'post' && headers['Content-Type'] != 'multipart/form-data')
      return qs.stringify(data);
    }],
});

// request 拦截器 axios 的一些配置
service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      return config;
    },
    (error: any) => {
      // Do something with request error
      console.error("error:", error); // for debug
      Promise.reject(error);
    }
);

// respone 拦截器 axios 的一些配置
service.interceptors.response.use(
    (res: AxiosResponse) => {
      // Some example codes here:
      // code == 0: success
      if (res.status === 200) {
        const data: ResponseData = res.data
        if (data.status === 20000) {
            
        } else {
            codeError(data.status)
        }
        return res.data
      } else {
        return Promise.reject(new Error(res.data.message || "Error"))
      }
    },
    (error: any) => {
        netError(error)
        Promise.reject(error);
    }
);
  
// 自定义错误处理
const codeError = (code: number | string) => {
     switch(code) {
         case 40002: // 定位错误
             break
         case 40003: // 登录失效
             break
     }
}

// 网络错误处理
const netError = (error: any) => {
    const {status} = error
    if(status === 404) {
        let prev: any = router.currentRoute;
        router.replace({name: '404',query: {prev_path: prev.fullPath}})
    }
}

// 重新登录
const refreshLogin = () => {
  let prev: any = router.currentRoute;
  if(browser() == 'wx') {
    window.location.href = import.meta.env.VITE_AUTH_LINK + '?url=' + encodeURIComponent(window.location.href) 
  } else {
    router.replace({name: 'login',query: {prev_path: prev.fullPath}})
  }
}


export default service