<template>
  <div class='modal'>
      <div class="modal__content">

        <h2>Find categories</h2>
        <p>Simply describe your product to find its category</p>
        <input type="text" placeholder='Enter keywords, tags, etc.'>
        <div class="search__tags">
            <p class='tag__title'>Select quick tags:</p>
            <p class='tag'>Physical</p>
            <p class='tag'>Digital</p>
            <p class='tag'>Edible</p>
            <p class='tag'>Wearable</p>
            <p class='tag'>Medicine</p>
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
    },
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
        width: 700px;
        background: white;
        height: 700px;
        border: 1px solid $grayBorder;
        padding: 32px;
        h2 {
            font-size: 22px;
            // font-weight: $weightHeavy;
            color: $colorFontDark;
            margin-bottom: 6px;
        }
        p {
            color: $colorFontLight;
        }
        input {
            margin-top: 24px;
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
        .search__tags {
            @include display-flex(flex-start, center, row);
            margin-top: 24px;
            .tag__title {
                margin-right: 8px;
            }
            .tag {
                background-color: #EAF3FB;;
                color: $colorBlueDark;
                padding: 4px 8px;
                margin: 0 6px;
            }
        }
    }
}

</style>