<template>
  <div class="coverx">
    <div class="glitch">
      <div class="glitch-img"></div>
      <div class="glitch-img"></div>
      <div class="glitch-img"></div>
      <div class="glitch-img"></div>
    </div>
    <div class="block-main">
      <div class="layout__wrap">
        <div class="block-main__logo">
          <img src="~assets/img/_egt/egtv6.svg"/>
          <!--     <img src="~assets/img/branding/eclipcity.svg?v=1" width="100%"/>-->
          <span class="block-main__logo-text">EGTT Marketplace</span>
          <span class="block-main__logo-text-small">The worlds first Blockchain Software and technology platform for growing networks, revenue and earnings</span>
        </div>
        <div class="block-main__list">
          <div class="block-main__list-text">EGTT marketplace provides the software tools and training your business
            needs to enhance your business efficiency and revenue growth
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bg_coverc"
}
</script>

<style scoped lang="scss">
.coverx {
  background: url("~assets/img/_egt/main.jpeg") no-repeat center top var(--color-bg);
}

.block-main {
  margin-bottom: 100px;
}

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

  > img {
    max-width: 400px;
    width: 100%;
    position: relative;
    z-index: 10;
  }
}

.block-main__list {
  padding-top: 110px;
  position: relative;
  display: block;

  &-text {
    display: block;
    margin-bottom: 110px;
    font-size: 11px;
    line-height: 20px;
    font-weight: 900;
    text-align: center;
    color: #fff;
  }
}


@media (min-width: 640px) and (max-width: 800px) {
  .block-main__logo {
    padding-top: 150px;
    text-align: center;

    img {
      max-width: 240px;
      width: 100%;
    }
  }
  .block-main__list {
    display: block;
    padding-top: 150px;
    position: relative;
  }
}


@media (min-width: 300px) and (max-width: 639px) {
  .block-main__logo {
    padding-top: 110px;
    text-align: center;

    img {
      max-width: 190px;
      width: 100%;
    }
  }
  .block-main__list {
    display: block;
    padding-top: 80px;
    position: relative;
  }
}


@media (max-width: 300px) {
  .block-main__logo {
    padding-top: 130px;
    text-align: center;

    img {
      max-width: 200px;
      width: 100%;
    }
  }
  .block-main__list {
    display: none;
  }
}


.block-main__item {
  display: flex;
}

.block-main__item-left {
  width: 85px;
  height: 85px;
}

.block-main__item-right {
  padding-top: 25px;
}

.block-main__item-right small {
  display: block;
  font-size: 12px;
  line-height: 16px;
  font-weight: 700;
  text-transform: uppercase;
}

.block-main__item-right strong {
  display: block;
  font-size: 25px;
  line-height: 31px;
  font-weight: 700;
  font-family: 'CalibreM';
  color: var(--color-pink);
}
</style>
