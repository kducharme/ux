<template>
  <div class="tableFilters">
    <div
      class="filter"
      v-for="category in allCategories"
      :key="category.id"
      v-on:click="setActiveCategory(category)"
    >
      <p
        class="filter__name"
        :class="[activeCategory === category ? 'filter__active filter__active--name' : '']"
      >{{ category }}</p>
      <p
        class="filter__count"
        :class="[activeCategory === category ? 'filter__active filter__active--count' : '']"
      >32</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Filters",
  data() {
    return {
      uniqueCategories: [],
      activeCategory: "All Categories",
      allCategories: [
        "All Categories",
        "Clothing",
        "Digital & Software",
        "Food & Beverage",
        "Manufacturing",
        "Medical",
        "Miscenllaneous",
        "Telecommunications"
      ]
    };
  },
  props: {
    allCodes: {
      type: Array
    }
  },
  methods: {
    setActiveCategory: function(category) {
      this.activeCategory = category;
      console.log(this.activeCategory);
    }
  },
  computed: {
    sortCategories() {
      this.uniqueCategories = [
        ...new Set(this.allCodes.map(code => code.category).sort())
      ];
      return this.uniqueCategories;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

.tableFilters {
  width: 100%;
  @include display-flex(flex-start, flex-start, column);
  .filter {
    width: 100%;
    @include display-flex(space-between, center, row);
    .filter__name {
      color: #88888B;
      padding: 12px 0;
    }
    .filter__count {
      @include display-flex(center, center, row);
      color: #a2a2a2;
      border: 1px solid $grayBorder;
      font-size: 13px;
      border-radius: 12px;
      width: 44px;
      height: 22px;
    }

    .filter__active {
      color: $colorTaxJar;
      font-weight: $weightHeavy;
    }
    .filter__active--count {
      color: $colorTaxJar;
      border: 1px solid $colorTaxJar;
    }
  }
  .filter:hover {
    cursor: pointer;
    .filter__name {
      color: $colorFontDark;
    }
    .filter__active--name {
      color: $colorTaxJar;
    }
  }
}
</style>