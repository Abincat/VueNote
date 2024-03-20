<script setup>
//把三函式加進來,這樣就可以觀察觸發時間點
import { onMounted, onUpdated , onUnmounted , ref } from "vue";

//注意這邊三個內建函式的寫法,函式後面直接用大括號整句包起來,且沒有冒號或等於符號!!
onMounted(function(){
console.log("組件'掛載→onMounted'完成")
});

//----組件的更新通知先關掉,不然在計時器他會一直跟著更新console.log----
// onUpdated(function(){
// console.log("組件'更新→onUpdated'完成")
// });

onUnmounted(function(){
console.log("組件'卸載→onUnmounted'完成")
});

let text = ref("網站內容")
let newText= function(){
    text.value="新的網站內容";
}

//設計一個計時器
//先設定變數動態化,設置初始值為0
let counter =ref(0);

//設定一個排程的變數,不用賦值
let scheduleId;
//使用內建函式,讓組件掛載的時候,計時器每秒+1
//利用onMounted進行生命週期的"掛載"
onMounted(function(){
    //把一整個排程塞到上面設置的空變數
    scheduleId = window.setInterval(function(){
        counter.value+=1;
        console.log("每隔一秒鐘,數字加1");
    },1000);
});
//組件卸載時,要清除掛載時設定的排程,不然元件關掉之後,console.log還是會一直跑,積多了讓效能變差
//利用內建函式clearInterval直接把變數清掉,就不用寫一大堆
onUnmounted(function(){
    window.clearInterval(scheduleId);
});

</script>


<template>
    <main>
        <div>{{ counter }}</div>
        <h1>{{ text }}</h1>
        <button @click="newText">改變網站樣式</button>

    </main>

</template>

<style scoped>
h1{
    color: blueviolet;
}
main{
    background-color: rgb(252, 226, 156);
}
div{
    font-size: 72px;
}
</style>