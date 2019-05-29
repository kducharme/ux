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
      <div class="active">All products</div>
      <div>
        Taxable
        <span>100</span>
      </div>
      <div>
        Exempt
        <span>0</span>
      </div>
      <div>
        Reduced
        <span>0</span>
      </div>
    </div>
    <div class="content">
      <DataTable/>
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
      activeTab: "all",
      announcement: `We've imported 100 products and auto-categorized them as "fully taxed".  Please update your  categories for more accurate calculations.`
    };
  },
  methods: {}
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
        background: #e6eef4;
        height: 48px;
        border-radius: 3px;
        padding: 0 20px;
      }
      img {
        padding-right: 12px;
      }
      p {
        color: #0b5c98;
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
    div {
      font-size: 14px;
      color: $colorFontLight;
      margin-right: 24px;
      padding-bottom: 16px;
      span {
        background: $grayBorder;
        color: $colorFontLight;
        padding: 2px 4px;
        font-size: 12px;
        font-weight: $weightMedium;
        border-radius: 5px;
        margin-left: 2px;
      }
    }
    .active {
      color: $colorTaxJar;
      border-bottom: 3px solid $colorTaxJar;
      font-weight: $weightHeavy;
    }
    div:hover {
      cursor: pointer;
    }
  }
  .content {
    padding: 0 240px;
    height: 100%;
    min-height: calc(100vh - 320px);
  }
}
</style>