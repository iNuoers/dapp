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
    getBack() {
      this.$router.back(-1);
    },
  },
};
</script>
<style lang="scss">
@import "~assets/styles/patch/_customvar.scss";

.footer {
  height: 40px;
  position: absolute;
  width: 100%;
  bottom: 0px;
  z-index: 5;
  background: $bal_dark_l2_color;
  border-top: 1px solid $bal_dark_l1_color;
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
    border-right: 1px solid $bal_dark_l1_color;
    color: $bal_dark_l3_color;
    width: 252px;
    height: 20px;
  }

  .new {
    color: $bal_dark_l3a_color;
    font-family: "Gotham";
    margin-left: 15px;

    &:hover {
      color: $bal_dark_l3_color;
    }
  }
}
</style>
