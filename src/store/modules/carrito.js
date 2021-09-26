import getDiscount from "../../utils/utils";
export const carritoModule = {
  namespaced: true,
  state: {
    listOfProductsCart: [],
  },

  getters: {
    cartTotal(state) {
      return state.listOfProductsCart.reduce((accumulator, product) => {
        accumulator += getDiscount(product)
        return accumulator
      }, 0);
    },
  },

  mutations: {
    ADD_PRODUCTS_CARRITO(state, newProduct) {
      state.listOfProductsCart.push(newProduct);
    },
    ADD_REPEAT_PRODUCTS_CARRITO(state, filterRepeatCarrito) {
      filterRepeatCarrito.amount++;
    },
    SUBSTRACTION_AMOUNT_PRODUCT(state, indexProduct) {
      state.listOfProductsCart[indexProduct].amount -= 1;
    },
    DELETE_PRODUCT_CARRITO(state, indexProduct) {
      state.listOfProductsCart.splice(indexProduct, 1);
    },
  },

  actions: {
    addProductToCarrito(context, product) {
      const filterRepeatCarrito = context.state.listOfProductsCart.find(
        (filterCarrito) => filterCarrito.name === product.name
      );

      if (filterRepeatCarrito) {
        context.commit("ADD_REPEAT_PRODUCTS_CARRITO", filterRepeatCarrito);
      } else {
        // eslint-disable-next-line no-unused-vars
        const { stock, ...newProduct } = product;
        context.commit("ADD_PRODUCTS_CARRITO", { ...newProduct, amount: 1 });
      }
    },

    substractionProductsToCarrito(context, product) {
      const indexProduct = context.state.listOfProductsCart.findIndex(
        (filterCarrito) => filterCarrito.name === product.name
      );
      if (context.state.listOfProductsCart[indexProduct].amount > 0) {
        context.commit("SUBSTRACTION_AMOUNT_PRODUCT", indexProduct);
      }
      if (context.state.listOfProductsCart[indexProduct].amount <= 0) {
        context.commit("DELETE_PRODUCT_CARRITO", indexProduct);
      }
    },
    cartPaymentButton() {
      
    },
  },
};
