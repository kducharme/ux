<template>
  <div>
    <table>
      <colgroup>
        <col span="1" style="width: 4%;" />
        <col span="1" style="width: 71;" />
        <col span="1" style="width: 25%;" />
      </colgroup>
      <thead>
        <tr>
          <th>
            <div class="code__select">
              <input type="checkbox" id="selectAll" />
              <label for="selectAll"></label>
            </div>
          </th>
          <th class="code__name">Name</th>
          <th class="code__sku">Tax Code</th>
        </tr>
      </thead>
      <tbody id="tableBody">
        <tr
          v-for="code in tableResults"
          :key="code.code"
          :class="[selectedCodes.includes(code.code) ? 'selectedRow' : '']"
        >
          <td>
            <div class="code__select">
              <input type="checkbox" :value="code.code" :code="code.code" v-model="selectedCodes" />
              <label :for="code.code"></label>
            </div>
          </td>
          <td class="code__name" v-on:click="showDetails(code)">{{ code.name }}</td>
          <td class="code__sku">{{ code.code }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Table",
  components: {},
  data() {
    return {
      activeCode: {},
      selectedCodes: [],
      sortedCodes: [],
      results: [],
      activeCategory: "Digital & Software"
    };
  },
  props: {
    allCodes: {
      type: Array
    },
    searchTerm: {
      type: String
    }
  },
  methods: {
    sortCodes: function() {
      // TODO: make the codes sorted by grouo
    },
    selectAll: function() {
      this.selectedCodes = [];
    },
    showDetails: function(code) {
      this.$emit("showDetails", true);
      this.$emit("activeCode", code);
    },
    sortCodes() {
      return this.allCodes.sort((a, b) => a.name.localeCompare(b.name));
    }
  },
  computed: {
    ...mapState(["codes"]),
    tableResults() {
      this.sortCodes();
      if (!this.searchTerm) {
        return this.allCodes;
      }
      return this.allCodes.filter(code => {
        if (code.name.toLowerCase().includes(this.searchTerm.toLowerCase())) {
          return code;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

.back {
  @include display-flex(flex-start, center, row);
  color: #939396;
  margin-bottom: 16px;
  img {
    margin-right: 6px;
  }
}

.table__actions {
  @include display-flex(flex-start, center, row);
  bottom: 0px;
  width: 100%;
  height: 56px;
  background: white;
  border: 1px solid $grayBorder;
  position: -webkit-sticky;
  position: sticky;
  padding: 0 16px;
  box-shadow: 0 -2px 2px -2px rgba(0, 0, 0, 0.15);
  button {
    background: $colorTaxJar;
    height: 38px;
    border-radius: 3px;
    color: white;
    font-weight: $weightMedium;
    margin-right: 16px;
    padding: 0 8px;
  }
  button:hover {
    background: $colorTaxJarHover;
  }
  .table__actions--context {
    @include display-flex(flex-start, center, row);
    .context__count {
      margin-right: 6px;
    }
    .context__deselect {
      color: $colorFontLight;
    }
    .context__deselect:hover {
      text-decoration: underline;
      color: $colorFontDark;
      cursor: pointer;
    }
  }
}

.showActions {
  transform: translateY(0px);
  transition: transform 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
}

.hideActions {
  opacity: 0;
  transform: translateY(60px);
  transition: transform 300ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
}

.title {
  margin: 16px 0;
  h2 {
    font-size: 16px;
    margin-bottom: 8px;
  }
  p {
    font-size: 14px;
    color: $colorFontLight;
  }
}

.table__header {
  // @include display-flex(space-between, flex-start, row);
  // margin: 8px 0 24px 0;
  p {
    color: $colorFontLight;
  }
  .table__header--left {
    @include display-flex(flex-start, center, row);
    .icon {
      @include display-flex(center, center, row);
      border: 1px solid $grayBorder;
      border-radius: 3px;
      height: 64px;
      width: 64px;
      img {
        width: 46px;
        border: none;
      }
    }
  }
  .table__header--right {
    input {
      height: 40px;
      width: 280px;
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

.results {
  margin-top: 16px;
}

table {
  margin-top: 18px;
  width: 100%;
  border: 1px solid $grayBorder;
  table-layout: fixed;
  background: white;
  border-spacing: 0px;
  border-radius: 3px;
  font-size: 14px;
  font-weight: $weightLight;
  // height: calc(100vh - 68px - 111px - 32px);
  thead {
    text-align: left;
    border: none !important;
    border-bottom: 1px solid $grayBorder;
    color: $colorFontLight;
    font-weight: $weightHeavy;
    tr {
      height: 48px;
      max-height: 48px;
      border: none;
    }
    th {
      padding: 0 16px;
      border-bottom: 1px solid $grayBorder;
    }
  }
  tbody {
    tr {
      height: 44px;
    }
    td {
      color: $colorFontMedium;
      border-bottom: 1px solid $grayBorder;
      padding: 0 16px;
    }
    .selectedRow {
      background: $colorBlueLight;
    }
    .code__name {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: $colorBlueDark;
    }
    .code__name:hover {
      cursor: pointer;
      text-decoration: underline;
    }
    .uncategorized {
      width: 84px !important;
      background: #eeeeee;
      color: $colorFontLight;
      padding: 4px 10px;
      border-radius: 16px;
      font-size: 13px;
      font-weight: $weightMedium;
    }
  }
}

/* Checkboxes */

[type="checkbox"]:checked,
[type="checkbox"]:not(:checked) {
  position: absolute;
  left: -9999px;
}

[type="checkbox"]:checked + label,
[type="checkbox"]:not(:checked) + label {
  position: relative;
  padding-left: 28px;
  cursor: pointer;
  color: #55565a;
}

[type="checkbox"]:checked + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 14px;
  height: 14px;
  border: 1.5px solid #0b5c98;
  background: #0b5c98;
  border-radius: 3px;
}

[type="checkbox"]:not(:checked) + label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 14px;
  height: 14px;
  border: 1.5px solid #b7b7b8;
  border-radius: 3px;
}

/* checked mark aspect */
[type="checkbox"]:not(:checked) + label:after,
[type="checkbox"]:checked + label:after {
  content: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  fill='white' width='20' height='18' stroke='white' stroke-width='.8' viewBox='0 0 26 26'><path d='M9 16.17L5.53 12.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L9 16.17z'/></svg>");
  position: absolute;
  top: 0em;
  left: -0.1em;
  color: white;
  transition: all 0.25s;
}

[type="checkbox"]:not(:checked) + label:after {
  opacity: 0;
  -webkit-transform: scale(0);
  transform: scale(0);
}
[type="checkbox"]:checked + label:after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}
</style>