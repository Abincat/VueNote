<script setup>
let clickAlert = function () {
  alert("跳出彈窗");
  alert("再跳出彈窗");
  alert("無限彈窗");
};

let click2 = function () {
  alert("只能點一次");
};

let cancel = function () {
  alert("已取消跳轉,只跳出function裡的彈窗");
};

let changeBG = function () {
  alert("觸發到了(設定once只觸發一次,不然太吵了)");
};
//----------------------------------------------------
//以下是響應式
//import ref這個內建函式到js裡面,才能讓內容透過函式事件進行更改
import { ref } from "vue";

//跟一般宣告一樣,只是要加上ref()
let handle = ref("文字");
let changeP = function () {
  //這邊要加上.value,觸發函式的時候才會響應式更換新的文字
  handle.value = "新的文字";
};

let square = ref("square");
let changeColorBlue = function () {
  square.value = "square blue";
};
let changeColorPink = function () {
  square.value = "square pink";
};
</script>

<template>
  <div>
    <h1>這邊要練習的是v-on,可簡寫為 @事件名稱="函式名稱"</h1>

    <!-- click事件 -->
    <button v-on:click="clickAlert">彈窗</button>

    <!-- 加上.once ,事件只會觸發一次,不會觸發第二次 -->
    <button @click.once="click2">只觸發一次</button>

    <!-- 加上.prevent,取消預設行為(a標籤的話是跳轉) -->
    <button>
      <a href="https://www.netflix.com/browse" @click.prevent="cancel"
        >取消預設
      </a>
    </button>

    <!-- mousemove事件,滑鼠移過去觸發,mouse系列事件有很多種模式可以選擇 -->
    <button @mousemove.once="changeBG">滑動觸發</button>
  </div>

  <hr />
  <!-- ---------------------------------------------------------------------- -->
  <h3>接下來是進階版操作</h3>
  <div class="content">
    <div class="contentObj">
      <p>{{ handle }}</p>
      <button @click="changeP">轉換文字</button>
    </div>
    <div class="contentObj">
      <div :class="square"></div>
      <button @mousemove="changeColorBlue">滑動變成藍色</button>
      <button @mousemove="changeColorPink">滑動變成粉色</button>
    </div>
  </div>
</template>

<style scoped>
button,
a {
  color: darkblue;
  border-color: darkblue;
  font-size: 30px;
  border-radius: 30px;
  height: 100px;
  width: 200px;
  margin: 30px;
  text-decoration: none;
}

button:hover,
a:hover {
  color: deeppink;
  font-weight: bold;
}

.content {
  display: flex;
  text-align: center;
}

.square {
  border: 1px solid black;
  width: 300px;
  height: 100px;
  margin: 0 100px;
}
.blue {
  background-color: darkblue;
}
.pink {
  background-color: deeppink;
}
</style>
