<!--
 * @Descripttion: 
 * @version: 
 * @Author: lcx
 * @LastEditors: lcx
-->
<template>
  <div class="flex flex-row" @click="setNum">
      {{ num }}
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue"

  const num = ref(1)

  const setNum = () => {
    num.value++
  }

</script>
<style lang='scss'>
 
</style>
