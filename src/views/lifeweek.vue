<!-- 這邊要講的是生命週期-組件在網頁上運作的時間點
掛載Mounted：當組件第一次被畫出來,對應的HTML DOM元件也都被創造完成之後
更新Updated：當組件因為響應式狀態的變化,完成重新繪製之後
卸載Unmounted：當組件從畫面上移除完畢之後 -->

<script setup>
import {ref} from "vue";
import lifeCom from "./template/lifeCom.vue"

//給他一個響應式的狀態,判定如果是true才會顯示此元件,false就不會顯示
let visible = ref(true);

//設置兩個按鈕觸發的函式,一個把數值變成true一個變成false
let hide = function(){
    visible.value=false;
};
let show = function(){
    visible.value=true;
};


</script>



<template>
    <lifeCom v-if="visible"></lifeCom>

    <!-- 卸載的概念 -->
    <button @click="hide">隱藏此元件</button>

    <!-- 掛載的概念 -->
    <button @click="show">顯示此元件</button>


    <p>開F12觀察組件更新狀態</p>
    <!-- 更新的話就是"改變網站樣式"那個按鈕按下去 -->

</template>

<style scoped>

</style>