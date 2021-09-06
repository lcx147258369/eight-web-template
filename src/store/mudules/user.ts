/*
 * @Descripttion: 
 * @version: 
 * @Author: lcx
 * @LastEditors: lcx
 */
import * as types from "../type"
import API from '../../server'
import { getStorage, setStorage } from '../../utils/storage'

interface State {
    token: string,
    expires_in: string
}

interface ResponseData {
    status: number;
    data?: any;
    message?: string;
}


const initState:State = {
    token: getStorage('token') || '',
    expires_in: getStorage('expires_in') || '',
}

const user = {
    state: initState,
    mutations: {
        [types.SAVE_USER](state: object | any, payload: object | any) {
             Object.keys(payload).forEach((key: string ) => {
                 state[key] = payload[key]
                 setStorage(key, payload[key])
             })
        }
    },
    actions: {  
        async LOGIN (context:any, params: { account: string, code: number | string, url?: string, source?: string}) {
            try {
                const res: ResponseData = await API['USER_LOGIN'](params)
                if(res.status === 20000) {
                    context.commit('SAVE_USER', res.data)
                } 
                return res
            }
            catch(err) {
                throw new Error(err)
            }
        },

        // async WX_LOGIN (context:any, params: { account: string, code: number | string, url?: string, source?: string}) {
        //     try {
        //         const res: ResponseData = await API['USER_LOGIN'](params)
        //         if(res.status === 10000) {
        //             context.commit('SAVE_USER', res.data)
        //         }
        //     }
        //     catch(err) {
        //         console.log(err)
        //     }
        // },
    }
}
export default user;