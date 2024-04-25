<script setup>
// 評論資料串接網址 https://cwpeng.github.io/live-records-samples/data/reviews.json
import {ref,onMounted} from "vue";
import reviewList from "./reviewList.vue";

let reviews=ref(null);

onMounted(async function(){
    let response = await fetch("https://cwpeng.github.io/live-records-samples/data/reviews.json");
    let data = await response.json();
    reviews.value = data;
})

</script>

<template>
    <div v-if="reviews===null">資料載入中</div>
    <reviewList v-else :reviews="reviews"></reviewList>
</template>

<style scoped>
</style>