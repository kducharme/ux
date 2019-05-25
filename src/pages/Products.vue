<template>
  <div class="products">
    <div class="header">
      <div class="left">
        <h1>Products</h1>
        <p>Categorize your products</p>
      </div>
      <div class="right">
        <button>Request catagory</button>
        <button>Category settings</button>
      </div>
    </div>
    <div class="content">

    </div>
  </div>
</template>

<script>
export default {
  name: "products",
  components: {}
};
</script>

<style lang="scss">
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

.products {
  height: calc(100vh - 60px);
  background: $grayBackground;

  .header {
    padding: 48px 180px 64px;
    background: white;
    border-bottom: 1px solid $grayBorder;
    @include display-flex(flex-start, center, row);
    .left {
      @include display-flex(flex-start, flex-start, column);
      width: 50%;
      h1 {
        padding-bottom: 8px;
      }
      p {
        color: $colorFontMedium;
      }
    }
    .right {
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
  .content {
    background: white;
  }
}
</style>