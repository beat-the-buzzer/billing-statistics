<template>
  <article>
    <h1>{{showData.title}}</h1>
    <div v-for="(item,index) in showData.detail" :key="index">
      <p v-if="item.type == 'P'" v-html="item.text"></p>
    </div>
    
  </article>
</template>
<script lang="ts" setup>

import {ref} from 'vue'
import { router } from '/@/router';
import { getUrlParam } from '/@/utils/index';
import { questionInfoObjs } from './data';

// 获取参数
const id = getUrlParam('id') || ''
const artileData = questionInfoObjs[id]
const showData = ref({
  title: artileData.desc,
  detail: artileData.detail
})
console.error(showData.value)

</script>

<style lang="less" scoped>
article {
  padding: 40px;
  height: 100%;
  background: #fff;
  h1 {
    text-align: center;
    font-size: 24px;
    
  }
}
</style>
