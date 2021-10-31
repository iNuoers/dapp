<template>
  <section id="indexbox" class="indexcolor">
    <div class="backee home"></div>
    <v-main class="price-plan-layout">
      <v-container class="container group">
        <v-layout row wrap fill-height>
          <v-card-priceplan
            v-for="(cell, index) in cells"
            :key="cell.key"
            :ref="`${TYPESC.BASE_REF_NAME}${index}`"
            :per="precontent"
            :currency="cell.currency"
            :amount="cell.amount"
            :title="cell.title"
            :features="cell.features"
            :button-label="$t('bnt_deal')"
            :main-feature="cell.main"
            class="planbox"
          />
        </v-layout>
      </v-container>
    </v-main>
  </section>
</template>
<script>

// eslint-disable-next-line no-unused-vars
import { TYPESCMIX, TYPESC } from "vue-codepin/src/components/priceplan/const"
import VCardPriceplan from "@/components/priceplan/plan"
import price_plan from "@/api/mixins/tron/price_plan"
import { EventBus } from "vue-backgrounds/src/engines/EventBus"

export default {
  name: "Priceplan",
  components: { VCardPriceplan },
  layout: "bottom",
  mixins: [TYPESCMIX, price_plan],
  data() {
    return {
      precontent: "Addr",
      watchers: {},
      cellsInputTypes: {}
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.LanguageStart()
      this.update_price_plan()
      this.GetPriceLimit()
      EventBus.$on("check_price_plan_action", () => {
        this.update_price_plan()
      })
    })
  }
}
</script>
