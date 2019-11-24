<template>
  <div class="dashboard">
    <Header :headerContent="this.headerContent" />
    <div class="content">
      <Map />
      <div class="content__details">
        <!-- <StateCard v-for="state in allStates" :key="state.id" :state="state" /> -->
        <div class="content__details--title">
          <p class="title">State details</p>
          <p
            class="subTitle"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
        </div>
        <StateTable />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Map from "../components/dashboard/Map.vue";
import StateCard from "../components/dashboard/StateCard.vue";
import StateTable from "../components/dashboard/StateTable.vue";

export default {
  name: "dashboard",
  components: { Header, Map, StateCard, StateTable },
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
    .content__details {
      border: 1px solid $grayBorder;
      border-radius: 3px;
      background: white;
      margin-top: 24px;
      width: 100%;
      height: 100%;
      padding: 32px;
      .content__details--title {
        @include display-flex(flex-start, flex-start, column);
        margin-bottom: 32px;
        .title {
          font-size: 16px;
          font-weight: $weightHeavy;
          color: $colorFontDark;
          margin-bottom: 6px;
        }
        .subTitle {
          font-size: 14px;
          color: $colorFontLight;
        }
      }
    }
  }
}
</style>