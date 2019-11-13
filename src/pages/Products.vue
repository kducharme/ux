
<template>
  <div class="products">
    <Details :details="this.detailsActive" :code="this.activeCode" @hideDetails="hideDetails" />

    <!-- Page subnavigation -->
    <div class="subNav">
      <div class="subNav__top">
        <h1>{{ this.activePage }}</h1>
      </div>
      <div class="subNav__bottom">
        <div class="inactive">Map products</div>
        <div class="active">Tax code library</div>
      </div>
    </div>

    <!-- Main content -->
    <div class="content">
      <!-- Left column -->
      <div class="column__left">
        <Table
          @showDetails="showDetails"
          @activeCode="codeDetails"
          @tableResults="tableResults"
          :allCodes="this.allCodes"
          :searchTerm="this.search"
        />
      </div>

      <!-- Right column -->
      <div class="column__right">
        <!-- Table filters -->
        <div class="title"></div>
        <div class="filters">
          <p class="filters__title">Search tax codes</p>
          <div class="filters__search .align__left">
            <img src="../assets/search.svg" class="filters__search--icon" />
            <input type="text" placeholder="Search codes..." v-model="search" />
          </div>
          <p class="filters__title">Filter by category</p>
          <Filters :allCodes="this.allCodes" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Table from "../components/Table.vue";
import Filters from "../components/Filters.vue";
import Details from "../components/Details.vue";

export default {
  name: "products",
  components: { Table, Filters, Details },
  data() {
    return {
      allCodes: [],
      detailsActive: false,
      activeCode: {},
      activePage: "Product Taxability",
      activeCategory: "Digital & Software",
      search: "",
      results: 0
    };
  },
  methods: {
    getCodeData: function() {
      fetch(`http://localhost:3000/codes`)
        .then(r => r.json())
        .then(codes => {
          this.allCodes = codes;
        });
    },
    showDetails: function(value) {
      this.detailsActive = value;
    },
    tableResults: function(value) {
      this.results = value;
      // console.log(this.results)
    },
    hideDetails: function(value) {
      this.detailsActive = value;
    },
    codeDetails: function(value) {
      this.activeCode = value;
    }
  },
  beforeMount() {
    this.getCodeData();
  },
  updated() {
    this.results = document.getElementById("tableBody").childElementCount;
  }
};
</script>

<style lang="scss">
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

.products {
  height: 100vh;
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

  .content {
    @include display-flex(flex-start, flex-start, row);
    padding: 40px 100px 0;
    min-height: calc(100vh - 320px);
    background: $grayBackground;
    .column__right {
      border: 1px solid $grayBorder;
      padding: 24px;
      background: white;
      width: 28%;
      position: -webkit-sticky;
      position: sticky;
      top: 38px;
      margin-left: 40px;
      .filters {
        width: 100%;
        .filters__title {
          font-weight: $weightHeavy;
          color: $colorFontMedium;
          margin-bottom: 16px;
          font-size: 13px;
        }
        .filters__search {
          margin-bottom: 32px;
        }
        .filters__search .filters__search--icon {
          position: absolute;
          padding: 13px 12px;
          pointer-events: none;
        }
        .filters__search--icon {
          left: 22px;
        }
        input {
          height: 40px;
          width: 100%;
          font-size: 13px;
          border-radius: 3px;
          border: 1px solid $grayBorder;
          padding-left: 32px;
        }
        input:focus {
          border: 1px solid $colorTaxJar;
          transition: ease-in-out, border-color 0.2s ease-in-out;
        }
      }
    }
    .column__left {
      width: 80%;
    }
  }
}
</style>