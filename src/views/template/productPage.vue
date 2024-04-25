<script setup>
// 產品資料串接網址 https://cwpeng.github.io/live-records-samples/data/products.json

import {ref,onMounted} from "vue";
import productList from "./productList.vue";

let products = ref(null) //建立響應式狀態 products,一開始為空值

// 組件掛載完成之後,開始呼叫fetch串接後端的資料
onMounted(async function(){
    let response = await fetch("https://cwpeng.github.io/live-records-samples/data/products.json")
    let data = await response.json();
    products.value=data;
});


</script>

<template>
    <div v-if="products===null">資料載入中</div>
    <productList v-else :products="products"></productList>
</template>

<style scoped>
</style>