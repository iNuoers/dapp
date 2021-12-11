<template>
  <table class="market_list">
    <thead>
    <tr>
      <th>Market</th>
      <th>Liquidity</th>
      <th>Utilization Rate</th>
      <th>Deposit APY</th>
      <th>Loan APY</th>
      <th>Overall APR</th>
      <th>Claimabl</th>
      <th class="search_th">
        <div class="search">
          <v-btn color="search_input" @click.prevent="searchCoin">Search tokens
            <div class="search_icon"/>
          </v-btn>
        </div>
      </th>
    </tr>
    </thead>
    <tbody>
    <market-row
        v-for="(a,b) in data_list" :key="b"
        :data="a"
    />
    </tbody>
  </table>
</template>

<script>
import MarketRow from "@/components/balmarkettable/row";
import {EventBus} from "vue-backgrounds";

export default {
  name: "MarketTable",
  components: {MarketRow},
  data() {
    return {data_list: []}
  },
  mounted() {
    this.$nextTick(() => {
      for (let one = 0; one < 2; one++) {
        this.data_list.push({
          coin_name: "BTC",
          coin_price: 61000,
          liquidity: 0.09141,
          utilizationrate: 0.09141,
          depositapy: 0.09141,
          loadnapy: 0.09141,
          overralapr: 0.09141,
          claimable: 0.09141
        })
      }
    })
  },
  methods: {
    searchCoin() {
      EventBus.$emit("pop_search_coin")
    }
  }
}
</script>
<style>
tbody{
  /* display: block; */
  overflow: auto;
}
</style>
