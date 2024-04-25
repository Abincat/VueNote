<script setup>
//後端提供的資料 https://cwpeng.github.io/live-records-samples/data/products.json
import {onMounted,ref} from "vue";

//建立響應式狀態 因為要從後端抓資料回來,所以一開始預設為空值,設置null
// 如果要設別的值也可以,注意跟判斷式的值有沒有相同,如果是字串的話要加上引號,不可以直接設雙引號,會抓不到東西
let products = ref(null);

//組件掛載(一打開網頁)之後,開始呼叫fetch串接後端資料
onMounted(async function(){
    let response=await fetch("https://cwpeng.github.io/live-records-samples/data/products.json");
    //用轉json函式進行解讀
    let data = await response.json();

    //data印出來就是我們直接在網站上看json一樣
    console.log(data);

    //然後把data的內容賦予上面設置的響應式的那個變數products值裡面去
    products.value=data;
});

</script>

<template>
<div class="headline">產品資料列表</div>
<hr/>
<!-- 
這邊做一個判斷的狀態
如果沒有資料(資料的值是初始的null),會顯示-資料載入中
反之,有資料的話會顯示資料已載入 -->
<div v-if="products===null">資料載入中</div>
<!-- <div v-else>資料已載入</div> -->

<!-- 那這邊用迴圈直接把每一筆資料印出來 -->
<div v-else>
    <div v-for="product in products" :key="product">
        <div>產品名稱：{{ product.name }}</div>
        <div>產品介紹：{{ product.description }}</div>
        <div>售價：{{ product.price }}</div>
        <hr/>
    </div>
</div>



</template>


<style scoped>

</style>



