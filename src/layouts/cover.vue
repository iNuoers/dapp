<template>
  <div class="index_body">
    <div class="mask_wallet" v-if="wallet" @click.prevent="pop_connect_wallet">
      <div class="content_pop">
        <div class="wallet_title">
          <p class="wallet_box_title">Connect Wallet</p>
          <div class="footer_close">
            <v-btn @click.prevent="pop_connect_wallet">Close</v-btn>
          </div>
        </div>
      </div>
    </div>
    <div class="coin_search" v-if="coin_search">
      <div class="content_pop">
        <p class="wallet_box_title">Coin Search</p>
        <v-text-field
            dark
            label="Coin Name/ Symbol"
            hide-details="auto"
            v-model="coin_search_val"
            class="lastfield mt-5">
        </v-text-field>
        <div class="footer_close">
          <v-btn @click.prevent="pop_search_coin">Close</v-btn>
        </div>
      </div>
    </div>
    <div class="dapp_settings" v-if="dappsettings">
      <div class="content_pop">
        <p class="title">Skin</p>
        <ul class="skin">
          <a class="skin_light" @click="ChangeSkin(0)">🌞</a>
          <a class="skin_dark" @click="ChangeSkin(1)">🌛</a>
        </ul>
        <p class="title">Language Setting</p>
        <ul class="skin">
          <a class="skin_light" @click.prevent="ChangeLanguage('en')">EN</a>
          <a class="skin_dark" @click.prevent="ChangeLanguage('cn')">CN</a>
        </ul>
        <p class="title">Slippage Setting</p>
        <ul class="skin">
          <a class="skin_light" @click.prevent="ChangeLanguage('en')">EN</a>
          <a class="skin_dark" @click.prevent="ChangeLanguage('cn')">CN</a>
        </ul>
        <div class="footer_close">
          <v-btn @click.prevent="pop_dapp_settings">Close</v-btn>
        </div>
      </div>
    </div>
    <bal-header/>
    <nuxt/>
    <footer class="footer">
      <div class="coin_price">$3.11 / {{ coin_symbol }}</div>
      <div class="new">Airdrop start in the wed.23:33.</div>
    </footer>
  </div>
</template>

<script>
import {sleep} from "@/plugins/network"
import {GetMetaNetConfig} from "vue-blocklink"
import BalHeader from "@/components/header";
import {EventBus} from "vue-backgrounds";
import string_tx from "@/api/mixins/string_tx";
import {MoonBaycc} from "@/api/imple/MoonBayCC.";
import logic from "@/api/mixins/balincer/logic";

export default {
  mixins: [string_tx, logic],
  components: {BalHeader},
  data() {
    return {
      coin_symbol: process.env.coin_symbol,
      coin_address: process.env.coin_address,
      coin_profile: process.env.coin_profile,
      coin_search_val: "",
      wallet: false,
      coin_search: false,
      dappsettings: false,
      wallet_value: 0,
    };
  },
  mounted() {
    this.$nextTick(() => {
      MoonBaycc.Instance()
      this.LanguageStart();
    });
  },
  created() {
    EventBus.$on("pop_search_coin", this.pop_search_coin);
    EventBus.$on("pop_connect_wallet", this.pop_connect_wallet);
    EventBus.$on("pop_dapp_settings", this.pop_dapp_settings);
    EventBus.$on("wallet_ready", this.wallet_ready)
    EventBus.$on("heartbeat", this.contract_scan)
    EventBus.$on("add_coin", this.addCoin)
    this.$on("notify_block_installed", this.installed)
    this.$on("imtoken_on_detect", this.imtokenStyling)
    this.$on("notify_metamask_not_install", this.nometamask)

  },
  beforeDestroy() {
    EventBus.$off("pop_search_coin", this.pop_search_coin);
    EventBus.$off("pop_connect_wallet", this.pop_connect_wallet);
    EventBus.$off("pop_dapp_settings", this.pop_dapp_settings);
    EventBus.$off("wallet_ready", this.wallet_ready)
    EventBus.$off("add_coin", this.addCoin)
    EventBus.$off("heartbeat", this.contract_scan)
    this.$off("notify_block_installed", this.installed)
    this.$off("imtoken_on_detect", this.imtokenStyling)
    this.$off("notify_metamask_not_install", this.nometamask)
  },
  methods: {
    imtokenStyling() {
    },
    nometamask() {
    },
    /**
     * the framework
     */
    async installed() {
      if (this.matchChainId(process.env.chainid)) {
        await this.contract_init()
        await this.wallet_scan()
        await this.contract_scan()
        if (this.loading) {
          this.loading = false
        }
      } else {
        this.notyError(`This contract requires ${process.env.network} network`)
        await this.blockLink.metamask_detect_chain_process_flow(GetMetaNetConfig(process.env.chainid))
      }
    },
    notinstall() {
      this.notyError(`Please using the correct network configuration for ${process.env.network}`)
    },
    wallet_ready(wblock) {
      this.wallet_done = true
      this.wallet_short_address = this.shortedHash(wblock.getAccountAddress())
      this.contract_scan()
    },
    addCoin() {
      this.blockLink.metamask_add_token({
        type: "ERC20",
        options: {
          address: this.coin_address, // The address that the token is at.
          symbol: "BLCR", // A ticker symbol or shorthand, up to 5 chars.
          decimals: 18, // The number of decimals in the token
          image: this.coin_profile// A string url of the token logo
        }
      })
    },
    pop_search_coin() {
      this.coin_search = !this.coin_search;
    },
    pop_connect_wallet() {
      this.wallet = !this.wallet;
    },
    pop_dapp_settings() {
      this.dappsettings = !this.dappsettings;
    },
  },
};
</script>

<style lang="scss">
@import "~assets/styles/patch/_customvar.scss";
@import "~assets/styles/patch/_materials.scss";

@font-face {
  font-family: "Gotham";
  src: url("/Gotham.woff") format("woff");
}

.wallet_title {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  font-family: "Gotham";
}

.mask_wallet,
.dapp_settings {
  @extend .balincer_dialog;

  .content_pop {
    width: 400px;
    height: 350px;
    position: absolute;
    left: 50%;
    right: 50%;
    top: 50%;
    bottom: 50%;
    margin-top: -230px;
    margin-left: -180px;
    color: $bal_white_color;
  }
}

.coin_search {
  @extend .balincer_dialog;

  .content_pop {
    width: 600px;
    height: 200px;
    position: absolute;
    left: 50%;
    right: 50%;
    top: 10vh;
    margin-top: 0px;
    margin-left: -180px;
    color: $bal_white_color;
  }
}
</style>
