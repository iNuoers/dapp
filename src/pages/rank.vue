<template>
  <section id="indexbox" class="index">
    <div class="app">
      <div class="left">
        <div class="left_body">
          <div class="borrow">
            <div class="borrow_title">
              <p class="borrow_title_text">CATEGORY</p>
            </div>
          </div>
          <ul data-v-8eb96c94="" class="nav_ul">
            <li data-v-8eb96c94="">
              <img data-v-8eb96c94="" src="/icon_code.svg" class="icon_img" />
              Absolute P&L
            </li>
            <li data-v-8eb96c94="">
              <img data-v-8eb96c94="" src="/icon_doc.svg" class="icon_img" />
              Relative P&L
            </li>
          </ul>
        </div>
      </div>
      <div class="right">
        <div class="trade_view_box">
          <div class="trade_view_header">
            <div class="rank_text">
              <p class="title">Ranking</p>
              <p class="info">By Profit / Loss</p>
            </div>
            <ul class="time">
              <li>24H</li>
              <li>7D</li>
              <li>30D</li>
              <li>ALL</li>
            </ul>
          </div>
          <div class="trade_view_body">
            <table>
              <thead>
                <th>Rank</th>
                <th>Trader</th>
                <th>Profit / Loss($)</th>
              </thead>
            </table>
          </div>
        </div>
        <!-- <div class="position"></div> -->
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
      margin-top: 7px;
      color: #ff5353;
      font-size: 20px;
    }
    .index_price {
      text-align: center;
      margin-top: 5px;
      .index_price_title {
        color: #292940;
        white-space: nowrap;
      }
      .index_price_num {
        color: #6f6e84;
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
      padding: 15px;
      .nav_ul {
        list-style: none;
        padding: 0;
        color: #3a4365;
        font-family: "Futwora";
        margin: 0;
        // padding: 15px;
        box-sizing: border-box;
        li {
          font-family: "Gotham";
          // padding: 15px 25px;
          padding: 15px 10px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          font-size: 15px;
          margin-top: 10px;
          transition: all 0.3s;
          -webkit-transition: all 0.3s;
          &:hover {
            background: #0a0a12;
            border-radius: 10px;
          }
          img {
            margin-right: 15px;
            width: 25px;
          }
        }
      }
      .borrow {
        .borrow_title {
          display: flex;
          align-items: center;
          padding: 15px 10px;
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
          .borrow_input_control {
            position: absolute;
            right: 10px;
            .borrow_input_maxbutton {
              color: #6f6e84;
              margin-top: 2px;
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
        height: 85px;
        border-bottom: 1px solid #1e2334;
        display: flex;
        align-items: center;
        padding: 0 10px;
        padding-bottom: 3px;
        justify-content: space-between;
        .rank_text {
          margin-left: 15px;

          .title {
            font-size: 18px;
            font-family: "Gotham";
          }
          .info {
            font-size: 12px;
            color: white;
            margin-top: 5px;
            font-family: "Gotham";
          }
        }
        .time {
          padding: 0;
          list-style: none;
          display: flex;
          padding: 10px;
          background: #131524;
          width: 240px;
          margin-right: 15px;
          border-radius: 5px;
          justify-content: space-around;
          align-items: center;

          li {
            color: white;
            font-family: "Gotham";
            font-size: 15px;
            padding: 9px;
            box-sizing: border-box;
            border-radius: 5px;
            margin: 0 5px;
            &:hover {
              background: #242742;
            }
          }
        }
      }
      .trade_view_body {
        height: 100%;
        border-right: 1px solid #1e2334;
        border-bottom: 1px solid #1e2334;
        box-sizing: border-box;
        table {
          width: 100%;
          line-height: 16px;
          border-collapse: collapse;
          border-spacing: 0;
          thead {
            width: 100%;
            display: flex;
            border-bottom: 1px solid #1e2334;
            padding: 10px;
            box-sizing: border-box;
            background: #131524;
            height: 35px;
            justify-content: space-between;
            th {
              color: white;
              font-size: 12px;
              font-family: "Gotham";
            }
          }
        }
      }
    }
  }
}
</style>
