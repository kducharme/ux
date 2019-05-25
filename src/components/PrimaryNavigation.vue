<template>
  <nav>
    <img alt="TaxJar logo" src="../assets/taxjar.svg" />
    <router-link @click.native="resetActive" to="/products" exact>Products</router-link>
  </nav>
</template>

<script>
export default {
  name: "PrimaryNavigation",
  components: {}
};
</script>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>

