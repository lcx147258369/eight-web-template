/*
 * @Descripttion: 
 * @version: 
 * @Author: lcx
 * @LastEditors: lcx
 */
import { createApp } from 'vue'
import App from './App.vue'
import { key, store } from './store/index'
import * as api from './server'
import router from './router'
import './index.css'

const app = createApp(App)

app.use(store, key)
app.use(router)
app.mount('#app')