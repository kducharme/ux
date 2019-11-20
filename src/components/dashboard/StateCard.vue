<template>
  <div class="card">
      <div class="card__icon">{{state.name}}</div>
      <div class="card__name">{{state.name}}</div>
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

  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/variables.scss";
@import "../../styles/mixins.scss";

.card {
  border: 1px solid $grayBorder;
  border-radius: 3px;
  min-height: 300px;
  background: white;
  flex: 0 1 calc(25% - 1em);
  margin-bottom: 1em;
  padding: 24px;
  
}
</style>