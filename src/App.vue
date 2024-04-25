<script setup></script>

<template>
  <header>
    <!-- router-link就是a標籤,用來進行連結的 -->
    <router-link to="/" class="title">返回首頁</router-link>
  </header>
  <!-- router-view就是link的頁面 -->
  <router-view></router-view>
</template>
<style scoped>
header {
  background-color: rgb(203, 203, 203);
  text-align: center;
}
.title {
  font-size: 52px;
  color: brown;
  text-decoration: none;
  font-weight: 600;
}
.title:hover {
  color: rgba(255, 170, 0, 0.914);
  animation: infinite color 1.5s;
}

@keyframes color {
  0% {
    color: rgb(255, 238, 0);
  }
  25% {
    color: rgb(0, 255, 72);
  }
  50% {
    top: 1px;
    color: rgb(0, 55, 255);
  }
  75% {
    bottom: 1px;
    color: rgb(195, 0, 255);
  }
  100% {
    top: 1px;
    color: rgb(255, 0, 30);
  }
}
</style>
