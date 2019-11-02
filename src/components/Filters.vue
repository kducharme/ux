<template>
  <div class="filter">
    <p class="filter__title">Filter by category</p>
    <p class="filter__option filter__active">All categories</p>
    <p class="filter__option" v-for="category in sortCategories" :key="category.id">{{ category }}</p>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Filters",
  data() {
    return {
      uniqueCategories: []
    };
  },
  props: {
    allCodes: {
      type: Array
    }
  },
  methods: {},
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

.filter {
  margin-top: 32px;
  .filter__title {
    font-weight: $weightHeavy;
    color: #88888b;
    margin-bottom: 16px;
  }
  .filter__option {
    color: $colorFontMedium;
    padding: 8px 0;
  }

  .filter__active {
    color: $colorTaxJar;
    font-weight: $weightHeavy;
  }
}
</style>