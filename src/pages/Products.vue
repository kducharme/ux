<template>
  <div class="products">
    <Details :details="this.detailsActive" :code="this.activeCode" @hideDetails="hideDetails" />

    <!-- Page subnavigation -->
    <div class="subNav">
      <div class="subNav__top">
        <h1>Product exemptions</h1>
      </div>
      <div class="subNav__bottom">
        <div>Map products</div>
        <div class="active">Tax code library</div>
      </div>
    </div>

    <!-- Main content -->
    <div class="content">
      <!-- Left column -->
      <div class="column__left">
        <!-- Header section -->
        <div class="header">
          <div class="header__back">
            <img src="../assets/chevron__back.svg" class="icon" />
            <p>Back to all</p>
          </div>
          <!-- <div class="header__icon">
            <img src="../assets/digital.svg" class="icon" />
          </div>-->
        </div>

        <!-- Table filters -->
        <div class="sticky">
          <div class="title">
            <h2>{{ activeCategory }}</h2>
            <p>Showing {{ this.results }} of {{allCodes.length}} tax codes</p>
          </div>
          <div class="filters">
            <div class="filters__search">
              <input type="text" placeholder="Filter codes by name..." v-model="search" />
            </div>
            <Filters :allCodes="this.allCodes" />
          </div>
        </div>
      </div>

      <!-- Right column -->
      <div class="column__right">
        <Table
          @showDetails="showDetails"
          @activeCode="codeDetails"
          @tableResults="tableResults"
          :allCodes="this.allCodes"
          :searchTerm="this.search"
        />
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
      activeTab: "all",
      detailsActive: false,
      activeCode: {},
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

.filter__title {
  font-weight: $weightHeavy;
  color: #88888b;
  margin-bottom: 16px;
}

.products {
  height: 100vh;
  .subNav {
    padding: 24px 100px 0px;
    background: $grayBackground;
    border-bottom: 1px solid $grayBorder;
    @include display-flex(flex-start, center, column);
    .subNav__top {
      width: 100%;
      h1 {
        font-size: 18px;
        color: $colorFontDark;
        margin-bottom: 28px;
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
    padding: 24px 100px 0;
    min-height: calc(100vh - 320px);
    .column__left {
      margin-right: 72px;
      margin-top: 8px;
      width: 20%;
      position: -webkit-sticky;
      position: sticky;
      top: 24px;
      .header {
        .header__back {
          @include display-flex(flex-start, center, row);
          color: #939396;
          margin-bottom: 24px;
          img {
            margin-right: 6px;
          }
        }
        .header__icon {
          @include display-flex(center, center, row);
          border: 1px solid $grayBorder;
          border-radius: 3px;
          height: 200px;
          width: 200px;
          margin-bottom: 24px;
          img {
            width: 50%;
            border: none;
          }
        }
      }
      .sticky {
        position: -webkit-sticky;
        position: sticky;
        top: 0px;
        .title {
          margin-bottom: 24px;
          h2 {
            font-size: 22px;
            margin-bottom: 10px;
          }
          p {
            font-size: 14px;
            color: $colorFontLight;
          }
        }
        .filters {
          .filters__search {
            margin-bottom: 32px;
            input {
              height: 40px;
              width: 100%;
              padding: 0 12px;
              font-size: 13px;
              border-radius: 3px;
              border: 1px solid $grayBorder;
            }
            input:focus {
              border: 1px solid $colorFontLight;
            }
          }
        }
      }
    }
    .column__right {
      width: 80%;
    }
  }
}
</style>