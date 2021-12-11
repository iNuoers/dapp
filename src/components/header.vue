<template>
  <div class="header">
    <div class="logo"/>
    <ul class="header_nav">
      <li class="btnhand home_buttom" @click="nuxtlink(0)"/>
      <li class="header_nav_dot"/>
      <li class="btnhand" @click="nuxtlink(4)">Markets</li>
      <li class="header_nav_dot"/>
      <li class="btnhand" @click="nuxtlink(1)">Margin</li>
      <li class="header_nav_dot"/>
      <li class="btnhand" @click="nuxtlink(2)">Rank</li>
      <li class="header_nav_dot"/>
      <li class="btnhand" @click="nuxtlink(3)">Dashboard</li>
      <li class="header_nav_dot"/>
      <li class="btnhand" @click="nuxtlink(5)">Staking</li>
    </ul>
    <div class="header_right">
      <div class="help btnhand"></div>
      <v-btn class="setting btnhand" @click.prevent="showsetting">
        <v-icon>mdi-cog</v-icon>
      </v-btn>
      <v-btn class="wallet btnhand" v-if="!isConnect" @click.prevent="showwallet">Connect Wallet</v-btn>
      <div class="wallet btnhand" v-if="isConnect">
         <span v-if="isConnect">
          <v-f-number
              :start-val="0"
              :end-val="farming_coin"
              :decimals="18"
              :decimal-show="3"
              :duration="2000"
              class="bal_"
              subfix="FC"
          />
          <span class="address">
            {{ address_x }}
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import string_tx from "@/api/mixins/string_tx";
import {EventBus} from "vue-backgrounds";
import lo_wallet from "@/api/mixins/balincer/lo_wallet";

export default {
  name: "BalHeader",
  mixins: [string_tx, lo_wallet],
  data() {
    return {
      isConnect: false
    }
  },
  created() {
    EventBus.$on("wallet_ready", this.wallet_ready)
  },
  beforeDestroy() {
    EventBus.$off("wallet_ready", this.wallet_ready)
  },
  methods: {
    nuxtlink(a) {
      if (a === 0) {
        this.$router.replace("/");
      } else if (a === 1) {
        this.$router.replace("/margin");
      } else if (a === 2) {
        this.$router.replace("/rank");
      } else if (a === 3) {
        this.$router.replace("/dashboard");
      } else if (a === 4) {
        this.$router.replace("/markets");
      } else if (a === 5) {
        this.$router.replace("/staking");
      }
    },
    showwallet() {
      EventBus.$emit("pop_connect_wallet")
    },
    showsetting() {
      EventBus.$emit("pop_dapp_settings")
    },
    wallet_ready() {
      this.isConnect = true
    }
  }
};
</script>
<style lang="scss">
@import "~assets/styles/patch/_customvar.scss";
@import "~assets/styles/patch/_materials.scss";


.header {
  font-family: "Gotham", sans-serif;
  width: 100%;
  border-bottom: 1px solid $bal_dark_l1_color;
  height: 50px;
  display: flex;
  align-items: center;
  z-index: 3;
  top: 0px;
  background: $bal_dark_l2_color;
  backdrop-filter: blur(5px);
  position: relative;

  .logo {
    background: url("/app.svg") center no-repeat;
    width: 50px;
    background-size: 100%;
    height: 50px;
  }

  .header_nav {
    list-style: none;
    padding: 0;
    display: flex;
    position: absolute;
    align-items: center;
    left: 50%;
    right: 50%;
    justify-content: space-between;
    margin-left: -250px;
    font-size: 15px;
    color: $bal_dark_l1_color;

    .home_buttom {
      background: url("/home.svg") center no-repeat;
      width: 14px;
      height: 14px;

      &:hover {
        background: url("/home_hover.svg") center no-repeat;
        width: 14px;
        height: 14px;
      }
    }

    li {
      padding: 10px;
      box-sizing: border-box;
      font-size: 14px;
      transition: all 0.5s;
      -webkit-transition: all 0.5s;

      &.active,
      &:hover:not(.header_nav_dot) {
        color: $bal_light_color;
        letter-spacing: 0.25px;
        background: #1a1c3080;
        padding: 10px;
        font-size: 14px;
        box-sizing: border-box;
        border-radius: 5px;
      }
    }

    .header_nav_dot {
      background: url("/header_nav_dot.svg") center no-repeat;
      width: 16px;
      opacity: 0.25;
      height: 16px;
    }
  }

  .header_right {
    position: absolute;
    right: 0px;
    display: flex;
    //top: 18px;
    margin-right: 15px;

    .setting {
      @extend .balincer_button;
      color: $bal_light_color;
    }

    .wallet {
      @extend .balincer_button;
      color: $bal_light_color;
      font-size: 15px;

      .address{
        font-size: 10px;
      }
    }
  }
}

.footer {
  height: 40px;
  position: absolute;
  width: 100%;
  bottom: 0px;
  z-index: 5;
  background: $bal_dark_l2_color;
  border-top: 1px solid $bal_dark_l1_color;
  font-size: 15px;
  display: flex;
  align-items: center;
  // padding: 0 10px;
  box-sizing: border-box;

  .coin_price {
    font-size: 13px;
    line-height: 16px;
    display: grid;
    font-family: "Gotham", sans-serif;
    align-items: center;
    padding: 0 15px;
    border-right: 1px solid $bal_dark_l1_color;
    color: $bal_dark_l3_color;
    width: 320px;
    height: 20px;
  }

  .new {
    color: $bal_dark_l3_color;
    font-family: "Gotham", sans-serif;
    margin-left: 15px;

    &:hover {
      color: $bal_dark_l4_color;
    }
  }
}


</style>
