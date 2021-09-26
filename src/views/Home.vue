<template>
  <div>
    <h1 class="text-center p-3">Productos</h1>
    <div class="row px-4">
      <div class="col col-md-8">
        <div class="form-group pb-3">
          <label for="name"></label>
          <input
            type="text"
            class="form-control"
            id="name"
            v-model="nameFilter"
          />
        </div>
      </div>
      <div class="col col-md-4">
        <div class="form-group">
          <label for="category"></label>
          <select
            type="text"
            class="form-control"
            id="category"
            required
            v-model="productSelectedFilter"
          >
            <option value="" selected disabled="">Elija una Opcion</option>
            <option value="Dulce">Productos Dulces</option>
            <option value="Salado">Productos Salados</option>
            <option value="Descuento">Productos con Descuento</option>
            <option value="Todos">Todos los Productos</option>
          </select>
        </div>
      </div>
    </div>
    <div class="row">
      <div
        class="col-sm mb-4  "
        v-for="(product, $index) in filteredProductsInput()"
        :key="$index"
      >
        <div class="card-deck">
          <ProductsHome :product="product" class="mx-auto" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductsHome from "../components/Products/ProductsHome.vue";
export default {
  data: () => ({
    nameFilter: "",
    productSelectedFilter: "",
  }),
  components: {
    ProductsHome,
  },
  methods: {
    filteredProductsInput() {
      return this.$store.state.products.listOfProducts.filter((product) => {
        if (
          product.name.toLowerCase().indexOf(this.nameFilter.toLowerCase()) >= 0
        ) {
          switch (this.productSelectedFilter) {
            case "Dulce":
              if (product.category === "Dulce") return product;
              break;
            case "Salado":
              if (product.category === "Salado") return product;
              break;
            case "Descuento":
              if (product.offer === true) return product;
              break;
            default:
              return product;             
          }
        }
      });
    },
  },
};
</script>

<style></style>
