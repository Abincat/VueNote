<script setup>
import {ref} from "vue";

//就算是CSS也可以設定初始為空值,就不會改到原本的CSS
let changeImg = ref("")

let change=function(){
  changeImg.value="changeImg"
}


</script>

<template>
  <div class="mainBlock">我是主視窗元件
    <span @click="change" >Click Me!!</span>
    <div class="changeBlock" :class="changeImg"></div>
  </div>
</template>

<style scoped>

.mainBlock{
  background-color: rgb(248, 198, 111);
  height: 300px;
  width: 100%;
  text-align: center;
  font-size: 40px;
}

span{
  color: brown;
  font-weight: bold;
  cursor: pointer;
}

span:hover{
  text-shadow: 5px 5px 5px rgb(193, 100, 7);
  border: 3px solid rgb(193, 100, 7);
  border-radius: 10px ;
}

.changeBlock{
background-image: url("../../assets/images/imgA.jpg");
  width: auto;
  height: 230px;
}

.changeImg{
  background-image: url("../../assets/images/imgB.jpg");
  width: auto;
  height: 230px;
  background-position:center 30%;
}

</style>
