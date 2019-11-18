<template>
  <div class="subNav">
    <div class="subNav__top">
      <h1>{{ headerContent.title }}</h1>
    </div>
    <div class="subNav__bottom">
      <div class="inactive"> {{ headerContent.tabOne }}</div>
      <div class="active">{{ headerContent.tabTwo }}</div>
    </div>
  </div>
</template>

<script>
import Modal from "../components/Modal.vue";

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

.subNav {
  padding: 20px 100px 0px;
  border-bottom: 1px solid $grayBorder;
  @include display-flex(flex-start, center, column);
  .subNav__top {
    width: 100%;
    h1 {
      font-size: 18px;
      color: $colorFontDark;
      margin-bottom: 24px;
    }
  }
}
.subNav__bottom {
  @include display-flex(flex-start, center, row);
  width: 100%;
  div {
    font-size: 14px;
    color: #88888b;
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
</style>