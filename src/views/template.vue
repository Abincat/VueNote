<!-- 這邊是一頁,由多個組件組成 -->

<script setup>
// import 組件名稱 from 組件檔案路徑(組件名稱可自訂,不用與vue檔名相同,只要路徑對/上下對應就好)
// 開頭大小寫都沒差(這邊因為跟html撞名所以改用大寫引入)

import MainConp from "./template/main.vue";
import NavConp from "./template/nav.vue";
import LeftConp from "./template/left.vue";
import RightConp from "./template/right.vue";

</script>

<template>
    <NavConp></NavConp>
    <MainConp></MainConp>
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
