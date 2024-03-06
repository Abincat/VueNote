<script setup>
//如果要使用其他元件的變數值,要用內建函式
//如果有多個定義屬性的話直接逗號寫在後面,不用重新再呼叫一次函式
defineProps(["secondTitle","backgroundColor","color"]);


</script>

<template>
  <div class="nav">我是導覽列元件
    <!-- 這邊新增一個按鈕,要用到上一層的函式,所以用$emit去對應到上一層的函式 -->
    <span @click="$emit('changeNav')">Click進行轉換</span>
  </div>

  <!-- 這邊可套用其他元件設定的值,利用變數去做可更動的設計 -->
  <!-- style後面="屬性的名稱":"對應的值",記得要加大括號!! --> 
  <div class="secondTitleBlock" :style="{backgroundColor:backgroundColor}">
  <p :style="{color:color}">{{ secondTitle }}</p>
  </div>

</template>

<style scoped>
.nav{
  background-color: rgb(248, 111, 111);
  height: 80px;
  width: 100%;
  text-align: center;
  font-size: 40px;
}

.secondTitleBlock{
  display: flex;
  justify-content: center;
}

p{
  text-align: center;
  font-size: 20px;
}

span{
  font-size: 30px;
  color: white;
  font-weight: bold;
}

span:hover{
  border: 3px solid white;
  border-radius: 10px;
  cursor: pointer;
}

</style>