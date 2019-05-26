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
          <button>Category settings</button>
        </div>
      </div>
      <div class="header__bottom">
        <div class="announcement">
          <img alt="warning" src="../assets/warn.svg">
          <p>
            You have
            <span>43 uncategorized products</span>. Please categorize your products now to ensure that the correct tax code is applied.
          </p>
        </div>
      </div>
    </div>
    <div class="filter">
      <router-link :to="'/products/' + activeTab">All products</router-link>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: "products",
  components: {},
  // data() {
  //   return {
  //     activeTab: ''
  //   }
  // },
  // methods: {
  //   setActiveTab: this.activeTab
  // }
};
</script>

<style lang="scss">
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

.products {
  height: calc(100vh - 60px);
  background: $grayBackground;

  .header {
    padding: 48px 180px 56px;
    background: white;
    border-bottom: 1px solid $grayBorder;
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
          border: 1.5px solid $grayButtonBorder;
          font-size: 15px;
          height: 46px;
          padding: 0 16px;
          border-radius: 3px;
          margin-left: 16px;
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
      margin-top: 24px;
      .announcement {
        @include display-flex(flex-start, center, row);
        background: $colorFailureLight;
        height: 40px;
        border-left: 3px solid $colorFailure;
        border-radius: 3px;
        padding: 0 12px;
      }
      img {
        padding-right: 6px;
      }
      p {
        color: $colorFailure;
        span {
          font-weight: $weightHeavy;
        }
      }
    }
  }
  .filter {
    height: 56px;
    border-bottom: 1px solid $grayBorder;
    background: white;
  }
  .content {
    background: white;
  }
}
</style>