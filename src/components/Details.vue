<template>
  <div v-bind:class="[details ? 'structure' : 'hide']" v-on:click="hideDetails">
    <div class="details">{{ code.name }}</div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Details",
  data() {
    return {
      showDetails: false
    };
  },
  props: {
    details: {
      type: Boolean
    },
    code: {
      type: Object
    }
  },
  methods: {
    hideDetails: function() {
      this.$emit("hideDetails", false);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

.structure {
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1001;
  width: 100vw;
  height: 100vh;
  background-color: rgba(29, 29, 29, 0.3);

  .details {
    top: 0;
    right: 0;
    height: 100vh;
    width: 400px;
    background: white;
  }
}

.hide {
  display: none;
}
</style>