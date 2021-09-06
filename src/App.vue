<!--
 * @Descripttion: 
 * @version: 
 * @Author: lcx
 * @LastEditors: lcx
-->
<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, getCurrentInstance, watchEffect } from 'vue'
import HelloWorld from './components/HelloWorld.vue' 
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { key, store } from './store'
import { browser } from './utils/utils'

export default defineComponent({
  name: 'App',
  setup() {
    const route = useRoute()
    const sotre = useStore(key)
    /**
     * @msg: H5的微信登录
     * @param {*}
     * @return {*}
     */    
    const wechatLogin = (route: {query?: any}) => {
        let token = route.query.token
        let query = route.query
        let error_msg = route.query.error_msg
        if(token) {
          token = JSON.parse(token)
          if(token.status == 20000) { 
            store.commit('SAVE_USER', token)
            delete query.token;
          }
        } else if(error_msg) {
          if(error_msg.status == 40000) {
            
          }
          delete query.error_msg; 
        }
    }
    
    
    watchEffect(() => {
       if(browser() == 'wx') {
          wechatLogin(route)
       }
    })


    return {
       
    }

  }


})
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
