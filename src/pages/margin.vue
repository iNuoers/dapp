<template>
  <section id="indexbox" class="index">
    <ul class="page_header">
      <li class="coin_info">
        <div class="coin_img" />
        <div class="coin_text">
          <div class="coin_name">BTC</div>
          <div class="coin_name_j">Bitcoin</div>
        </div>
      </li>
      <li class="coin_max_info">
                <div class="info_line" />
        <div class="price">$62,004</div>
        <div class="info_line" />
        <!-- <div class="index_price">
          <div class="index_price_title">Index Price</div>
          <div class="index_price_num">$61,899.50</div>
        </div>
        <div class="info_line" />
        <div class="index_price">
          <div class="index_price_title">Oracle Price</div>
          <div class="index_price_num">$61,867.60</div>
        </div> -->
        <!-- <div class="info_line" /> -->
        <div class="index_price">
          <div class="index_price_title">24h Change</div>
          <div class="index_price_num"><p class="up"><div class="up_icon" /> $1,461.00 (2.42%) </p></div>
        </div>
                <!-- <div class="info_line" />
        <div class="index_price">
          <div class="index_price_title">Open Interest</div>
          <div class="index_price_num">$61,867.60</div>
        </div> -->
        <div class="info_line" />
        <div class="index_price">
          <div class="index_price_title">1h Funding</div>
          <div class="index_price_num">$61,867.60</div>
        </div>
        <div class="info_line" />
        <div class="index_price">
          <div class="index_price_title">24h Volume</div>
          <div class="index_price_num">$61,867.60</div>
        </div>
                <div class="info_line" />
        <div class="index_price">
          <div class="index_price_title">24h Trades</div>
          <div class="index_price_num">$61,867.60</div>
        </div>

        <div class="info_line" />
        <div class="index_price">
          <div class="index_price_title">Next Funding</div>
          <div class="index_price_num">$61,867.60</div>
        </div>


      </li>
    </ul>
    <div class="app">
      <div class="left"></div>
      <div class="right">
        <div class="right_header">
          <div class="trade_mode" >
            <div class="trade_mode_img" />
          </div>
                    <div class="trade_mode" >
            <div class="reflash_mode_img" />
          </div>
                    <div class="trade_mode" >
            <div class="trade_mode_img" />
          </div>
          
        </div>
      </div>
    </div>
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
      // position: absolute;
      // left: 0px;
      width: 200px;
      display: flex;
      align-items: center;
      .coin_img {
        margin: 0 10px;
        background: url("/bit.png") no-repeat center;
        background-size: cover;
        width: 30px;
        height: 30px;
      }
      .coin_text {
        margin-top: 2px;
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

    .coin_max_info {
      padding: 0 25px;
      position: absolute;
      right: 0px;
      // width: 500px;
      height: 50px;
      display: flex;
      align-items: center;
      .info_line {
        height: 25px;
        background: #1e2334;
        width: 1px;
        margin: 0 30px;
      }
      .price {
        margin-top: 7px;
        color: #ff5353;
        font-size: 20px;
      }
      .index_price {
        text-align: center;
        margin-top: 5px;
        .index_price_title {
          color: #292940;
        }
        .index_price_num {
          color: #6f6e84;
        }
        .up {
          display: flex;
          color: #3fb68b;
          .up_icon {
            background: url("/up.svg") center no-repeat;
            background-size: cover;
            background-size: cover;
            width: 10px;
            height: 10px;
            margin-bottom: 5px;
            margin-right: 2px;
          }
        }
      }
    }
  }

  .app {
    display: flex;
    position: relative;
    .left {
    }
    .right {
      height: 100%;
      width: 425px;
      border-left: 1px solid #1e2334;
      .right_header {
        width: 100%;
        height: 50px;
        border-bottom: 1px solid #1e2334;
        position: relative;
        display: flex;
        .trade_mode {
          height: 50px;
          width: 50px;
          border-right: 1px solid #1e2334;
          padding: 5px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          .trade_mode_img {
            background: url("/uniswap.png") center no-repeat;
            background-size: cover;
            width: 25px;
            height: 25px;
          }
          .reflash_mode_img {
            background: url("/reflash.svg") center no-repeat;
            background-size: cover;
            width: 25px;
            height: 25px;
          }
        }
      }
    }
  }
}
</style>
