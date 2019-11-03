<template>
  <div v-bind:class="[details ? 'structure' : 'hide']" v-on:click="hideDetails">
    <div class="details">
      <div class="details__column--left">
        <div class="icon">
          <img src="../assets/digital.svg" class="icon" />
        </div>
        <button class="btn btn__primary">Copy code</button>
        <button class="btn btn__secondary">Save for later</button>
      </div>
      <div class="details__column--right">
        <div class="title">
          <p class="title__name">{{code.name}}</p>
          <p class="title__category">{{code.category}}</p>
          <p class="title__description">{{ codeDescription }}</p>
        </div>
        <div class="section">
          <div class="section__name">Tax code</div>
          <div class="section__details">{{code.code}}</div>
        </div>
        <div class="section">
          <div class="section__name">Includes products like</div>
          <div class="example" v-for="item in includes" :key="item.code">
            <img src="../assets/includes.svg" class="icon" />
            <p class="listItem">{{item}}</p>
          </div>
        </div>
        <div class="section">
          <div class="section__name">Excludes products like</div>
          <div class="example" v-for="item in excludes" :key="item.code">
            <img src="../assets/excludes.svg" class="icon" />
            <p class="listItem">{{item}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Details",
  data() {
    return {
      showDetails: false,
      codeDescription:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      includes: [
        "Software as a Service products",
        "Software licenses",
        "Software subscriptions",
        "Membership fees",
        "One-time purchases"
      ],
      excludes: ["Physical goods", "PDF downloads", "Multi-media products"]
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
    min-width: 320px;
    width: 45%;
    background: white;
    padding: 32px;
    @include display-flex(flex-start, flex-start, row);
    .details__column--left {
      .icon {
        @include display-flex(center, center, row);
        border: 1px solid $grayBorder;
        border-radius: 3px;
        height: 160px;
        width: 160px;
        margin-bottom: 24px;
        img {
          width: 80%;
          border: none;
        }
      }
      .btn {
        height: 40px;
        width: 100%;
        border: none;
        border-radius: 3px;
        font-weight: $weightHeavy;
      }
      .btn__primary {
        color: white;
        background: $colorTaxJar;
      }
      .btn__secondary {
        color: $colorFontMedium;
        border: 1px solid $grayBorder;
        font-weight: $weightLight;
        margin-top: 16px;
      }
    }
    .details__column--right {
      margin-left: 24px;
      @include display-flex(flex-start, flex-start, column);
      line-height: 1.4;
      .title {
        @include display-flex(flex-start, flex-start, column);
        .title__name {
          font-size: 18px;
          font-weight: $weightHeavy;
          margin-bottom: 16px;
        }
        .title__category {
          background-color: #f0f0f0;
          padding: 4px 6px;
          color: #88888b;
          border-radius: 5px;
          margin-bottom: 16px;
        }
      }
      .section {
        @include display-flex(flex-start, flex-start, column);
        margin-top: 16px;
        .section__name {
          font-weight: $weightHeavy;
          text-transform: uppercase;
          font-size: 13px;
          color: #a2a2a2;
          margin: 16px 0 16px 0;
        }
        .section__details {
          color: $colorFontDark;
          font-size: 14px;
        }
        .example {
          @include display-flex(flex-start, center, row);
          margin-bottom: 12px;
          img {
            margin-right: 8px;
          }
        }
      }
    }
  }
}

.hide {
  display: none;
}
</style>