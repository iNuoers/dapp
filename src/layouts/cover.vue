<template>
  <div class="index_body">
    <div class="mask_wallet" v-if="wallet">
      <div class="wallet_box">
        <p class="wallet_box_title">Connect Wallet</p>
        <p class="wallet_box_title btnhand" @click.prevent="pop_connect_wallet">Close</p>
      </div>
    </div>
    <div class="dapp_settings" v-if="dappsettings">
      <div class="wallet_box">
        <p class="wallet_box_title">Balincer Settings</p>
        <ul class="skin">
          <a class="skin_light" @click="ChangeSkin(0)">🌞</a>
          <a class="skin_dark" @click="ChangeSkin(1)">🌛</a>
        </ul>
        <div class="lang">EN</div>
        <ul class="skin">
          <a class="skin_light" @click.prevent="ChangeLanguage('en')">EN</a>
          <a class="skin_dark" @click.prevent="ChangeLanguage('cn')">CN</a>
        </ul>
        <p class="wallet_box_title btnhand" @click.prevent="pop_dapp_settings">Close</p>
      </div>
    </div>
    <bal-header/>
    <nuxt/>
    <footer class="footer">
      <div class="coin_price">$3.11 / BLCR</div>
      <div class="new">Airdrop start in the wed.23:33.</div>
    </footer>
  </div>
</template>
<script>
import BalHeader from "@/components/header";
import {EventBus} from "vue-backgrounds";
import string_tx from "~/api/mixins/string_tx";

export default {
  mixins: [string_tx],
  components: {BalHeader},
  data() {
    return {
      wallet: false,
      dappsettings: false,
      wallet_value: 0,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.LanguageStart()
    })
  },
  created() {
    EventBus.$on("pop_connect_wallet", this.pop_connect_wallet)
    EventBus.$on("pop_dapp_settings", this.pop_dapp_settings)
  },
  beforeDestroy() {
    EventBus.$off("pop_connect_wallet", this.pop_connect_wallet)
    EventBus.$off("pop_dapp_settings", this.pop_dapp_settings)
  },
  methods: {
    pop_connect_wallet() {
      this.wallet = !this.wallet
    },
    pop_dapp_settings() {
      this.dappsettings = !this.dappsettings
    },
  },
};
</script>
<style lang="scss">
.mask_wallet, .dapp_settings {
  top: 0px;
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

    p {
      color: white;
    }
  }
}
</style>
