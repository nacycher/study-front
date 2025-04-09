<script setup>
import {computed, reactive, ref, watch, watchEffect} from "vue";

let name = "张三";
let car = reactive( {
  name: "宝马",
  price: 1000000,
})
let msg = "<p style='color: red'>你好</p>";
function bug() {
  alert("购买成功");
}
let fruits = ["苹果","香蕉", "梨"];
// let url = "http://www.baidu.com";
let url = ref("http://www.baidu.com");

function changeUrl() {
  url.value = "http://www.google.com.hk";
  alert("地址改变");
}

function addPrice() {
  car.price += 1000;
}

let number = ref(1);

const totalPrice = computed(() => {
  return car.price * number.value;
});

// 2.指令: v-xxx
// 基础指令：v-html v-text
// 事件指令：v-on:click @click
// 判断指令：v-if v-else-if v-else
// 循环指令：v-for

// 3.属性绑定：v-bind: 属性绑定，动态绑定属性值。v-bind:默认不具有响应特性

// 4.响应式ref() reactive()
// ref():
// 1.使用ref()把所有类型数据包装成响应式数据
// 2.使用代理对象.valur设置值
// 3.属性绑定、页面取值直接使用{{xxx}}
// reactive():
// 1.对象类型的数据可以使用reactive
// 2.直接使用.设置值
// 3.属性绑定、页面取值直接使用{{xxx}}

// 属性绑定，v-bind：单向绑定，只能数据到页面
// 表单绑定，v-model：双向绑定



// 8.监听 watch/watchEffect
// 监听值的变化
// watch(number, (value, oldValue) => {
//   console.log("value", value);
//   console.log("oldValue", oldValue);
//
//   if (value > 3) {
//     alert("超出限购限制");
//     number.value = 3;
//   }
// })
// 监听所有响应式数据的变化
watchEffect(()=>{
  if (number.value > 3){
    alert("超出限购限制");
    number.value = 3;
  }
  if (car.price > 1012000){
    alert("太贵了");
  }
})



</script>
<template>
  <h2>姓名：{{name}}</h2>
  <h2>车名：{{car.name}}</h2>
  <h2>车价：{{car.price}}</h2>
  <h2>数量：{{number}}</h2>
  <button @click="addPrice">加价</button>
  <button @click="number++">加量</button>
  <div>{{msg}}</div>
  <div v-text="msg"></div>
  <div v-html="msg"></div>
<!--  <button v-on:click="bug">购买</button>-->
  <button @click="bug">购买 {{totalPrice}}</button>
  <button @click.once="bug">购买一次</button>
  <span style="color: green" v-if="car.price< 1000">很便宜</span>
  <span style="color: red" v-if="car.price >= 1000">太贵了</span>
  <li v-for="(f,i) in fruits">{{i}} : {{f}}</li>
  <a :href="url">百度一下</a>
  <button @click="changeUrl">改变地址</button>
</template>
<style scoped>

</style>