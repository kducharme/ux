<template>
  <div>
    <p>hi</p>
    <div v-for="product in products" :key="product.id">
      <p>{{product.name}}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "DataTable",
  components: {},
  data() {
    return {};
  },
  methods: {
    ...mapActions(["getProducts"]),
    getProductData: function() {
      this.getProducts();
    }
  },
  computed: {
    ...mapState(["products"])
  },
  beforeMount() {
    this.getProductData();
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

table {
  width: 100%;
  thead {
    height: 30px;
  }
}
</style>