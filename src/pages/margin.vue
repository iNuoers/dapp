<template>
  <section id="indexbox" class="index">
    <ul class="page_header">
      <li class="coin_info">
        <div class="coin_img"/>
        <div class="coin_text">
          <div class="coin_name">BTC</div>
          <div class="coin_name_j">Bitcoin</div>
        </div>
        <div class="coin_change">CHANGE</div>
      </li>
      <li class="coin_max_info">
        <!-- <div class="info_line" /> -->
        <div class="price">$62,004</div>
        <div class="info_line"/>
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
          <div class="index_price_num"><p class="up">
            <div class="up_icon"/>
            $1,461.00 (2.42%) </p></div>
        </div>
        <!-- <div class="info_line" />
<div class="index_price">
  <div class="index_price_title">Open Interest</div>
  <div class="index_price_num">$61,867.60</div>
</div> -->
        <div class="info_line"/>
        <div class="index_price">
          <div class="index_price_title">1h Funding</div>
          <div class="index_price_num">$61,867.60</div>
        </div>
        <div class="info_line"/>
        <div class="index_price">
          <div class="index_price_title">24h Volume</div>
          <div class="index_price_num">$61,867.60</div>
        </div>
        <div class="info_line"/>
        <div class="index_price">
          <div class="index_price_title">24h Trades</div>
          <div class="index_price_num">$61,867.60</div>
        </div>

        <div class="info_line"/>
        <div class="index_price">
          <div class="index_price_title">Next Funding</div>
          <div class="index_price_num">$61,867.60</div>
        </div>


      </li>
    </ul>
    <div class="app">
      <div class="left">
        <div class="right_header">
          <div class="trade_mode">
            <div class="trade_mode_img"/>
          </div>
          <div class="trade_mode">
            <div class="reflash_mode_img"/>
          </div>
          <div class="trade_mode">
            <div class="setting_mode_img"/>
          </div>

        </div>

        <div class="left_body">
          <div class="borrow">
            <div class="borrow_title">
              <p class="borrow_title_text">Borrow</p>
              <p class="borrow_title_info">MAX available:0 USDC</p>
            </div>
            <div class="borrow_input">

              <v-text-field
                  dark
                  label="Amount"
                  type="number"
                  hide-details="auto"
                  v-model="margin_val_borrow"
                  class="borrow_input_body"/>

              <div class="borrow_input_control">
                <input type="button" class="borrow_input_maxbutton" value="MAX"/>

                <select class="borrow_input_select">
                  <option>BTC</option>
                  <option>ETH</option>
                </select>
              </div>
            </div>
          </div>
          <div class="dragnum dragbox" @mousemove="timeMove($event)" @mouseleave="timeEnd($event)" ref="dragbox">
            <div class="progress" @click="timeClick($event)">
              <div class="progressbar" :style="{width:distance+'px',transition:'width '+transTime+'s'}">
              </div>
            </div>
            <div class="bardrag" @mousedown="timeDown($event)" @mouseup="timeEnd($event)" :style="{left:distance+'px'}">
            </div>
          </div>
          <ul class="l_num">
            <li>
              <div class="l_num_line"/>
              <p>0x</p>
            </li>
            <li>
              <div class="l_num_line"/>
              <p>1x</p>
            </li>
            <li>
              <div class="l_num_line"/>
              <p>2x</p>
            </li>
            <li>
              <div class="l_num_line"/>
              <p>3x</p>
            </li>

          </ul>
          <div class="exchange">
            <div class="exchange_line"/>
            <div class="exchange_button">⬆EXCHANGE⬇</div>
            <div class="exchange_line"/>
          </div>

          <div class="borrow">
            <div class="borrow_title">
              <p class="borrow_title_text">Buy</p>
              <p class="borrow_title_info">MAX available:0 USDC</p>

            </div>
            <div class="borrow_input">

              <v-text-field
                  dark
                  label="Amount"
                  type="number"
                  hide-details="auto"
                  v-model="margin_val_borrow"
                  suffix="BTC"
                  class="borrow_input_body"/>

              <div class="borrow_input_control">
                <input type="button" class="borrow_input_maxbutton" value="MAX"/>
                <select class="borrow_input_select">
                  <option>BTC</option>
                  <option>ETH</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="trade_view_box">
          <div class="trade_view_header">
            <ul class="trade_view_time">
              <li>1m</li>
              <li>30m</li>
              <li>1h</li>
              <li>Days</li>
            </ul>
          </div>
          <div class="trade_view_body">

          </div>
        </div>
        <!-- <div class="position"></div> -->
      </div>
    </div>
  </section>
