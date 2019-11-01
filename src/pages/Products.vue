<template>
  <div class="products">
    <div class="header">
      <div class="header__top">
        <h1>Product exemptions</h1>
      </div>
      <div class="header__bottom">
        <div>Map products</div>
        <div class="active">Tax code library</div>
      </div>
    </div>
    <div class="content">
      <div class="content__left">
        <Library />
      </div>
      <div class="content__right">
        Filters will go here
      </div>
    </div>
  </div>
</template>

<script>
import Library from "../components/Library.vue";

export default {
  name: "products",
  components: { Library },
  data() {
    return {
      activeTab: "all",
      showModal: false
    };
  },
  methods: {}
};
</script>

<style lang="scss">
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

.products {
  height: 100vh;
  .header {
    padding: 24px 100px 0px;
    background: $grayBackground;
    border-bottom: 1px solid $grayBorder;
    @include display-flex(flex-start, center, column);
    .header__top {
      width: 100%;
      h1 {
        font-size: 18px;
        color: $colorFontDark;
        margin-bottom: 28px;
      }
    }
  }
  .header__bottom {
    @include display-flex(flex-start, center, row);
    width: 100%;
    div {
      font-size: 14px;
      color: #88888B;
      margin-right: 24px;
      padding-bottom: 16px;
      span {
        background: $grayBorder;
        padding: 2px 4px;
        font-size: 12px;
        font-weight: $weightMedium;
        border-radius: 5px;
        margin-left: 2px;
      }
    }
    .active {
      color: $colorFontDark;
      border-bottom: 3px solid $colorTaxJar;
      font-weight: $weightLight;
    }
    div:hover {
      cursor: pointer;
    }
  }
  .content {
    @include display-flex(flex-start, flex-start, row);
    padding: 16px 100px 0;
    min-height: calc(100vh - 320px);
    .content__left {
      width: 70%;
      margin-right: 56px;
    }
    .content__right {
      width: 30%;
    }
  }
}
</style>