<template>
  <nav>
    <img alt="TaxJar logo" src="../assets/taxjar.svg" class='logo' />
    <!-- <router-link @click.native="resetActive" to="/products" exact>Products</router-link> -->
  </nav>
</template>

<script>
export default {
  name: "PrimaryNavigation",
  components: {}
};
</script>

<style lang="scss">

nav {
  height: 50px;
}

.logo {
  height: 30px;
  width: auto;
}

</style>

