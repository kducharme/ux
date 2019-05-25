<template>
  <nav>
    <img alt="TaxJar logo" src="../assets/taxjar.svg" class="logo">
    <router-link @click.native="resetActive" to="/products" exact>Products</router-link>
    <router-view/>
  </nav>
</template>

<script>
export default {
  name: "PrimaryNavigation",
  components: {}
};
</script>

<style lang="scss">
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

nav {
  height: 60px;
  border-bottom: 1px solid $grayBorder;
  @include display-flex(flex-start, center, row);
  padding: 0 100px;
}

.logo {
  height: 30px;
  width: auto;
}
</style>

