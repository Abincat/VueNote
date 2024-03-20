<script setup>
//vue專屬的寫法,js程式碼寫在這邊
console.log("我的第一個vue組件");

//利用變數置換內文
let message = "Hello Vue!";

//在標籤內插入整個html,像是js中的innerHTML一樣
let lineMessage = "<u>Hello Vue!I have a LINE</u>";

//給標籤一個屬性名稱(記得一樣要加雙引號)
let name = "title";

let bigWrite = "<p>i want to big write</p>";

// 可以宣告變數為布林值
let colorBG = true;
</script>

<!-- ---------------------------------------------------------------------------- -->
<template>
  <!-- 代表這個組件中所有的html結構 -->
  <nav>我是導覽列</nav>
  <main>我是主內容</main>
  <h1>我是大標題</h1>

  <!-- 使用兩個大括號,放入在script裡面的變數名稱 -->
  <p>{{ message }}</p>
  <!-- 可以帶入js的內建韓式 -->
  <p>{{ bigWrite.toUpperCase() + "看我變成大寫了" }}</p>

  <!-- v-html -->
  <!-- p標籤包入有底線的u標籤,標籤裡面不用再打什麼東西 -->
  <p v-html="lineMessage"></p>

  <!-- v-bind:class(可以簡寫為:class) -->
  <!-- 直接把div標籤套上name這個變數,等於給他一個class名稱,可以透過變數一同設置css或其他功能 -->
  <!-- 記得!!套上去的話是變數裡面的字串名稱,不是變數名本身 -->
  <div v-bind:class="name">我是div,請開f12看我的屬性</div>
  <div :class="name">我是div,請開f12看我的屬性</div>
  <!--下面這句等於上面那句,只是一個是簡寫-->

  <!-- 這邊使用js中的三元運算子,判斷變數是true還是false,套用class的css -->
  <div :class="colorBG ? 'purple' : 'yellow'">
    我的背景我的背景我的背景我的背景我的背景我的背景我的背景我的背景我的背景我的背景我的背景我的背景
  </div>

  <!-- 以下是其他頁面練習的按鈕 -->
  <hr />
  <h3>以下是其他頁面練習的按鈕</h3>

  <Router-Link to="vfor" class="btn">v-for</Router-Link>

  <Router-Link to="von" class="btn">v-on</Router-Link>

  <Router-Link to="form" class="btn">form</Router-Link>

  <Router-Link to="template" class="btn">template</Router-Link>

  <Router-Link to="lifeweek" class="btn">lifeweek</Router-Link>

  <Router-Link to="api" class="btn">api</Router-Link>
</template>

<!-- ---------------------------------------------------------------------------- -->

<style scoped>
/* vue專屬的寫法,指限於這份檔案使用的css */
h1 {
  color: red;
}

.title {
  color: hotpink;
  font-size: 24px;
}

.purple {
  background-color: rgb(184, 138, 239);
}

.yellow {
  background-color: rgb(254, 243, 129);
}

.btn {
  font-size: 48px;
  color: hotpink;
  background-color: wheat;
  border-color: rgb(113, 8, 8);
  padding: 10px;
  margin: 20px;
  border-radius: 10px;
  text-decoration: none;
}

.btn:hover {
  color: cornflowerblue;
  box-shadow: 10px 5px 5px cornflowerblue;
}
</style>
