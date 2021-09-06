/*
 * @Descripttion: 
 * @version: 
 * @Author: lcx
 * @LastEditors: lcx
 */
import user from './mudules/user'
import { InjectionKey } from 'vue'
import {createStore, Store} from 'vuex'

interface State {
    count: string | number
}
export const key: InjectionKey<Store<State>> = Symbol()
export const store = createStore<State>({
  state() {
    return {
      count: 0
    }
  },
  modules: {
    user
  },
  mutations: {
    increment(state: object | any) {
      // state.count++
    }
  }
})