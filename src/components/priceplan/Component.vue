<template>
  <div class="price-plan-layout ">
    <div class="container group">
      <plan
        v-for="(cell, index) in cells"
        :key="cell.key"
        :ref="`${TYPESC.BASE_REF_NAME}${index}`"
        :per="precontent"
        :currency="cell.currency"
        :amount="cell.amount"
        :title="cell.title"
        :features="cell.features"
        :button-label="button_label"
        :main-feature="cell.main"
        class="planbox"
        @price_plan_enter_deal="$event"
      />
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars

import Plan from "./plan.vue"
// eslint-disable-next-line no-unused-vars
import { TYPESCMIX, TYPESC } from "./const"

export default {
  name: "PricePlan",
  components: { Plan },
  mixins: [TYPESCMIX],
  data() {
    return {
      button_label: "deal!",
      precontent: "Addr",
      watchers: {},
      cellsInputTypes: {},
      cells: [
        {
          key: "deal-1",
          title: "Free",
          amount: "1",
          currency: "USDT",
          features: [
            "Test the game with the lowest returns",
            "Referral reward by 5%",
            "Node reward by 1%",
            "1 Generation referral limit"
          ],
          main: "Easy To Start"
        },
        {
          key: "deal-2",
          title: "NEWBIE",
          amount: "600",
          currency: "USDT",
          features: [
            "Low returns",
            "Referral reward by 5%",
            "Node reward by 1%",
            "1 Generation referral limit"
          ],
          main: "Enjoy 1 Generation"
        },
        {
          key: "deal-3",
          title: "Starter",
          amount: "601",
          currency: "USDT",
          features: [
            "Referral reward by 7%",
            "Node reward by 6%",
            "2 Generation referral limit"
          ],
          main: "Enjoy 2 Generation reward referrals"
        },
        {
          key: "deal-4",
          title: "Team Leader",
          amount: "1000",
          currency: "USDT",
          features: [
            "Referral reward by 7%",
            "Node reward by 6%",
            "2 Generation referral limit"
          ],
          main: "Enjoy 2 Generation reward referrals"
        },
        {
          key: "deal-5",
          title: "Team Elite",
          amount: "1001",
          currency: "USDT",
          features: [
            "Referral reward by 10%",
            "Reward under release 100%, 70%, 50%, 10%, 5%, 1%",
            "Node reward by 10%",
            "Enjoy 21 Generation reward referrals"
          ],
          main: "Serious player with high returns"
        },
        {
          key: "deal-6",
          title: "Team Killer",
          amount: "20000",
          currency: "USDT",
          features: [
            "Bringing your team to join this venture",
            "Reward under release 100%, 70%, 50%, 10%, 5%, 1%",
            "Referral reward by 10%",
            "Node reward by 10%",
            "Enjoy 21 Generation reward referrals"
          ],
          main: "Maxium returns"
        }
      ]
    }
  }
}
</script>
