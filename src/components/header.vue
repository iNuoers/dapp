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
      <li class="btnhand" @click="nuxtlink(0)">Staking</li>
    </ul>
    <div class="header_right">
      <div class="help btnhand"></div>
      <div class="notice btnhand"  @click.prevent="showsetting">🎟 G</div>
      <div class="wallet btnhand" @click.prevent="showwallet">Connect Wallet</div>
    </div>
  </div>
</template>

<script>
import string_tx from "@/api/mixins/string_tx";
import {EventBus} from "vue-backgrounds";

export default {
  name: "BalHeader",
  mixins: [string_tx],
  methods: {
    nuxtlink(a) {
      if (a === 0) {
        this.$router.replace("/");
      } else if (a === 1) {
        this.$router.replace("/margin");
      } else if (a === 2) {
        this.$router.replace("/rank");
      }else if (a === 3) {
        this.$router.replace("/dashboard");
      }else if (a === 4) {
        this.$router.replace("/markets");
      }
    },
    showwallet() {
      EventBus.$emit("pop_connect_wallet")
    },
    showsetting() {
      EventBus.$emit("pop_dapp_settings")
    },
  }
};
</script>
<style lang="scss">
.header {
  font-family: "Gotham", sans-serif;
  width: 100%;
  border-bottom: 1px solid #1e2334;
  height: 50px;
  display: flex;
  align-items: center;
  z-index: 3;
  top: 0px;
  background: #0c0d17;
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
    color: #292940;

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
        color: #f6ba5e;
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
    top: 18px;

    .lang {
      color: #292940;
      margin-right: 10px;
    }

    .wallet {
      color: #ffc037;
      font-size: 15px;
      margin-right: 15px;
    }
  }
}

.footer {
  height: 40px;
  position: absolute;
  width: 100%;
  bottom: 0px;
  z-index: 5;
  background: #0c0d17;
  border-top: 1px solid #1e2334;
  font-size: 15px;
  display: flex;
  align-items: center;
  // padding: 0 10px;
  box-sizing: border-box;

  .coin_price {
    font-size: 13px;
    line-height: 16px;
    display: grid;
    font-family: "Gotham";
    align-items: center;
    padding: 0 15px;
    border-right: 1px solid #1e2334;
    color: #374160;
    width: 320px;
    height: 20px;
  }

  .new {
    color: #37416073;
    font-family: "Gotham";
    margin-left: 15px;

    &:hover {
      color: #374160;
    }
  }
}


</style>
