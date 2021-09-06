/*
 * @Descripttion: 
 * @version: 
 * @Author: lcx
 * @LastEditors: lcx
 */

export const setStorage = (key: string, value: any) =>  window.localStorage.setItem(key, JSON.stringify(value))

export const getStorage = (key: string) => JSON.parse(window.localStorage.getItem(key) as any)

export const setSession = (key: string, value: any) => window.sessionStorage.setItem(key, JSON.stringify(value))

export const getSession = (key: string) => JSON.parse(window.sessionStorage.getItem(key) as any)