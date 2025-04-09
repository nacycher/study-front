<script setup lang="ts">

import Son from "./Son.vue";
import {reactive, ref} from "vue";

// 父传子：单向数据传递
// 父组件向子组件传递数据，子组件不能修改父组件的数据
// 父类的属性通过v-bind绑定给子类的属性，子类通过props接收父类的属性
const money = ref(100);
const books = ref(["水浒", "三国演义", "西游记", "红楼梦"]);

// 需要传递的内容过多，可以使用对象
const data = reactive({
  money: 100,
  books: ["水浒", "三国演义", "西游记", "红楼梦"]
});
function moneyMinis(arg) {
  alert("感知到儿子花了钱: " + arg);
  data.money += arg;
}

// 插槽，父子组件间页面模板的传递
</script>

<template>
<div style="background-color: wheat">
  <h2>Father</h2>
  <button @click="data.money += 1">给儿子发1块钱</button>
<!--  <Son :money="data.money" :books="data.books" @buy="moneyMinis"/>-->
  <Son v-bind="data">
    <template v-slot:title>
      ahahahSon
    </template>
    <template #btn>
      <button>买飞机</button>
    </template>
  </Son>
</div>
</template>

<style scoped>

</style>