<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-info fixed-top">
      <a class="navbar-brand" href="#">DulceLand</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/nuevo-producto" class="nav-link">Nuevo Producto</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/compra" class="nav-link">Carrito</router-link>
          </li>
        </ul>

      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
</style>
