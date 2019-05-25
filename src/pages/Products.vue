<template>
  <div class="products">
    <h1>Products</h1>
  </div>
</template>

<script>
export default {
  name: 'products',
  components: {
  }
}
</script>

<style lang="scss">
@import '../styles/variables.scss';
@import '../styles/mixins.scss';

.products {
  height: calc(100vh - 60px);
  background-color: $grayBackground;
}

</style>