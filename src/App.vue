<template>
  <div id="app">
    <Navbar />
    <div class="container pt-5">
      <transition name="mi-transicion">
        <router-view />
      </transition>
    </div>
      <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
.mi-transicion-enter-active,
.mi-transicion-leave-active {
  transition: opacity 0.5s, padding 0.5s;
}
.mi-transicion-enter,
.mi-transicion-leave-to {
  opacity: 0;
  padding: 5px;
}
</style>
