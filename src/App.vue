<template>
  <div id="app">
    <PrimaryNavigation />
    <Products />
  </div>
</template>

<script>
import Products from './pages/Products.vue'
import PrimaryNavigation from './components/PrimaryNavigation.vue'

export default {
  name: 'app',
  components: {
    Products,
    PrimaryNavigation
  }
}
</script>

<style lang="scss">
@import './styles/global.scss';

* {
  margin: 0;
}

</style>
