import {
  BlockWrap,
  ImTokenComponent,
  EthereumWeb3Component
} from "vue-blocklink"
// import ETHCom from "vue-blocklink/src/mixins/vue-metamask"
// import {Base64} from "@/api/compress/base64"

import { sleep } from "@/plugins/network"
import { EventBus } from "vue-backgrounds"
import lo_wallet_update from "@/api/mixins/balincer/wallet_update"

export default {
  mixins: [ImTokenComponent, EthereumWeb3Component, lo_wallet_update],
  data() {
    return {
      contractInstance: "",
      txObject: {},
      basicOptions: {},
      networkName: "",
      txs: [],
      txHashToIndex: [],
      token_send_approval_hash: "",
      _event_game_start_count_down: 0,
      escapeTimeCountDown: 0,
      _debug: true,
      _scan_error: false,
      _worker_process: false
    }
  },
  methods: {
    event_count_down(start_t, not_start) {
      if (not_start) {
        this._event_game_start_count_down = setInterval(() => {
          const up = new Date().getTime() / 1000
          this.escapeTimeCountDown = start_t - up
          if (this.escapeTimeCountDown <= 0) {
            clearInterval(this._event_game_start_count_down)
          }
        }, 1000)
      } else {
        clearInterval(this._event_game_start_count_down)
      }
    },
    async wallet_scan() {
      if (!this.blockLink.isLoggedIn()) {
        return
      }
      const address = this.blockLink.getAccountAddress()
      await sleep(500)
      const det = await this.blockLink.getCoinDetail(process.env.mine, address)
      const bal = await this.blockLink.balance()
      await this.$store.dispatch("wallet/save_balance", bal)
      await this.$store.dispatch("wallet/save_address", address)
      await this.$store.dispatch("wallet/save_balance_fam", det)
      EventBus.$emit("wallet_ready", this.blockLink)
    },
    /**
     * trigger when the scan has error
     * @param e
     */
    report_scan_error(e) {
      this._scan_error = true
      console.log(e)
      this.apWallHist("scan wallet", "UI", `error in scanning ${e.toString()}`)
    },
    /**
     * keep the heart beat checker
     * @returns {boolean}
     */
    keep_hb() {
      return this._scan_error || this._worker_process || !this.blockLink
    },
    /**
     * checker for enabled the first instance init
     */

    is_contract_ready() {
      return false
    },

    isDebug() {
      return this._debug
    },
    report_error(e) {
      this.apWallHist("error", "internal", e)
    },
    report_error_trn(e, event) {
      this.apWallHist("error", event, e)
    },
    apWallHist(msg, whatsort, long_message) {
      if (this.$store) {
        this.$store.dispatch("wallet/newEventTransaction", {
          msg,
          whatsort,
          long_message
        })
      }
    }
  }
}
