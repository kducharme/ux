<template>
  <nav>
    <img alt="TaxJar logo" src="../assets/taxjar.svg" class="logo">
    <router-link @click.native="resetActive" to="/products" exact>Dashboard</router-link>
    <router-link @click.native="resetActive" to="/products" exact>Products</router-link>
    <router-link @click.native="resetActive" to="/products" exact>Products</router-link>
    <router-link @click.native="resetActive" to="/products" exact>Products</router-link>
    <router-link @click.native="resetActive" to="/products" exact>Products</router-link>
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

</style>

