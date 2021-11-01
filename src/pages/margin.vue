<template>
  <section id="indexbox" class="index">
    <ul class="page_header">
      <li class="coin_info">
        <div class="coin_name">BTC</div>
        <div class="coin_name_j">Bitcoin</div>
      </li>
    </ul>
  </section>
</template>

<script>
import { EventBus } from "vue-backgrounds/src/engines/EventBus";

/**
 * hb-save-battery - update blockchain data in 20 seconds
 * hb-high-precision - update blockchain data in 2 seconds
 * hb-normal - update blockchain data in 9 seconds
 * hb-custom - allow custom update internals
 */
export default {
  layout: "cover",
  name: "MasonicMain",
  data() {
    return {};
  },
  mounted() {},
};
</script>

<style scoped lang="less">
@font-face {
  font-family: "Gotham";
  src: url("/Gotham.woff") format("woff");
}

.index {
  background: #0c0d17;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  top: 0px;
  padding-top: 50px;
  .page_header {
    height: 50px;
    display: flex;
    border-bottom: 1px solid #1e2334;
    width: 100%;
    position: relative;
    align-items: center;
    .coin_info {
      position: absolute;
      left: 0px;
      .coin_name {
        color: #6f6e84;
        font-size: 18px;
      }
      .coin_name_j {
        color: #3a446482;
        font-size: 15px;
      }
    }
  }
}
</style>
