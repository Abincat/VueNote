<script setup>
let level = 10; //改這邊可以看到判斷為哪一個項目
let arr1s = ["HTML", "CSS", "JavaScript"];
let arr2s = ["Vue", "Angular"];
let arr3s = ["PHP", "MySQL", "Ajax"];
let arr4s = ["我啥都會", "什麼都難不倒我", "專業除蟲"];

let objs = {
  a: "Apple",
  b: "Banana",
  c: "Cherry",
  d: "Durian",
  e: "Eggplant",
};
</script>

<template>
  <h1>這邊要練習的是v-for/v-if/v-else</h1>
  <main>
    <!-- 這邊像原生js一樣判斷上面宣告的變數值,如果條件符合哪一個就顯示哪一個階級 -->
    <div v-if="level <= 4">
      入門
      <ul>
        <li v-for="(arr1, index) in arr1s">{{ index }} - {{ arr1 }}</li>
      </ul>
    </div>
    <div v-else-if="level === 5">
      中階
      <ul>
        <li v-for="(arr2, index) in arr2s">{{ index }} - {{ arr2 }}</li>
      </ul>
    </div>
    <div v-else-if="level <= 9">
      高手
      <ul>
        <li v-for="(arr3, index) in arr3s">{{ index }} - {{ arr3 }}</li>
      </ul>
    </div>
    <div v-else>
      大神
      <ul>
        <!--數值的話可以直接加減,原本是0,+1變成從1開始排-->
        <li v-for="(arr4, index) in arr4s">{{ index + 1 }}-{{ arr4 }}</li>
        <!-- 這邊的話就是只列出陣列內的每一個值,前面就不加index值了,前面就沒有括號跟index -->
        <li v-for="arr4 in arr4s">{{ arr4 }}</li>
      </ul>
    </div>
  </main>
  <hr />
  <!-- 如果用物件來跑迴圈的話 -->
  <!-- 第一個值是物件變數名,第二個值是物件的值 -->
  <div v-for="(value, key) in objs">{{ key }}-{{ value }}</div>
  <div v-for="(value, key) in objs">{{ key }}</div>
  <div v-for="(value, key) in objs">{{ value }}</div>
  <br />
  <!-- 名稱都是可以自定義的,只要前後對應的起來就可以了 -->
  <div v-for="what in objs">{{ what }}</div>
  <br />
  <div v-for="aaa in objs">{{ aaa }}</div>
</template>

<style scoped></style>
