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
];
export default routes;
