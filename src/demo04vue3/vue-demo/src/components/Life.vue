<script setup>
import {onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref} from "vue";

const count = ref(1);
function countAdd() {
  count.value += 1;
}

// 生命周期钩子函数
// 挂载 去后台API查询数据
onBeforeMount(() => {
  console.log("挂载前", count.value);
  console.log("挂载前", document.getElementById("btn01"));
});
onMounted(() => {
  console.log("挂载完成", count.value);
  console.log("挂载完成", document.getElementById("btn01"));
});
// 更新
onBeforeUpdate(() => {
  console.log("更新前", count.value);
  console.log("更新前", document.getElementById("btn01").innerHTML);
})
onUpdated(() => {
  console.log("更新完成", count.value);
  console.log("更新完成", document.getElementById("btn01").innerHTML);
})




</script>

<template>
  <button id="btn01" @click="countAdd">点 {{count}}</button>
  
</template>

<style scoped>

</style>