<template>
  <div class="products">
    <div class="header">
      <div class="header__top">
        <div class="header__top--left">
          <h1>Products</h1>
          <p>Categorize your products</p>
        </div>
        <div class="header__top--right">
          <button>Request catagory</button>
          <button>Settings</button>
        </div>
      </div>
      <div class="header__bottom">
        <div class="announcement">
          <img alt="warning" src="../assets/update.svg">
          <p>{{ announcement }}</p>
        </div>
      </div>
    </div>
    <div class="filter">
      <button class='active'>All products</button>
      <button>Taxable</button>
      <button>Exemptions</button>
    </div>
    <div class="content">
      <DataTable />
    </div>
  </div>
</template>

<script>
import DataTable from "../components/DataTable.vue";

export default {
  name: "products",
  components: { DataTable },
  data() {
    return {
      activeTab: 'all',
      announcement: `We've imported 100 products and categorized them as "fully taxed". Please update your product categories for more accurate calculations.`
    }
  },
  methods: {
  }
};
</script>

<style lang="scss">
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

.products {
  height: 100%;
  background: $grayBackground;

  .header {
    padding: 40px 240px 32px;
    background: white;
    @include display-flex(flex-start, center, column);
    .header__top {
      width: 100%;
      @include display-flex(space-between, center, row);
      .header__top--left {
        @include display-flex(flex-start, flex-start, column);
        width: 50%;
        h1 {
          padding-bottom: 4px;
        }
        p {
          color: $colorFontMedium;
        }
      }
      .header__top--right {
        width: 50%;
        @include display-flex(flex-end, center, row);
        button {
          border: 1px solid $grayButtonBorder;
          font-size: 14px;
          height: 40px;
          padding: 0 16px;
          border-radius: 3px;
          margin-left: 12px;
          color: $colorFontMedium;
          font-weight: $weightMedium;
        }
        button:hover {
          background-color: $grayBorder;
        }
      }
    }
    .header__bottom {
      width: 100%;
      margin-top: 32px;
      .announcement {
        @include display-flex(flex-start, center, row);
        background: #E6EEF4;
        height: 48px;
        border-radius: 3px;
        padding: 0 20px;
      }
      img {
        padding-right: 12px;
      }
      p {
        color: #0B5C98;;
        span {
          font-weight: $weightHeavy;
        }
      }
    }
  }
  .filter {
    @include display-flex(flex-start, center, row);
    // border-bottom: 1px solid $grayBorder;
    background: white;
    padding: 0 240px;
    button {
      color: $colorFontLight;
      margin-right: 16px;
      padding-bottom: 16px;
    }
    .active {
      color: $colorTaxJar;
      border-bottom: 3px solid $colorTaxJar;
      font-weight: $weightHeavy;
    }
  }
  .content {
    padding: 0 240px;
    height: 100%;
    min-height: calc(100vh - 320px);
    
  }
}
</style>