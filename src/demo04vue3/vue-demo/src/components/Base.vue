<script setup>
let name = "张三";
let car = {
  name: "宝马",
  price: 1000000,
}
</script>
<template>
  <h2>姓名：{{name}}</h2>
  <h2>车名：{{car.name}}</h2>
  <h2>车价：{{car.price}}</h2>
</template>
<style scoped>

</style>