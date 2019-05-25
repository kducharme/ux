<template>
  <div id="app">
    <nav>
      <img alt="TaxJar logo" src="./assets/taxjar.svg" class="logo">
      <div>
        <router-link to="/dashboard" exact>Dashboard</router-link>
        <router-link to="/transactions" exact>Transactions</router-link>
        <router-link to="/autofile" exact>AutoFile</router-link>
        <router-link to="/products" exact>Products</router-link>
        <router-link to="/filing-history" exact>Filing History</router-link>
        <router-link to="/account" exact>Account</router-link>
      </div>
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
@import './styles/mixins.scss';
@import './styles/variables.scss';


nav {
  height: 60px;
  border-bottom: 1px solid $grayBorder;
  @include display-flex(space-between, center, row);
  padding: 0 100px;

  .logo {
    height: 28px;
    width: auto;
  }
  a {
    color: #7a7b7d;
    padding-left: 32px;
    font-weight: $weightLight;
    font-size: 15px;
  }
  a:hover {
    color: $colorFontDark;
  }
  .router-link-active {
      font-weight: $weightMedium;
      color: $colorTaxJar;
    }
}
</style>