</template>

<script>
import {EventBus} from "vue-backgrounds/src/engines/EventBus";

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
    return {
      pos: {},
      startX: null,
      locked: false,
      distance: 0, //当前位置
      endDistance: 0, //上次操作结束位置
      transTime: 0.3, //点击拖动动画
      dragWidth: 0, //进度条宽度

      startNum: 10,
      endNum: 50,
      nowNum: 10,

      margin_val_borrow: 0
    };
  },
  methods: {
    mousePos: function (e) {
      var pos = {};
      pos.x = e.pageX;
      this.pos = pos;
      return pos;
    },
    timeDown: function (e) {
      // 当鼠标指针移动到元素上方，并按下鼠标左键时
      this.transTime = 0;
      this.mousePos(e);
      this.startX = this.pos.x;
      this.locked = true;
      this.endDistance = this.distance;
      // console.log(this.pos);
    },
    timeMove: function (e) {
      // 当鼠标指针移动到元素上方移动时
      if (!this.locked) return;
      var pos = this.mousePos(e);
      var moveX = pos.x - this.startX;
      if (this.distance >= this.dragWidth) {
        this.distance = this.dragWidth - 10;
      } else {
        if (
            (this.distance <= 0 && moveX < 0) ||
            (this.distance >= this.dragWidth && moveX > 0)
        )
          return;
        this.distance = this.endDistance + moveX;

        this.countNum(this.distance);
      }
      // console.log(moveX);
    },
    timeEnd: function (e) {
      this.transTime = 0.3;
      this.locked = false;
    },
    timeClick: function (e) {
      //点击拖动到指定位置
      var x = e.offsetX,
          moveX = x - this.distance;
      this.distance += moveX;
      this.countNum(this.distance);
    },
    countNum: function (num) {
      var len = this.endNum - this.startNum;
      var scale = Math.ceil(this.dragWidth / len);
      this.nowNum = this.startNum + Math.ceil(num / scale);
    },
  },
  mounted: function () {
    this.dragWidth = $(".dragbox").width();
    console.log(this.dragWidth);
  },
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
  // display: flex;
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
      width: 415px;
      display: flex;
      align-items: center;
      height: 25px;
      position: relative;
      border-right: 1px solid #1e2334;
      display: flex;
      align-items: center;
      height: 25px;
      position: relative;
      min-width: 320px;
      max-width: 320px;
      border-right: 1px solid #1e2334;
    }

    .coin_change {
      position: absolute;
      right: 20px;
      color: #28283d;
      top: 6px;
      font-size: 12px;
      transition: all 0.5s;
      -webkit-transition: all 0.5s;

      &:hover {
        padding: 10px;
        box-sizing: border-box;
        background: #1a1c3080;
        border-radius: 3px;
        top: -4px;
        right: 10px;
      }
    }

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
    padding-left: 40px;
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    justify-content: space-around;

    .info_line {
      height: 25px;
      background: #1e2334;
      width: 1px;
      margin: 0 30px;
    }

    .price {
      font-family: "Gotham";
      margin-top: 7px;
      color: #ff5353;
      font-size: 20px;
    }

    .index_price {
      text-align: center;
      margin-top: 3px;

      .index_price_title {
        font-family: "Gotham";
        color: #292940;
        white-space: nowrap;
        margin-bottom: 3px;
        font-size: 12px;
      }

      .index_price_num {
        font-family: "Gotham";
        color: #6f6e84;
        font-size: 15px;
        white-space: nowrap;
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
  height: 100%;

  .left {
    height: 100%;
    width: 320px;
    border-right: 1px solid #1e2334;
    min-width: 320px;

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
        border-bottom: 1px solid #1e2334;
        justify-content: center;
        transition: all 0.5s;
        -webkit-transition: all 0.5s;

        &:hover {
          background: #101220;
          border-bottom: 1px solid #1e2334;
        }

        .trade_mode_img {
          background: url("/uniswap.png") center no-repeat;
          background-size: cover;
          width: 25px;
          height: 25px;
        }

        .reflash_mode_img {
          background: url("/reflash.svg") center no-repeat;
          background-size: cover;
          width: 20px;
          height: 20px;
        }

        .setting_mode_img {
          background: url("/setting.svg") center no-repeat;
          background-size: cover;
          width: 20px;
          height: 20px;
        }
      }
    }

    .left_body {
      padding: 20px;

      .borrow {
        padding-bottom: 20px;

        .borrow_title {
          display: flex;
          align-items: center;

          .borrow_title_text {
            font-family: "Gotham";
            font-size: 15px;
            color: #6f6e84;
          }

          .borrow_title_info {
            margin-left: 5px;
            font-family: "Gotham";
            font-size: 12px;
            color: #292940;
          }
        }

        .borrow_input {
          height: 45px;
          background: #0f111e;
          margin-top: 15px;
          border-radius: 5px;
          display: flex;
          position: relative;
          align-items: center;

          .borrow_input_body {
            display: flex;
            flex-flow: row;
            margin-right: 10px;
          }

          .borrow_input_control {
            display: flex;
            right: 10px;
            margin-top: 15px;

            .borrow_input_maxbutton {
              color: #6f6e84;
            }

            .borrow_input_select {
              color: #69687d;
              padding: 5px;
              box-sizing: border-box;
              background: #181c32;
              width: 50px;
              margin-left: 10px;
              text-align: center;
              line-height: 20px;
              border-radius: 5px;
            }
          }
        }
      }

      .dragbox {
        width: 200px;
        position: relative;
        height: 10px;
        background-color: #f5f5f5;
        border-radius: 4px;
        -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
      }

      .progress {
        background: #131626;
        margin-bottom: 0px;
        height: 10px;
        margin-bottom: 20px;
        overflow: hidden;
        border-radius: 4px;
        -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
      }

      .progressbar {
        background: linear-gradient(to right, #ff6161, #ffc138);
        float: left;
        width: 0;
        height: 100%;
        font-size: 12px;
        line-height: 20px;
        color: #fff;
        text-align: center;
        -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
        box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
        -webkit-transition: width 0.6s ease;
        -o-transition: width 0.6s ease;
        transition: width 0.6s ease;
      }

      .bardrag {
        position: absolute;
        top: -10px;
        left: 10px;
        display: inline-block;
        height: 30px;
        width: 50px;
        background: #222132;
        border: 3px solid #0c0d17;
        border-radius: 10px;
        cursor: e-resize;
      }

      .dragnum {
        display: inline-block;
        vertical-align: middle;
        width: 100%;
        margin-top: 10px;
      }

      .nowbar {
        margin-top: 10px;
      }

      .l_num {
        margin-top: 5px;
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 0;
        list-style: none;

        li {
          text-align: center;
          /* align-items: baseline; */
          width: 20px;

          .l_num_line {
            background: #181c32;
            width: 2px;
            height: 5px;
            margin: 0 auto;
          }

          p {
            margin-top: 3px;
            color: #69687d;
            font-size: 15px;
          }
        }
      }

      .exchange {
        width: 100%;
        display: flex;
        align-items: center;
        margin: 25px 0;

        .exchange_line {
          width: 100%;
          height: 2px;
          background: #1e2334;
        }

        .exchange_button {
          width: 100%;
          background: #1e2334;
          border-radius: 35px;
          margin: 0 10px;
          color: #6f6e84;
          font-size: 14px;
          padding: 5px 15px;
          transition: all 0.5s;
          -webkit-transition: all 0.5s;

          &:hover {
            background: #2b334c;
          }
        }
      }
    }
  }

  .right {
    width: 100%;

    .trade_view_box {
      width: 100%;
      height: 100%;
      border-bottom: 1px solid #1e2334;

      .trade_view_header {
        width: 100%;
        height: 50px;
        border-bottom: 1px solid #1e2334;
        display: flex;
        align-items: center;
        padding: 0 10px;
        padding-bottom: 3px;

        .trade_view_time {
          list-style: none;
          padding: 0;
          padding-top: 3px;
          color: #292940;
          display: flex;

          li {
            padding: 5px 20px;
            padding-top: 10px;
            margin-right: 5px;
            transition: all 0.5s;
            -webkit-transition: all 0.5s;

            &:hover {
              background: #121322;
              padding: 5px 20px;
              padding-top: 10px;
            }
          }
        }
      }

      .trade_view_body {
        height: 100%;
        border-right: 1px solid #1e2334;
        border-bottom: 1px solid #1e2334;
        background: url("/traderview_background.png") top repeat-x;
        background-size: 350px 500px;
      }
    }
  }
}

</style>
