//在這邊設置routes的設置,包括名字,連結到哪一支檔案
//可以添加層次的分別

const routes = [
  {
    path: "/first",
    name: "first",
    component: () => import("../views/first.vue"),
  },
  {
    path: "/vfor",
    name: "vfor",
    component: () => import("../views/vfor.vue"),
  },
  {
    path: "/von",
    name: "von",
    component: () => import("../views/von.vue"),
  },
];
export default routes;
