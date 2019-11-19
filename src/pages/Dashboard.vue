<template>
  <div class="dashboard">
    <Header :headerContent="this.headerContent" />
    <div class="content">
      <Map />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Map from "../components/dashboard/Map.vue";

export default {
  name: "dashboard",
  components: { Header, Map },
  data() {
    return {
      headerContent: {
        title: "Dashboard",
        tabOne: "Overview",
        tabTwo: "State summaries",
        tabThree: "Account activity"
      }
    };
  },
  methods: {}
};
</script>

<style lang="scss">
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

.dashboard {
  @include display-flex(flex-start, flex-start, column);
  height: calc(100vh - 60px);
  width: 100vw;
  .content {
    @include display-flex(flex-start, center, column);
    padding: 40px 100px 0px;
    background: $grayBackground;
    min-height: calc(100vh - 175px);
    width: 100%;
  }
}
</style>