import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  { path: "", redirect: "/inicio" },
  { path: "*", redirect: "/inicio" },

  {
    path: "/Inicio",
    name: "Home",
    alias: ["/home"],
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/nuevo-producto",
    name: "NewProduct",
    component: () => import("../views/NewProduct.vue"),
  },
  {
    path: "/compra",
    name: "Carrito",
    alias: ["/carro", "/carrito"],
    component: () => import("../views/Carrito.vue"),
  },
];
//
const router = new VueRouter({ 
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
