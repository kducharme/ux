<template>
  <div>
    <div class="table__header">
      <p>Showing {{tableResults.length}} of {{allProducts.length}} products</p>
      <input type="text" placeholder="Search products" v-model="search">
    </div>
    <table>
      <colgroup>
        <col span="1" style="width: 4%;">
        <col span="1" style="width: 58;">
        <col span="1" style="width: 10%;">
        <col span="1" style="width: 15%; min-width: 110px;">
      </colgroup>
      <thead>
        <tr>
          <th>
            <div class="product__select">
              <input type="checkbox" id="selectAll">
              <label for="selectAll"></label>
            </div>
          </th>
          <th class="product__name">Product name</th>
          <th class="product__sku">SKU</th>
          <th class="product__category">Cateogry</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in tableResults" :key="product.index">
          <td>
            <div class="product__select">
              <input type="checkbox" :value="product.index" :id="product.index">
              <label :for="product.index"></label>
            </div>
          </td>
          <td class="product__name">{{ product.name }}</td>
          <td class="product__sku">{{ product.sku }}</td>
          <td>
            <div
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
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .uncategorized {
      width: 104px !important;
      background: #eeeeee;
      color: $colorFontLight;
      padding: 4px 10px;
      border-radius: 16px;
      font-size: 13px;
      font-weight: $weightMedium;
    }
  }
}

/* Checkboxes */

[type="checkbox"]:checked,
[type="checkbox"]:not(:checked) {
  position: absolute;
  left: -9999px;
}

[type="checkbox"]:checked + label,
[type="checkbox"]:not(:checked) + label {
  position: relative;
  padding-left: 28px;
  cursor: pointer;
  color: #55565a;
}

[type="checkbox"]:checked + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 16px;
  height: 16px;
  border: 1.5px solid #0b5c98;
  background: #0b5c98;
  border-radius: 3px;
}

[type="checkbox"]:not(:checked) + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 16px;
  height: 16px;
  border: 1.5px solid #b7b7b8;
  border-radius: 3px;
}

/* checked mark aspect */
[type="checkbox"]:not(:checked) + label:after,
[type="checkbox"]:checked + label:after {
  content: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  fill='white' width='22' height='20' stroke='white' stroke-width='.8' viewBox='0 0 26 26'><path d='M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z'/></svg>");
  position: absolute;
  top: 0em;
  left: -0.1em;
  color: white;
  transition: all 0.25s;
}

[type="checkbox"]:not(:checked) + label:after {
  opacity: 0;
  -webkit-transform: scale(0);
  transform: scale(0);
}
[type="checkbox"]:checked + label:after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}
</style>