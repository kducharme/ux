<template>
  <div class="header">
    <div class="header__top">
      <h1>{{ headerContent.title }}</h1>
    </div>
    <div class="header__bottom">
      <div class="tab inactive">{{ headerContent.tabOne }}</div>
      <div class="tab active">{{ headerContent.tabTwo }}</div>
      <div class="tab inactive">{{ headerContent.tabThree }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
  data() {
    return {
      activeTab: "all"
    };
  },
  props: {
    headerContent: {
      type: Object
    }
  }
};
</script>

<style lang="scss">
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

.header {
  padding: 20px 100px 0px;
  border-bottom: 1px solid $grayBorder;
  @include display-flex(flex-start, center, column);
  width: 100%;
  .header__top {
    width: 100%;
    h1 {
      font-size: 18px;
      color: $colorFontDark;
      margin-bottom: 32px;
    }
  }
  .header__bottom {
    @include display-flex(flex-start, center, row);
    width: 100%;
    .tab {
      font-size: 14px;
      color: #88888b;
      margin-right: 28px;
      padding-bottom: 16px;
    }
    .inactive {
      margin-bottom: 3px;
    }
    .active {
      color: $colorFontDark;
      border-bottom: 3px solid $colorTaxJar;
      padding-bottom: -3px;
      font-weight: $weightLight;
    }
    div:hover {
      cursor: pointer;
    }
  }
}
</style>