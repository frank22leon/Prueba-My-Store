<template>
  <div>
    <h1 class="text-center p-4">Carrito</h1>
    <div class="row justify-content-center">
      <ProductsCarrito
        v-for="(product, $index) in $store.state.carrito.listOfProductsCart"
        :key="$index"
        :product="product"
      />
    </div>
    <div class="text-center  p-3">
      <p>Total a Pagar: ${{$store.getters['carrito/cartTotal'].toLocaleString('de-DE')}} </p>
      <button class="btn btn-info px-5" @click="cartPaymentButton">Pagar</button>
    </div>
  </div>
</template>

<script>
import ProductsCarrito from "../components/Carrito/ProductsCarrito.vue";
export default {
  components: {
    ProductsCarrito,
  },
  methods: {
    cartPaymentButton() {
      this.$store.dispatch('carrito/cartPaymentButton')
        this.$router.push('/inicio')
    },
  }
};
</script>
<style scoped></style>
