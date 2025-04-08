<script setup lang="ts">
import {useRoute} from "vue-router";
let route = useRoute();

</script>

<template>
<h1>我是Hello</h1>
  {{$route.query.id}} == {{$route.query.name}}

  <div>
    {{route.query.id}} <br/>
    {{route.query.name}} <br/>
  </div>
</template>

<style scoped>

</style>