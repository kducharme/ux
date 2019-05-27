<template>
  <div>
    <div class="table__header">
      <p>Showing {{tableResults.length}} of {{allProducts.length}} products</p>
      <input type="text" placeholder="Search products" v-model="search">
    </div>
    <table>
      <colgroup>
        <col span="1" style="width: 70;">
        <col span="1" style="width: 15%;">
        <col span="1" style="width: 15%;">
      </colgroup>
      <thead>
        <tr>
          <!-- <th>
          <input type="checkbox">
          </th>-->
          <th class="product__name">Product name</th>
          <th class="product__sku">SKU</th>
          <th class="product__category">Cateogry</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in tableResults" :key="product.id">
          <!-- <td>
          <input type="checkbox">
          </td>-->
          <td class="product__name">{{ product.name }}</td>
          <td class="product__sku">{{ product.sku }}</td>
          <td>
            <div
              class="product__category"
              :class="[product.category === 'Uncategorized' ? 'uncategorized' : 'categorized']"
            >{{ product.category }}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "DataTable",
  components: {},
  data() {
    return {
      allProducts: "",
      search: ""
    };
  },
  methods: {
    ...mapActions(["getProducts"]),
    getProductData: function() {
      fetch(`http://localhost:3000/products`)
        .then(r => r.json())
        .then(products => {
          this.allProducts = products;
        });
    }
  },
  computed: {
    ...mapState(["products"]),
    tableResults() {
      if (!this.search) return this.allProducts;
      return this.allProducts.filter(product => {
        return product.name.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
  beforeMount() {
    this.getProductData();
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

.table__header {
  @include display-flex(space-between, center, row);
  margin: 24px 0;
  input {
    height: 32px;
    width: 280px;
    padding: 0 12px;
    font-size: 13px;
  }
}

table {
  width: 100%;
  border: 1px solid $grayBorder;
  table-layout: fixed;
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
    .product__name {
      // width: 60%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .product__sku {
      // width: 30%;
    }
    .product__category {
      // width: 200px;
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