<script setup>
import {useRouter} from "vue-router";

const router = useRouter();
// 使用param传参，必须使用到route的name
function paramsTest() {
  router.push({
    name: 'Haha',
    params: {
      name: '张三',
      id: 888,
      age: 2222
  }});
}
function helloQuery() {
  router.push({
    path: '/hello',
    query: {
      id: 88888,
      name: 'hello88'
    }
  });
}
</script>

<template>
  <router-link to="/">首页</router-link>
  <router-link to="/hello?id=1&name=zhangsan">hello</router-link>
  <router-link :to="{
    path: '/hello',
    query: {
      id: 77888,
      name: 'hello'
    }
  }">hello对象传参</router-link>
  <router-link to="/haha/121/张三/18">haha121</router-link>
  <router-link :to="{
      name: 'Haha',
      params: {
      name: '张三',
      id: 777,
      age: 22
    }
  }">对象传参
  </router-link>
  <button @click="helloQuery">hello 按钮传参</button>
  <button @click="paramsTest">paramTest</button>
  <router-link to="/user/007">用户中心</router-link>
  <hr/>
  <router-view></router-view>


</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

a {
  margin-left: 10px;
}
</style>
