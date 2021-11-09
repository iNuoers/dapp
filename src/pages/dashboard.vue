<template>
  <section id="indexbox" class="index">
    <div class="app">
      <div class="app_header">
        <div class="app_item">
          <p class="title">Collateral value</p>
          <div class="num">
            0
            <p class="unit">USDT</p>
          </div>
        </div>
        <div class="line" />
        <div class="app_item">
          <p class="title">Collateral value</p>
          <div class="num">
            0
            <p class="unit">USDT</p>
          </div>
        </div>
        <div class="line" />
        <div class="app_item">
          <p class="title">Collateral value</p>
          <div class="num">
            0
            <p class="unit">USDT</p>
          </div>
        </div>
        <div class="line" />
        <div class="app_item">
          <p class="title">Collateral value</p>
          <div class="num">
            0
            <p class="unit">USDT</p>
          </div>
        </div>
        <div class="line" />
        <div class="app_item">
          <p class="title">Collateral value</p>
          <div class="num">
            0
            <p class="unit">USDT</p>
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
  .app {
    display: flex;
    position: relative;
    height: 100%;
    .app_header {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      height: 50px;
      border-bottom: 1px solid #1e2334;
      .line {
        width: 1px;
        height: 20px;
        background: #1e2334;
        margin: 0 10px;
      }
      .app_item {
        margin: 0 10px;
        padding-top: 5px;
        .title {
          font-size: 15px;
        }
        .num {
          display: flex;
          font-size: 18px;
          color: white;
          width: 100%;
          align-items: center;
          justify-content: center;
          .unit {
            font-size: 18px;
            color: #ffc037;
            padding-left: 5px;
          }
        }
      }
    }
  }
}
</style>
