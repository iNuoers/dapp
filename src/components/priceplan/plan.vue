<template>
  <v-flex xs12 sm6 md3 class="cardplan">
    <!-- <v-card outlined style="height:100%" color="transparent">-->
    <h2>{{ title }}</h2>
    <h3 v-if="!isSpecialDeal">
      <sup>{{ currency }}</sup>{{ amount | coinbalance }}
      <span v-if="per.length>0" class="small">/{{ per }}</span>
    </h3>
    <h3 v-else>
      {{ specialDealDescription }}
    </h3>
    <p>{{ mainFeature }}</p>
    <ul class="bullet-content">
      <li v-for="(promotion, index) in features"
          :key="index">{{ promotion }}
      </li>
    </ul>
    <v-btn
      :color="c9_primary"
      x-large
      ripple
      bottom
      elevation="19"
      @click="enter_deal">
      {{ buttonLabel }}
    </v-btn>
    <!-- </v-card>-->
  </v-flex>
</template>
<script>
import { EventBus } from "vue-backgrounds/src/engines/EventBus"
import colorx from "@/api/mixins/mixin/colorx"

export default {
  name: "VCardPriceplan",
  mixins: [colorx],
  props: {
    title: {
      type: String,
      required: true
    },
    currency: {
      type: String,
      required: false,
      default: "$"
    },
    amount: {
      type: String,
      required: false,
      default: "000"
    },
    per: {
      type: String,
      required: false,
      default: ""
    },
    specialDealDescription: {
      type: String,
      required: false,
      default: "000"
    },
    mainFeature: {
      type: String,
      required: false,
      default: "LET'S TALK"
    },
    isSpecialDeal: {
      type: Boolean,
      required: false,
      default: false
    },
    // eslint-disable-next-line vue/require-valid-default-prop,vue/require-default-prop
    features: {
      type: Array,
      required: false
      /* default: [] */
    },
    buttonLabel: {
      type: String,
      required: false,
      default: "Sign Up"
    }
  },
  methods: {
    enter_deal(e) {
      e.preventDefault()
      EventBus.$emit("price_plan_enter_deal", this.key, this.amount)
    }
  }
}
</script>
