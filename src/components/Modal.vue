<template>
  <div class="modal">
    <div class="modal__content">
      <div class="modal__content--left">
        <h2>Describe your product(s)</h2>
        <p>Simply search for your product category as if you were using Google.</p>
        <input type="text" placeholder="Enter keywords, tags, etc.">
        <div class="suggestions">
          <p
            class="suggestions__title"
          >Or, answer a few of the questions to find what you're looking for.</p>
          <p class="suggest">Digital product (SaaS, gift cards, etc.)</p>
          <p class="suggest">Edible (food, drink, etc.)</p>
          <p class="suggest">Wearable (clothing, accessories, etc.)</p>
          <p class="suggest">Medical (medicine, etc.)</p>
        </div>
      </div>
      <div class="modal__content--right">
        <div class="results">
          <h4>Matching categories (2,000 total)</h4>
          <div class="result">
            <p class="result__title">Coffee beans, unroasted</p>
            <p
              class="result__description"
            >Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor...</p>
            <button>Apply category</button>
          </div>
          <div class="result">
            <p class="result__title">Coffee beans, roasted</p>
            <p
              class="result__description"
            >At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praes...</p>
            <button>Apply category</button>
          </div>
          <div class="result">
            <p class="result__title">Coffee, ready to serve</p>
            <p
              class="result__description"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...</p>
            <button>Apply category</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Modal",
  components: {},
  data() {
    return {
      allCategories: "",
      search: ""
    };
  },
  methods: {
    ...mapActions(["getCategories"]),
    getCategoryData: function() {
      fetch(`http://localhost:3000/categories`)
        .then(r => r.json())
        .then(categories => {
          this.allCategories = categories;
        });
    }
  },
  computed: {
    searchResults() {
      //   if (!this.search) return this.allProducts;
      //   return this.allProducts.filter(product => {
      //     if (product.name.toLowerCase().includes(this.search.toLowerCase())) {
      //       return product;
      //     }
      //   });
    }
  },
  beforeMount() {
    this.getCategoryData();
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

.modal {
  z-index: 9999;
  width: 100vw;
  margin-top: -60px;
  background: white;
  @include display-flex(center, flex-start, row);
  padding: 60px;
  .modal__content {
    @include display-flex(center, flex-start, row);
    width: 900px;
    background: white;
    height: 600px;
    border: 1px solid $grayBorder;
    .modal__content--left {
      width: 60%;
      padding: 32px;
      h2 {
        font-size: px;
        // font-weight: $weightHeavy;
        color: $colorFontDark;
        margin-bottom: 6px;
      }
      p {
        color: $colorFontLight;
        line-height: 1.4;
      }
      input {
        margin-top: 20px;
        height: 48px;
        width: 100%;
        border: 1px solid $grayBorder;
        border-radius: 3px;
        font-size: 14px;
        padding-left: 16px;
      }
      input::placeholder {
        color: rgb(167, 167, 167);
      }
      .suggestions {
        margin-top: 48px;
        height: 300px;
        .suggestions__title {
          color: $colorFontLight;
          line-height: 1.4;
          margin-bottom: 16px;
        }
        .suggest {
          @include display-flex(flex-start, center, row);
          border: 1px solid $grayBorder;
          border-radius: 3px;
          height: 48px;
          padding-left: 16px;
          font-size: 14px;
          color: $colorFontMedium;
          margin-top: 8px;
        }
      }
    }
    .modal__content--right {
      height: 100%;
      width: 40%;
      background: $grayBackground;
      border-left: 1px solid $grayBorder;
      .results {
        padding: 32px;
        h4 {
          color: $colorFontLight;
          font-weight: $weightMedium;
          font-size: 13px;
          border-bottom: 1px solid $grayBorder;
          padding-bottom: 12px;
          margin-bottom: 16px;
        }
        .result {
          border: 1px solid $grayBorder;
          background: white;
          border-radius: 3px;
          padding: 16px;
          font-size: 13px;
          margin-bottom: 12px;
          .result__title {
            font-weight: $weightMedium;
            padding-bottom: 6px;
          }
          .result__description {
            font-weight: $weightLight;
            color: $colorFontLight;
          }
          button {
            border: 1px solid $grayBorder;
            height: 26px;
            border-radius: 3px;
            margin-top: 12px;
            font-size: 12px;
            font-weight: $weightMedium;
            color: $colorBlueDark;
          }
        }
      }
    }
  }
}
</style>