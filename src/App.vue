<template>
  <div id="app">
    <nav>
      <img alt="TaxJar logo" src="./assets/taxjar.svg" class="logo">
      <router-link to="/products" exact>Products</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import Products from "./pages/Products.vue";
import PrimaryNavigation from "./components/PrimaryNavigation.vue";

export default {
  name: "app",
  components: {
    Products,
    PrimaryNavigation
  }
};
</script>

<style lang="scss">
@import "./styles/global.scss";

* {
  margin: 0;
}
</style>
