//這邊是用來改router設定的
//都是既定的公式,第二逗點有很多種模式可以選擇,createWebHashHistory
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./route";

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
