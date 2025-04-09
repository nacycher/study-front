<script setup>


// 定义属性 只读
// let props = defineProps(["money", "books"]);
let props = defineProps({
    money: {
      type: Number,
      required: true,
      default: 0
    },
    books: Array
  });

// 子传父：使用emit事件
let emits = defineEmits(["buy"]);
function buy() {
  emits("buy", -1);
}
</script>

<template>
  <div style="background-color: blue;color: white">
    <h3>Son</h3>
    <div>账户：{{props.money}}</div>
    <div>
      图书：
      <li v-for="b in books">{{b}}</li>
    </div>
    <button @click="buy">花1块钱</button>
  </div>
</template>

<style scoped>

</style>