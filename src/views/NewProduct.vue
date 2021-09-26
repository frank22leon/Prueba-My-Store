<template>
  <div class="container">
    <h1 class="text-center p-3">Nuevo Producto</h1>
    <form @submit.prevent="addNewProduct">
      <div class="form-group">
        <label for="name">Nombre</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="product.name"
        />
      </div>

      <div class="form-group">
        <label for="category">Categoria</label>
        <select
          type="text"
          class="form-control"
          id="category"
          required
          v-model="product.category"
        >
          <option value="" selected disabled="">Elija una Opcion</option>
          <option value="Dulce">Dulce</option>
          <option value="Salado">Salado</option>
        </select>
      </div>

      <div class="form-group">
        <label for="image">Stock</label>
        <input
          type="number"
          class="form-control"
          id="image"
          required
          v-model.number="product.stock"
        />

        <div class="form-group">
          <label for="price">Precio</label>
          <input
            type="number"
            min="100"
            max="9999"
            step="100"
            class="form-control"
            id="name"
            required
            v-model.number="product.price"
          />
        </div>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="offer"
          v-model="product.offer"
        />
        <label class="form-check-label" for="offer">
          Oferta
        </label>
      </div>

      <div class="form-group" v-if="product.offer">
        <label for="discount"> Descuento</label>
        <input
          type="text"
          class="form-control"
          id="discount"
          required
          v-model="product.discount"
        />
      </div>
      <div class="pt-2">
        <button class="btn btn-info" type="submit">Crear Producto</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    product: {
      name: null,
      category: null,
      offer: false,
      discount: null,
      price: null,
      image: "",
    },
  }),
  methods: {
    addNewProduct() {
      this.$store.dispatch("products/addProduct", { ...this.product });
      this.$router.push("/inicio");
    },
  },
};
</script>

<style></style>
