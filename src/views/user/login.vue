<!--
 * @Descripttion: 
 * @version: 
 * @Author: lcx
 * @LastEditors: lcx
-->

<script lang="ts" setup>
    import { onMounted, ref } from 'vue'
    import { useStore } from 'vuex'
    import API from '../../server'
    import { key } from '../../store'

    const seconds = ref(0) // 验证码按钮显示状态
    const store = useStore(key)

    const handleSendCode = () => {
        getVerifyCode({ account: 18230529252, v_sort: 'login' })
    }

    /**
     * @msg: 获取短信验证码
     * @param {*} params
     * @param {*} v_sort
     * @return {*}
     */
    const getVerifyCode = async (params: {
        account: number | string
        v_sort: string
    }) => {
        try {
            const res: any = await API['GET_CODE'](params)
            let { status, data, message } = res
            if (status == 20000) {
                timeDown()
            } else {
            }
        } catch (err) {
            console.log(err)
        }
    }

    /**
     * @msg: 验证码定时器
     * @param {*}
     * @return {*}
     */
    const timeDown = () => {
        let timer: any = null
        let TIME_OUT = 60
        timer = setInterval(() => {
            if (TIME_OUT == 0) {
                clearInterval(timer)
                return
            }
            TIME_OUT--
            seconds.value = TIME_OUT
        }, 1000)
    }

    const handleLogin = async () => {
        try {
            const res = await store.dispatch('LOGIN', { account: 13973648730, code: 5657, url: '', source: ''})
            if(res.status === 20000) {
                // 登录成功处理
            } else {
                // 失败的处理
            }
        }
        catch(err) {
            console.log(err)
        }
    }

</script>

<template>
    <div @click="handleLogin">登录</div>
</template>