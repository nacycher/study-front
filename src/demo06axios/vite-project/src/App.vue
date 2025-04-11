<script setup>
import axios from 'axios';
import http from './utils/index.js';

// 使用axios创建固定的请求地址
const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
})


function getInfo() {
  http.get("/posts/3").then((response) => {
    console.log(response.data);
  });
}

function getInfoParam() {
  http.get("/posts", {
    params: {
      userId:2
    }
  }).then((response) => {
    console.log(response.data);
  })
}

function postInfo() {
  // 数据会被自动转为json
  http.post("/posts", {
    userId: 1,
    title: "云程低代码平台",
    body: "私有化部署、定制化开发、源代码交付、欢迎在线体验。http://www.yunchengxc.com"
  }).then((response) => {
    console.log(response.data);
  })
}

function delay2() {
  http.get("/posts/3").then((response) => {
    console.log(response.data);
  }).catch((error) => {
    console.log(error);
  });
}
</script>

<template>
  <button @click="getInfo">get请求</button>
  <button @click="getInfoParam">get请求带参数</button>
  <button @click="postInfo">post请求</button>
  <button @click="delay2">delay 2s</button>

</template>

<style scoped>

</style>
