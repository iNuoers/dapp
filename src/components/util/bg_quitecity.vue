<template>
  <div class="cover_opx">
    <div class="glitch">
      <div class="glitch-img"></div>
      <div class="glitch-img"></div>
      <div class="glitch-img"></div>
      <div class="glitch-img"></div>
    </div>
    <div class="block-main">
      <div class="layout__wrap">
        <div class="block-main__logo">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "bg_kckacity"
}
</script>
<style scoped lang="scss">

.cover_opx {
  background: url("~assets/img/_egt/main.jpeg") no-repeat center top var(--color-bg);

  .block-main {
    margin-bottom: 100px;

    .block-main__logo {
      padding-top: 195px;
      text-align: center;


      .block-main__logo-text {
        position: relative;
        z-index: 10;
        display: block;
        margin-top: 10px;
        text-align: center;
        font-size: 18px;
        line-height: 25px;
        font-weight: 900;
        letter-spacing: 0.51em;
        text-transform: uppercase;
        color: #F208DA;
      }

      .block-main__logo-text-small {
        position: relative;
        z-index: 10;
        display: block;
        margin-top: 10px;
        text-align: center;
        font-size: 12px;
        line-height: 20px;
        font-weight: 900;
        text-transform: none;
        color: #fff;
      }
    }
  }

}


</style>
