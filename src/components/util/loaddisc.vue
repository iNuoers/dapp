<template>
  <v-layout v-show="show" padless fluid class="disc-box hazard" color="transparent">
    <v-layout class="topbackground">
    </v-layout>
    <v-layout class="foreground">
      <v-flex>
        <v-img>
          <div :class="class_name_pre"></div>
        </v-img>
      </v-flex>
      <v-flex v-show="showLoadingText">
        <v-card-text class="ytext">
          <span>{{ loadingText }}</span>
        </v-card-text>
      </v-flex>
    </v-layout>
  </v-layout>
</template>
<!--v-show="show"-->
<script>
export default {
  name: "Loaddisc",
  props: {
    showLoadingText: {
      type: Boolean,
      required: false,
      default: false
    },
    loadingText: {
      type: String,
      required: false,
      default: "Loading ..."
    },
    discType: {
      type: String,
      required: false,
      default: "disc"
    },
    show: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  data: () => ({
    class_name_pre: {
      disc: true,
      record: false,
      black: false,
      bronze: false,
      silver: false,
      gold: false
    }
  }),
  watch: {
    discType(oldval, nval) {
      this.disc_face(nval)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.disc_face(this.discType)
    })
  },
  methods: {
    onClassOff() {
      this.class_name_pre = {
        disc: true,
        record: false,
        black: false,
        bronze: false,
        silver: false,
        gold: false
      }
    },
    onDiscFace(color) {
      this.onClassOff()
      this.class_name_pre.record = true
      this.class_name_pre[color] = true
    },
    disc_face(nval) {
      if (nval === "black") {
        this.onDiscFace(nval)
      } else if (nval === "bronze") {
        this.onDiscFace(nval)
      } else if (nval === "silver") {
        this.onDiscFace(nval)
      } else if (nval === "gold") {
        this.onDiscFace(nval)
      } else {
        this.onClassOff()
      }
    }
  }
}
</script>

<style lang="scss">
$strip_a: #cccccc;
$strip_b: #dbdbdb;
$strip_color: #bc6d0d;
$loading_color: #482b05;
$loading_banner_height: 15vmin;
.disc-box {
  transition-property: opacity;
  transition-duration: .6s;
  transition-timing-function: ease;
  margin: 1em;
  text-align: center;
}

.ytext {
  vertical-align: middle;
  height: 100%;

  span {
    line-height: $loading_banner_height / 2;
    color: $loading_color;
    clear: both;
    font-size: 1.1em;
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    text-align: left;
    display: flex;
    flex-direction: row;
  }
}

.hazard {
  margin: 0;
  height: $loading_banner_height;
  background-image: repeating-linear-gradient(145deg, $strip_a, $strip_a 30px, $strip_b 30px, $strip_b 60px);

  background-blend-mode: overlay;
  background-color: $strip_color;
}

.topbackground {
  z-index: 0;
  position: fixed;
  top: 0;

  .content--canvas {
    height: 100px !important;
    overflow: hidden !important;
    width: 100%;

    /*canvas {
      overflow: hidden !important;
      height: 100px !important;
    }*/
  }

}

.foreground {
  z-index: 1;
}

@-webkit-keyframes spin {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

@keyframes spin {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}

@mixin square_size($size) {
  width: $size;
  height: $size;
}

@mixin childAnimation($Nth, $time_delay) {
  &:nth-child(#{$Nth}) {
    -webkit-animation-delay: $time_delay;
    animation-delay: $time_delay;
  }
}

@mixin enableHoverPause() {
  &:hover {
    -webkit-animation-play-state: paused;
    animation-play-state: paused;
  }
}

.disc {
  display: inline-block;
  margin: 1em;
  border-radius: 50%;
  -webkit-animation: spin 6s linear infinite;
  animation: spin 6s linear infinite;
  @include square_size(10vmin);

  &.middle {
    @include square_size(30vmin)
  }

  &.large {
    @include square_size(50vmin)
  }

  &.xs {
    @include square_size(80vmin)
  }

  &.enableHover {
    @include enableHoverPause()
  }

  @include childAnimation(1, -1.2s);
  @include childAnimation(2, -2.4s);
  @include childAnimation(3, -3.6s);
  @include childAnimation(4, -4.8s);
  @include childAnimation(5, -6s);

  background-image: radial-gradient(circle, #eee 0, #eee 10%, rgba(17, 17, 17, 0.2) 0, rgba(17, 17, 17, 0.2) 11.5%, rgba(255, 255, 255, 0.25) 0, rgba(255, 255, 255, 0.25) 17%, rgba(17, 17, 17, 0.05) 0, rgba(17, 17, 17, 0.05) 17.5%, rgba(255, 255, 255, 0.25) 0, rgba(255, 255, 255, 0.25) 20%, rgba(17, 17, 17, 0.05) 0, rgba(17, 17, 17, 0.05) 20.5%, rgba(255, 255, 255, 0.25) 0, rgba(255, 255, 255, 0.25) 25%, rgba(17, 17, 17, 0.2) 0, rgba(17, 17, 17, 0.2) 30%, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0) 69.5%, rgba(17, 17, 17, 0.15) 0, rgba(17, 17, 17, 0.2) 100%), conic-gradient(#ffffff, #f5e1f6, #ffefd1, #fefec5, #c8c8c8, #8a8a8a, #605859, #704864, #3b49ac, #31c8de, #6cd399, #d0d0d0, #fcfcfc, #ffffff, #ffffff, #eafae9, #a3ffef, #98bcea, #9997a4, #868686, #767676, #f0ed5b, #e2a3a7, #d4d4d4, #ffffff, #ffffff);

}

.record {
  &.black {
    background-color: #111;
    background-image: url("~assets/img/branding/small_logo_black_200px.png");
  }

  &.bronze {
    background-color: #111;
    background-image: url("~assets/img/branding/small_logo_black_200px.png");
  }

  &.silver {
    background-color: #111;
    background-image: url("~assets/img/branding/small_logo_black_200px.png");
  }

  &.gold {
    background-color: #111;
    background-image: url("~assets/img/branding/small_logo_black_200px.png");
  }
}

</style>
