<script setup>
import { ref } from "vue";

//把預設值設為空字串
let content = ref("");

let clear = function () {
  //按下觸發clear韓式,將content的文字弄回空字串
  content.value = "";
};

//設定多選框的變數,因為是多選,所以要用陣列來接使用者勾選了哪一些選項
let interests=ref([]);

//初始值設為null
let likeColor = ref(null);
let likeColorLine = ref(null);


</script>

<template>
  <h1>這邊要學的是表單,使用響應式更動網頁上的資料</h1>

  <h3>單行輸入框</h3>
  <!-- 使用v-model做雙向綁定 -->
  <input type="text" v-model="content" />
  <div>使用者輸入的文字為：{{ content }}</div>
  <button @click="clear">清空文字</button>
  <hr />
<!-- --------------------------------------------------------------- -->


  <h3>多選框</h3>
  <!-- 如果是多個選項,v-model設定為同一個變數去接他,再給每一個單獨的value值去辨識各項數值 -->
  角色扮演<input type="checkbox" v-model="interests" value="角色扮演"></input>
  即時策略<input type="checkbox" v-model="interests" value="即時策略"/></input>
  動作遊戲<input type="checkbox" v-model="interests" value="動作遊戲"/></input>
  <div>喜歡的遊戲類型是：{{interests}}</div>
  
  <!-- 更好的處理方式:使用v-for迴圈進行資料輸出 -->
<ul>
  <li>喜歡的遊戲類型是：</li>
  <div class="interestList">
  <li v-for="interest in interests">{{interest}}</li>
</div>
</ul>

  <hr />

  <!-- --------------------------------------------------------------- -->
  <h3>單選框</h3>
  <div>
  <div>我選擇的顏色是：</div>
  <input type="radio" v-model="likeColor" value="red"/>紅色
  <input type="radio" v-model="likeColor" value="yellow"/>黃色
  <input type="radio" v-model="likeColor" value="green"/>綠色
  <input type="radio" v-model="likeColor" value="blue"/>藍色
  </div>

  <h3>下拉式選單</h3>
<div>我選擇的邊框是：</div>
<select v-model="likeColorLine">
  <option value="redLine">紅色</option>
  <option value="yellowLine">黃色</option>
  <option value="greenLine">綠色</option>
  <option value="blueLine">藍色</option>
</select>


<!-- 把選擇的選項value值帶入class變數中,套用那個value的css -->
<!-- 如果要套用多個class,可以用陣列方式丟上去 -->
<div class="colorCanvas" :class="[likeColor , likeColorLine]"></div>


</template>

<style scoped>
.interestList{
  list-style: none;
}

.colorCanvas{
  height: 150px;
  width: 150px;
  border-radius: 10px;
  border: 1px solid rgb(206, 206, 206);
}

.red{
  background-color: red;
}

.green{
  background-color: green;
}

.blue{
  background-color: blue;
}

.yellow{
  background-color: yellow;
}

.redLine{
  border: 5px solid red;
}

.yellowLine{
  border: 5px solid yellow;
}
.greenLine{
  border: 5px solid green;
}
.blueLine{
  border: 5px solid blue;
}
</style>
