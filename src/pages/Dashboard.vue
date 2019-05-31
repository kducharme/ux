<template>
  <div class="dashboard">
      <Modal />
  </div>
</template>

<script>
import Modal from "../components/Modal.vue";

export default {
  name: "dashboard",
  components: { Modal },
  data() {
    return {
      activeTab: "all"
    };
  },
  methods: {}
};
</script>

<style lang="scss">
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

.dashboard {
  @include display-flex(flex-start, flex-start, row);
    height: calc(100vh - 60px);
//   padding: 60px 200px 0;
//   background: $colorFontLight;

}
</style>