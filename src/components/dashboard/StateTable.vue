<template>
  <div class="table">
      <div class="table table__nexus">
          <p class="title">Registered nexus</p>
          
      </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Filters",
  data() {
    return {};
  },
  props: {
    state: {
      type: Object
    }
  },
  methods: {
    colorStateIcon: function() {
      switch (this.state.type) {
        case "nexus":
          document.querySelector(`.${this.state.state}`).classList.add("nexus");
          break;
        case "marketplace":
          document
            .querySelector(`.${this.state.state}`)
            .classList.add("marketplace");
          break;
        case "issue":
          document.querySelector(`.${this.state.state}`).classList.add("issue");
        default:
      }
    },
    setId: function() {
      console.log(document.querySelector(`.${this.state.state}`));
    }
  },
  mounted() {
    // this.setId();
    this.colorStateIcon();
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";
@import "../../styles/mixins.scss";

.card {
  @include display-flex(flex-start, flex-start, column);
  border: 1px solid $grayBorder;
  border-radius: 3px;
  min-height: 300px;
  background: white;
  flex: 0 1 calc(25% - 1em);
  min-width: 240px;
  margin-bottom: 1em;
  padding: 24px;
  .card__icon {
    height: 48px;
    max-width: 56px;
    margin-bottom: 16px;
  }
  .card__name {
    font-weight: $weightMedium;
    color: $colorFontDark;
    font-size: 15px;
    margin-bottom: 16px;
  }
  .state-data {
    width: 100%;
    @include display-flex(flex-start, center, row);
    margin: 6px 0;
    .state-data__label {
      color: $colorFontLight;
      margin-right: 4px;
    }
    .state-data__value {
      color: $colorFontMedium;
    }
  }
}
</style>