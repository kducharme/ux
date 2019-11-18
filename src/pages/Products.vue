
<template>
  <div class="products">
    <Details :details="this.detailsActive" :code="this.activeCode" @hideDetails="hideDetails" />

    <!-- Page header -->
    <Header
      :headerContent="this.headerContent"
    />

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
import Header from "../components/Header.vue";

export default {
  name: "products",
  components: { Table, Filters, Details, Header },
  data() {
    return {
      allCodes: [],
      detailsActive: false,
      activeCode: {},
      activePage: "Product Taxability",
      activeCategory: "Digital & Software",
      search: "",
      results: 0,
      headerContent: {
        title: "Product exemptions",
        tabOne: "Map produdcts",
        tabTwo: "Tax code library"
      }
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
  .content {
    @include display-flex(flex-start, flex-start, row);
    padding: 40px 100px 0;
    min-height: calc(100vh - 175px);
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
          color: $colorFontLight;
          margin-bottom: 12px;
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