import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { carritoModule } from "./modules/carrito";
import { productsModule } from "./modules/products";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    carrito: carritoModule,
    products: productsModule,
  },
});
