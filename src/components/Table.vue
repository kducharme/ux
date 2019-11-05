<template>
  <div class="page__table">
    <table id="codeTable">
      <colgroup>
        <col span="1" style="width: 3.5%;" />
        <col span="1" style="width: 66.5;" />
        <col span="1" style="width: 18%;" />
        <col span="1" style="width: 5%;" />
        <col span="1" style="width: 7%;" />
      </colgroup>
      <thead>
        <tr>
          <th>
            <div class="code__select">
              <input type="checkbox" id="selectAll" />
              <label for="selectAll"></label>
            </div>
          </th>
          <th class="code__name">Digital & Software ({{ tableResults.length }})</th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody id="tableBody">
        <tr
          v-for="item in tableResults"
          :key="item.code"
          :class="[selectedCodes.includes(item.code) ? 'selectedRow' : '']"
        >
          <td>
            <div class="item__select">
              <input type="checkbox" :value="item" :id="item.code" v-model="selectedCodes" />
              <label :for="item.code"></label>
            </div>
          </td>
          <td class="code__name code__overflow" v-on:click="showDetails(item)">{{ item.name }}</td>
          <td class="code__sku code__overflow">{{ item.code }}</td>
          <td class="code__copy" v-on:click="copyCode(item.code)">
            <!-- SVG for copy icon -->
            <svg
              width="19px"
              height="22px"
              viewBox="0 0 19 22"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g
                id="discovery-(round-5)"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g id="tax-codes-copy" transform="translate(-1265.000000, -629.000000)">
                  <g id="file_copy-24px" transform="translate(1264.000000, 629.000000)">
                    <polygon id="Path" points="0 0 22 0 22 22 0 22" />
                    <path
                      class="code__copy--icon"
                      d="M14.6666667,0.916666667 L3.66666667,0.916666667 C2.65833333,0.916666667 1.83333333,1.74166667 1.83333333,2.75 L1.83333333,15.5833333 L3.66666667,15.5833333 L3.66666667,2.75 L14.6666667,2.75 L14.6666667,0.916666667 Z M13.75,4.58333333 L7.33333333,4.58333333 C6.325,4.58333333 5.50916667,5.40833333 5.50916667,6.41666667 L5.5,19.25 C5.5,20.2583333 6.31583333,21.0833333 7.32416667,21.0833333 L17.4166667,21.0833333 C18.425,21.0833333 19.25,20.2583333 19.25,19.25 L19.25,10.0833333 L13.75,4.58333333 Z M7.33333333,19.25 L7.33333333,6.41666667 L12.8333333,6.41666667 L12.8333333,11 L17.4166667,11 L17.4166667,19.25 L7.33333333,19.25 Z"
                      id="Shape"
                      fill="#D6D6D6"
                      background="#FFFFFF"
                      fill-rule="nonzero"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </td>
          <td class="code__favorite" v-on:click="favoriteCode(item)">
            <!-- SVG for favorite icon -->
            <svg
              width="20px"
              height="19px"
              viewBox="0 0 20 19"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g
                id="discovery-(round-5)"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="tax-codes-copy"
                  transform="translate(-1301.000000, -630.000000)"
                  fill="#D6D6D6"
                  fill-rule="nonzero"
                >
                  <g id="star_border-24px" transform="translate(1298.000000, 627.000000)">
                    <path
                      class="code__favorite--icon"
                      :class="[item.code.favorite === true ? 'favorite' : '']"
                      d="M21.2875,9.79333333 L16.0441667,9.33833333 L13.9966667,4.5175 C13.6283333,3.64 12.3716667,3.64 12.0033333,4.5175 L9.95583333,9.34916667 L4.72333333,9.79333333 C3.77,9.86916667 3.38,11.0608333 4.10583333,11.6891667 L8.08166667,15.1341667 L6.89,20.2475 C6.67333333,21.1791667 7.68083333,21.9158333 8.50416667,21.4175 L13,18.7091667 L17.4958333,21.4283333 C18.3191667,21.9266667 19.3266667,21.19 19.11,20.2583333 L17.9183333,15.1341667 L21.8941667,11.6891667 C22.62,11.0608333 22.2408333,9.86916667 21.2875,9.79333333 L21.2875,9.79333333 Z M13,16.6833333 L8.92666667,19.1425 L10.01,14.5058333 L6.41333333,11.3858333 L11.1583333,10.9741667 L13,6.60833333 L14.8525,10.985 L19.5975,11.3966667 L16.0008333,14.5166667 L17.0841667,19.1533333 L13,16.6833333 Z"
                      id="Shape"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </td>
        </tr>
      </tbody>
    </table>
    <div :class="[selectedCodes.length === 0 ? 'hideActions' : 'showActions']" class="actions">
      <div class="actions__left">
        <p class="context__count">{{selectedCodes.length}} products selected</p>
        <p class="context__deselect" v-on:click="selectAll">(Deselect all)</p>
      </div>
      <div class="actions__right">
        <button class="btn btn__primary" v-on:click="downloadFile">Download CSV</button>
        <button class="btn btn__secondary">Favorite</button>
      </div>
    </div>
    <div id="snackbar" class="toast">Code copied to clipboard!</div>
    <p class="success-message" id="success"></p>
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
      results: []
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
    },
    favoriteCode: function(code) {
      code.favorite = true;

      return fetch(`http://localhost:3000/codes`, {
        credentials: "same-origin", // 'include', default: 'omit'
        method: "PUT", // 'GET', 'PUT', 'DELETE', etc.
        body: JSON.stringify(code),
        headers: new Headers({
          "favorite": "true"
        })
      }).then(response => response.json());
      console.log(response)
    },
    copyCode: function(code) {
      let temporaryInput = document.createElement("input");
      temporaryInput.className = "temporaryInput";
      document.body.appendChild(temporaryInput);
      temporaryInput.value = code;
      temporaryInput.select();
      document.execCommand("copy");
      document.body.removeChild(temporaryInput);
      this.showToast();
    },
    showToast: function() {
      let success = document.getElementById("snackbar");
      success.classList.add("show");
      setTimeout(function() {
        success.className = success.className.replace("show", "");
      }, 2850);

      setTimeout(function() {
        document.getElementById("success").innerHTML = "";
      }, 2000);
    },
    downloadFile: function() {
      let csvContent = "data:text/csv;charset=utf-8,";
      csvContent += [
        Object.keys(this.selectedCodes[0]).join(";"),
        ...this.selectedCodes.map(item => Object.values(item).join(";"))
      ]
        .join("\n")
        .replace(/(^\[)|(\]$)/gm, "");

      const data = encodeURI(csvContent);
      window.open(data);
    },
    handleResize() {
      let tableWidth = document.getElementById("codeTable").offsetWidth;
      let actions = document.querySelector(".actions");
      actions.style.width = "";
      actions.style.width = tableWidth + "px";
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
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

.page__table {
  width: 100%;
  .actions {
    @include display-flex(space-between, center, row);
    margin-top: -2px;
    height: 72px;
    background: white;
    border: 1px solid $grayBorder;
    // position: -webkit-sticky;
    padding: 0 16px;
    box-shadow: 0 -2px 2px -2px rgba(0, 0, 0, 0.15);
    bottom: 0px;
    position: fixed;
    .actions__left {
      width: 50%;
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
    .actions__right {
      width: 50%;
      @include display-flex(flex-end, center, row);
      .btn {
        height: 40px;
        border: none;
        border-radius: 3px;
        font-weight: $weightHeavy;
        width: 100px;
      }
      .btn__primary {
        width: 132px;
        color: white;
        background: $colorTaxJar;
        margin-right: 16px;
      }
      .btn__secondary {
        color: $colorFontMedium;
        border: 1px solid $grayBorder;
        font-weight: $weightLight;
      }
    }
  }

  .showActions {
    transform: translateY(0px);
    transition: transform 500ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
  }

  .hideActions {
    opacity: 0;
    transform: translateY(60px);
    transition: transform 500ms cubic-bezier(0.19, 1, 0.22, 1) 0s;
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
  // Table styling
  table {
    width: 100%;
    border: 1px solid $grayBorder;
    table-layout: fixed;
    border-spacing: 0px;
    border-radius: 3px;
    font-size: 14px;
    font-weight: $weightLight;
    // height: calc(100vh - 68px - 111px - 32px);
    thead {
      text-align: left;
      border: none !important;
      background: $grayBackground;
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
      .code__overflow {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .code__name {
        color: $colorBlueDark;
      }
      .code__name:hover {
        cursor: pointer;
        text-decoration: underline;
      }
      .code__copy:hover {
        cursor: pointer;
        .code__copy--icon {
          transition: ease-in-out, fill 0.3s ease-in-out;
          fill: $colorFontMedium;
        }
      }
      .code__favorite:hover {
        cursor: pointer;
        .code__favorite--icon {
          transition: ease-in-out, fill 0.3s ease-in-out;
          fill: $colorFontMedium;
        }
      }
      .favorite {
        fill: red;
      }
    }
    tr:last-child {
      border: none;
    }
  }
}

.temporaryInput {
  display: none;
}

/* // Toast styling */

.toast {
  visibility: hidden;
  // min-width: 250px;
  // margin-left: -125px;
  background-color: white;
  border: solid 1px $colorTaxJar;
  color: $colorTaxJar;
  border-radius: 3px;
  text-align: center;
  padding: 14px;
  position: fixed;
  z-index: 1;
  left: 52%;
  bottom: 30px;
  font-family: "lato";
  font-size: 14px;
  font-weight: 800;
}

.toast.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 1s 2.5s;
}

@-webkit-keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }
  to {
    bottom: 30px;
    opacity: 1;
  }
}

@-webkit-keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
  }
}

@keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }
  to {
    bottom: 0;
    opacity: 0;
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
  left: -0.05em;
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