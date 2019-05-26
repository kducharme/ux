<template>
  <table>
    <thead>
      <tr>
        <!-- <th>
          <input type="checkbox">
        </th>-->
        <th>Product name</th>
        <th>SKU</th>
        <th>Cateogry</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <!-- <td>
          <input type="checkbox">
        </td>-->
        <td>{{ product.name }}</td>
        <td>{{ product.sku }}</td>
        <td>
          <div :class="[product.category === 'Uncategorized' ? 'uncategorized' : 'categorized']">{{ product.category }}</div>
        </td>
      </tr>
    </tbody>
  </table>
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
  margin-top: 32px;
  width: 100%;
  border: 1px solid $grayBorder;
  background: white;
  border-spacing: 0px;
  border-radius: 3px;
  font-size: 14px;
  font-weight: $weightLight;
  thead {
    text-align: left;
    background-color: $grayBackground;
    border: none !important;
    border-bottom: 1px solid $grayBorder;
    color: $colorFontLight;
    font-weight: $weightHeavy;
    tr {
      height: 48px;
      border: none;
    }
    th {
      padding: 0 16px;
      border-bottom: 1px solid $grayBorder;
    }
  }
  tbody {
    tr {
      height: 44px;
    }
    td {
      color: $colorFontDark;
      border-bottom: 1px solid $grayBorder;
      padding: 0 16px;
    }
    .uncategorized {
      background: #eeeeee;
      color: $colorFontLight;
      padding: 4px 10px;
      border-radius: 16px;
      font-size: 13px;
      font-weight: $weightMedium;
      
    }
  }
}
</style>