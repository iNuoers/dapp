<template>
  <div class="header">
    <div class="logo" />
    <ul class="skin">
      <a class="skin_light" @click="switchskin(0)">🌞</a>
      <a class="skin_dark" @click="switchskin(1)">🌛</a>
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
      <div class="wallet">Connect Wallet</div>
    </div>
  </div>
</template>

<script>
export default {
  switchskin:function(e){
    if(e == 0){
      localStorage.setItem("skin",e);
      console.log("skin:",localStorage.getItem("skin"));
    }else if(e == 1){
      localStorage.setItem("skin",e);
      console.log("skin",localStorage.getItem("skin"));
    }
  }
};
</script>
<style lang="less">
@font-face {
  font-family: "Gotham";
  src: url("/Gotham.woff") format("woff");
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
    .wallet {
      font-family: "Gotham";
      color: #ffc037;
      font-size: 15px;
      margin-right: 15px;
    }
  }
}
</style>
