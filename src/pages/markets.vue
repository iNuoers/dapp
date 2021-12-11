<template>
  <section id="indexbox" class="index">
    <div class="body">
      <div class="left">
        <ul class="nav_ul">
          <li><img src="/icon_code.svg" class="icon_img" /> Code</li>
          <li><img src="/icon_doc.svg" class="icon_img" /> Docs</li>
          <li>
            <img src="/icon_control.svg" class="icon_img" />
            Risk Control
          </li>
          <li><img src="/icon_buy.svg" class="icon_img" /> Buy BLCR</li>
        </ul>
      </div>
      <div class="right">
        <div class="market_info">
          <div class="num">
            <div class="lock">
              <div class="lock_title">Total lock volume</div>
              <div class="lock_num">
                <p>
                  <v-f-number
                    :start-val="0"
                    :end-val="tvl_usd"
                    :decimals="18"
                    :decimal-show="2"
                    :duration="3000"
                    prefix="$"
                  />
                </p>
                <div class="toBTC">
                  =
                  <p class="toBTC_num">1.246</p>
                  BTC
                </div>
              </div>
              <div class="week">
                <div class="up" />
                $145.27634 (%1.43)
                <p class="week_t">Past Week</p>
              </div>
            </div>
            <div class="lock">
              <div class="borrow_title">Total borrowing</div>
              <div class="borrow_num">
                <p>
                  <v-f-number
                    :start-val="0"
                    :end-val="total_collateral_eth"
                    :decimals="18"
                    :decimal-show="2"
                    :duration="3000"
                    prefix="$"
                  />
                </p>
              </div>
              <div class="borrow_tote">
                <div class="up" />
                %37.6475
                <p class="tote">Borrowing ratio</p>
              </div>
            </div>
          </div>
          <div class="traderview">
            <div class="traderview_info_box">
              Connect MetaMask™ wallet, start trading.
            </div>
          </div>
        </div>
        <market-table></market-table>
      </div>
    </div>
    <!-- <v-footer></v-footer> -->
  </section>
</template>
<script>
import nav from "@/api/mixins/tron/nav";
import string_tx from "@/api/mixins/string_tx";
import terms from "@/components/sheet/terms";
// import vHeader from "@/components/header";
// import vFooter from "@/components/footer";

import { ImTokenComponent, EthereumWeb3Component } from "vue-blocklink";
import MarketTable from "@/components/balmarkettable/markettable";
import lo_stream from "@/api/mixins/balincer/lo_stream";

export default {
  layout: "cover",
  name: "CoverPage",
  comments: {},
  components: { MarketTable, terms },
  mixins: [EthereumWeb3Component, ImTokenComponent, lo_stream, nav, string_tx],
  data() {
    return {
      skin: 0,
    };
  },
  computed: {},
  watch: {},
  methods: {
    beforeMount: function () {},
    mounted: function () {},
    swithskin: function (e) {},
  },
};
</script>
<style scoped lang="scss">
.index {
  background: #0c0d17;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  top: 0px;
  padding-top: 45px;

  .body {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;

    .left {
      width: 411px;
      border-right: 1px solid #1e2334;
      height: 100%;
      z-index: 2;
      left: 0;
      min-width: 320px;

      .nav_ul {
        list-style: none;
        padding: 0;
        color: #3a4365;
        font-family: "Futwora";
        margin: 0;
        padding: 15px;
        box-sizing: border-box;

        li {
          font-family: "Gotham";
          padding: 15px 25px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          font-size: 15px;
          margin-top: 10px;
          transition: all 0.3s;
          -webkit-transition: all 0.3s;

          &:nth-child(1) {
            margin-top: 0px;
          }

          .icon_img {
            margin-right: 15px;
            width: 25px;
          }

          &:hover {
            background: #151526;
            border-radius: 10px;
          }
        }
      }
    }

    .right {
      width: 100%;

      .market_info {
        display: flex;
        height: 294px;
        // border-bottom: 1px solid #1e2334;
        box-sizing: border-box;
        width: 100%;

        .num {
          width: 400px;
          border-right: 1px solid #1e2334;

          .lock {
            border-bottom: 1px solid #1e2334;
            padding: 30px;
            box-sizing: border-box;
            height: 147px;

            .lock_title {
              color: #3a4365;
              font-size: 15px;
              font-family: "Gotham";
              margin-bottom: 0;
              text-align: start;
            }

            .lock_num {
              display: flex;
              align-items: flex-end;
              font-size: 26px;
              margin-top: 20px;
              color: white;
              font-weight: bold;
              font-family: "Gotham";
            }

            .toBTC {
              display: flex;
              font-size: 14px;
              color: #3a446482;
              margin-left: 5px;
            }

            .week {
              margin-top: 8px;
              color: #3fb68b;
              display: flex;
              align-items: center;

              .up {
                background: url("/up.svg") center no-repeat;
                background-size: cover;
                background-size: cover;
                width: 10px;
                height: 10px;
                margin-bottom: 5px;
                margin-right: 2px;
              }

              .week_t {
                color: #6f6e84;
                margin-left: 4px;
              }
            }

            .borrow_title {
              color: #3a4365;
              font-size: 15px;
              font-family: "Gotham";
              margin-bottom: 0;
              text-align: start;
            }

            .borrow_num {
              display: flex;
              align-items: flex-end;
              font-size: 26px;
              margin-top: 20px;
              color: white;
              font-weight: bold;
              font-family: "Gotham";
            }

            .borrow_tote {
              margin-top: 8px;
              color: #3fb68b;
              display: flex;
              align-items: center;

              .up {
                background: url("/up.svg") center no-repeat;
                background-size: cover;
                background-size: cover;
                width: 10px;
                height: 10px;
                margin-bottom: 5px;
                margin-right: 2px;
              }

              .tote {
                color: #6f6e84;
                margin-left: 4px;
              }
            }
          }
        }
      }

      .traderview {
        position: relative;
        background: url("/trader_background.png") center repeat-x;
        width: 75%;
        border-bottom: 1px solid #1e2334;

        .traderview_info_box {
          position: absolute;
          color: white;
          left: 50%;
          right: 50%;
          top: 50%;
          bottom: 50%;
          width: 400px;
          background: #0000007d;
          padding: 25px;
          margin-left: -200px;
          margin-top: -30px;
          height: 65px;
          text-align: center;
          border-radius: 5px;
          font-family: "Gotham";
          font-size: 15px;
          border: 1px solid #1e2334b0;
        }
      }
    }
  }
}
</style>
