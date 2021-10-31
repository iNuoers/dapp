<template>
  <div>
    <header class="header">
      <div class="logo" />
       <ul class="skin">
        <!-- <a class="skin_light" @click="switch_skin(0)">🌞</a>
        <a class="skin_dark" @click="switch_skin(1)">🌛</a> -->
      </ul>
      <ul class="header_nav">
        <li class="home_buttom" />
        <li class="header_nav_dot" />
        <li>Markets</li>
        <li class="header_nav_dot" />
        <li>Margin</li>
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
        <div class="wallet">Connect Wallet</div>
      </div>
    </header>

    <nuxt />

    <footer class="footer">
      <div class="coin_price">$3.11 / BLCR</div>
      <div class="new">Airdrop start in the wed.23:33.</div>
    </footer>
  </div>
</template>
<script>
export default {
  switch_skin: function (e) {
    if (e == 0) {
      localStorage.setItem("skin", e);
      console.log("skin:", localStorage.getItem("skin"));
    } else if (e == 1) {
      localStorage.setItem("skin", e);
      console.log("skin", localStorage.getItem("skin"));
    }
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
  backdrop-filter: saturate(180%) blur(20px);
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
    margin-left: -16%;
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
    .lang{
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
  padding: 0 10px;
  .coin_price {
    font-size: 13px;
    line-height: 16px;
    display: grid;
    font-family: "Gotham";
    align-items: center;
    padding: 0 8px;
    border-right: 1px solid #1e2334;
    color: #374160;
    width: 252px;
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
