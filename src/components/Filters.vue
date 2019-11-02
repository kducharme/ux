<template>
  <div>
    Filters will go here
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Filters",
  components: {},
  data() {
    return {
      allCodes: "",
      selectedCodes: [],
    };
  },
  methods: {
  },
  computed: {
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
@import "../styles/mixins.scss";


</style>