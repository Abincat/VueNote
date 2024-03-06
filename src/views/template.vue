<!-- 這邊是一頁,由多個組件組成 -->

<script setup>
// import 組件名稱 from 組件檔案路徑(組件名稱可自訂,不用與vue檔名相同,只要路徑對/上下對應就好)
// 開頭大小寫都沒差(這邊因為跟html撞名所以改用大寫引入)
import {ref} from "vue";

import MainConp from "./template/main.vue";
import NavConp from "./template/nav.vue";
import LeftConp from "./template/left.vue";
import RightConp from "./template/right.vue";

let subtitle = ref("這是要轉換的文字")
let updateTitle = function(){
    subtitle.value = "已轉換為新的標題文字"
}
</script>

<template>
    <div class="topText">{{ subtitle }}</div>
    <!-- 這邊要設定變數名稱,就可以往這個元件傳遞這個變數名稱的值,也可以用來設定css屬性 -->
    <!-- 同一個東西可以宣告好幾個值,但有幾個就重複幾次,不會被蓋掉(但是要重新使用元件一次) -->
    <!-- 同一個變數名,可以在不同元件給予不同的值,傳下去的值就會不一樣:例:color那邊 -->
    <!-- 如果是css的話,變數名稱要對應到css的名稱,並以駝峰式命名設定 -->
    <NavConp secondTitle="這是副標題" backgroundColor="pink" color="orangered" @changeNav="updateTitle"></NavConp> 
    <NavConp secondTitle="天啊這也是副標題嗎" backgroundColor="pink" color="darkorchid"></NavConp>
    <!-- emit:在子組件定義事件,再往父組件傳遞訊息 -->
    <!-- defineProps:往子組件傳遞訊息 -->
    <!-- 這邊使用v-bind來動態改變subtitle,即使是不同層元件也可以這樣上下傳遞,只要那個元件內有呼叫defineProps或emit函式即可 -->
    <MainConp :subtitle="subtitle"></MainConp>
    <div class="bottom">
        <LeftConp></LeftConp>
        <RightConp></RightConp>
    </div>
</template>

<style scoped>
.bottom{
    display: flex;
};


</style>
