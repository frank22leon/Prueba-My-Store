<template>
  <div>
    <div class="card " style="width: 18rem;">
      <img :src="product.image" class="card-img-top p-3" style="height:300px;" alt="..." />
      <div class="card-body">
        <h4>{{ product.name }}</h4>
      </div>
      <ul class="list-group ">
        <li class="list-group-item">Categoria: {{product.category}}</li>
        <li class="list-group-item">Precio: ${{product.price.toLocaleString('de-DE')}}</li>
        <li class="list-group-item">Descuento: {{product.offer ? `${product.discount}%` : `Sin Descuento`}}</li>
        <button class="btn btn-info" @click="addProductToCarrito"> Comprar</button>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: { type: Object, required: true },
  },

  methods: {
    addProductToCarrito() {
      this.$store.dispatch("carrito/addProductToCarrito", this.product)
    },
  }
};
</script>

<style></style>
