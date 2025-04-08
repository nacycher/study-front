<script setup lang="ts">
import {useRoute} from "vue-router";

let route = useRoute();

</script>

<template>
<h1>我是haha {{$route.params.id}} ==> {{$route.params.name}} ==> {{$route.params.age}}</h1>
<div>
  {{route.params.id}} <br/>
  {{route.params.name}} <br/>
  {{route.params.age}} <br/>
</div>
</template>

<style scoped>

</style>