<template>
  <div class="dashboard">
    <Header :headerContent="this.headerContent" />
    <div class="content">
      <Map />
      <div class="content__cards">
        <StateCard v-for="state in allStates" :key="state.id" :state="state" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Map from "../components/dashboard/Map.vue";
import StateCard from "../components/dashboard/StateCard.vue";

export default {
  name: "dashboard",
  components: { Header, Map, StateCard },
  data() {
    return {
      headerContent: {
        title: "Dashboard",
        tabOne: "Overview",
        tabTwo: "State summaries",
        tabThree: "Account activity"
      },
      allStates: []
    };
  },
  methods: {
    getUserStates: function() {
      fetch(`http://localhost:3000/states`)
        .then(r => r.json())
        .then(states => {
          this.allStates = states;
          this.sortStates();
        });
    },
    sortStates() {
      return this.allStates.sort((a, b) => a.name.localeCompare(b.name));
    }
  },
  mounted() {
    this.getUserStates();
  }
};
</script>

<style lang="scss">
@import "../styles/variables.scss";
@import "../styles/mixins.scss";

.dashboard { 
  @include display-flex(flex-start, flex-start, column);
  min-height: calc(100vh - 60px);
  width: 100vw;
  .content {
    @include display-flex(flex-start, center, column);
    padding: 40px 100px;
    background: $grayBackground;
    min-height: calc(100vh - 175px);
    width: 100%;
    .content__cards {
      @include display-flex(space-between, center, row);
      flex-wrap: wrap;
      margin-top: 32px;
      width: 100%;
    }
  }
}
</style>