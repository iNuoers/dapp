<template>
  <tr>
    <td class="coin_info">
      <div class="coin_img" :class="data.coin_image_class"/>
      <div class="coin_text">
        <div class="coin_name">{{ data.coin_name }}</div>
        <div class="coin_price">
          $61,447
        </div>
      </div>
    </td>
    <td class="num">0.09141</td>
    <td class="num">100.00%</td>
    <td class="num">275.29%</td>
    <td class="num">306.99%</td>
    <td class="num overall">276.29%</td>
    <td class="num">
      <div class="claim">
        <div class="claim_img"/>
        0.00
      </div>
    </td>
    <td class="control">
      <v-btn class="deposit_button">Deposit</v-btn>
      <v-btn class="open_button">Open Position</v-btn>
    </td>
  </tr>
</template>
<script>
export default {
  name: "MarketRow",
  props: {
    data: {
      type: Object,
      default() {
        return {
          coin_image_class: "vsa",
          coin_name: String,
          coin_price: Number,
          liquidity: Number,
          utilizationrate: Number,
          depositapy: Number,
          loadnapy: Number,
          overralapr: Number,
          claimable: Number
        }
      },
      require: true
    }
  }
}
</script>

