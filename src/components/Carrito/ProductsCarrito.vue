<template>
  <div>
    <div
      class="card mb-3 bg-info text-light mr-5"
      style="max-width: 540px; max-height: auto;"
    >
      <div class="row no-gutters ">
        <div class="col-md-5">
          <img
            :src="product.image"
            class="card-img  "
            id="image-carrito"
            alt="..."
          />
        </div>
        <div class="col-md-7">
          <div class="card-body">
            <h3 class="card-title">{{ product.name }}</h3>
            <p class="card-text ">
              Precio: ${{ product.price.toLocaleString("de-DE") }}
            </p>
            <div class="row">
              <div class="col-5">
                <p class="card-text ">Cantidad: {{ product.amount }}</p>
              </div>
              <div class="col-7">
                <div class="btn-group">
                  <button
                    type="button"
                    class="btn btn-light btn-sm"
                    @click="addCartProduct"
                  >
                    Añadir
                  </button>
                  <button
                    type="button"
                    class="btn btn-light btn-sm"
                    @click="subsCartProduct"
                  >
                    Quitar
                  </button>
                </div>
              </div>
            </div>
            <p class="card-text pt-1 "></p>
            <p class="card-text ">
              Sub-Total: ${{
                (product.amount * product.price).toLocaleString("de-DE")
              }}{{ showDiscount() }}
            </p>

            <p class="card-text pt-1 ">Total: ${{ getDiscount(product) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getDiscount from '../../utils/utils';
export default {
  props: {
    product: { type: Object, required: true },
  },

  methods: {
    addCartProduct() {
      this.$store.dispatch("carrito/addProductToCarrito", { ...this.product });
    },
    subsCartProduct() {
      this.$store.dispatch("carrito/substractionProductsToCarrito", {
        ...this.product,
      });
    },
    applyDiscount() {
      const { amount, price, discount } = this.product;
      return (
        amount * price -
        (discount / 100) * (amount * price)
      ).toLocaleString("de-DE");
    },
    showDiscount() {
      if (this.product.discount > 0) {
        return ` - ${this.product.discount} % de Descuento`;
      }
    },
    getDiscount
  },
};
</script>

<style scoped>
#image-carrito {
  min-height: 250px;
  height: cover;
}
</style>
