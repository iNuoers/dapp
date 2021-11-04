<template>
  <div class="index_body">
    <header class="header">
      <div class="logo" />
      <ul class="skin">
        <!-- <a class="skin_light" @click="switch_skin(0)">🌞</a>
        <a class="skin_dark" @click="switch_skin(1)">🌛</a> -->
      </ul>
      <ul class="header_nav">
        <li class="home_buttom" />
        <li class="header_nav_dot" />
        <li @click="golink(0)">Markets</li>
        <li class="header_nav_dot" />
        <li @click="golink(1)">Margin</li>
        <li class="header_nav_dot" />
        <li>Rank</li>
        <li class="header_nav_dot" />
        <li>Dashboard</li>
        <li class="header_nav_dot" />
        <li>Staking</li>
      </ul>
      <div class="header_right">
        <div class="help"></div>
        <div class="notice"></div>
        <div class="lang">EN</div>
        <div class="wallet" @click="showwallet()">Connect Wallet</div>
      </div>
    </header>

    <div class="mask_wallet" v-if="wallet" @click="showwallet()">
      <div class="wallet_box">
        <p class="wallet_box_title">Connect Wallet</p>
      </div>
    </div>

    <nuxt />

    <footer class="footer">
      <div class="coin_price">$3.11 / BLCR</div>
      <div class="new">Airdrop start in the wed.23:33.</div>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      wallet: 0,
      wallet_value: 0,
    };
  },
  methods: {
    switch_skin: function (e) {
      if (e == 0) {
        localStorage.setItem("skin", e);
        console.log("skin:", localStorage.getItem("skin"));
      } else if (e == 1) {
        localStorage.setItem("skin", e);
        console.log("skin", localStorage.getItem("skin"));
      }
    },
    golink: function (a) {
      if (a == 0) {
        this.$router.replace("/");
      } else if (a == 1) {
        this.$router.replace("/margin");
      }
    },
    showwallet: function () {
      console.log(this.wallet);
      let show = this.wallet;
      show++;
      if (show == 2) {
        this.wallet = 0;
      } else {
        this.wallet = show;
      }
    },
  },
};
</script>

<style lang="less">
@font-face {
  font-family: "Gotham";
  src: url("/Gotham.woff") format("woff");
}

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: #0c0d17;
}

.mask_wallet {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
  backdrop-filter: blur(5px);
  .wallet_box {
    width: 400px;
    height: 350px;
    position: absolute;
    left: 50%;
    right: 50%;
    top: 50%;
    bottom: 50%;
    border: 1px solid #1e2334;
    background: #0f101c;
    margin-top: -230px;
    margin-left: -180px;
    border-radius: 5px;
    padding: 20px;
  }
}

.header {
  width: 100%;
  border-bottom: 1px solid #1e2334;
  height: 50px;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 999;
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
    font-family: "Futwora";
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
      font-family: "Gotham";
      padding: 10px;
      box-sizing: border-box;
      font-size: 14px;

      &.active,
      &:hover {
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
      font-family: "Gotham";
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
  font-family: "Futwora";
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

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
