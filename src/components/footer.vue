<template>
  <div class="footer">
    <div class="coin_price">$3.11 / BLCR</div>
    <div class="new">Airdrop start in the wed.23:33.</div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
    },
    imgSrc: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  methods: {
    // 返回上一页
    getBack() {
      this.$router.back(-1);
    },
  },
};
</script>
<style lang="less">
@font-face {
  font-family: "Gotham";
  src: url("/Gotham.woff") format("woff");
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
</style>
