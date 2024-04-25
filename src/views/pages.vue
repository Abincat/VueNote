<script setup>
// 產品資料串接網址 https://cwpeng.github.io/live-records-samples/data/products.json
// 評論資料串接網址 https://cwpeng.github.io/live-records-samples/data/reviews.json

// 建立一個標籤選單做內容切換
import {ref} from "vue";
import productPage from "./template/productPage.vue";
import reviewPage from "./template/reviewPage.vue"

// 記錄一個page的響應式狀態,用來決定現在要看哪一個內容 product 或是 review,這邊設定預設值為 product
let page = ref("product");

// 利用函式的參數來把參數帶入page響應式的值
let change = function(clickedPage){
    page.value=clickedPage
}

</script>

<template>
    <nav>
        <!-- 這邊用三元運算子來判定目前指到哪個'內容',如果指到的話就加上class current 如果沒指到的時候就是空值 -->
        <span :class="page==='product'?'current':'' " @click="change('product')">產品資料</span> 
        <span :class="page==='review'?'current':'' " @click="change('review')">評論訊息</span>
    </nav>
    <main>
        <productPage v-if="page==='product'"></productPage>
        <reviewPage v-if="page==='review'"></reviewPage>
    </main>
</template>

<style scoped>
    nav{
        font-size: 20px;
    }
    nav>span{
        margin-right: 10px;
    }
    nav>span.current{
        font-weight: bold;
        color: darkmagenta;
    }
</style>