<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";

let route = useRoute();
let router = useRouter();

function getInfo() {
  console.log(route.params); //组件参数
  console.log(route.path);  //组件路径
  console.log(route.name); //组件名称
  // ...
}

function goHome() {
  router.push("/");
}

function back() {
  // -1后退一步，1前进一步
  router.go(-1);
}
</script>

<template>
  <h3>个人详情</h3>
  <button @click="getInfo">页面信息</button>
  <button @click="goHome">跳到首页</button>
  <button @click="back">回退</button>
</template>

<style scoped>

</style>