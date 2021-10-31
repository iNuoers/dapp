import { EventBus } from "vue-backgrounds"
import walletvx from "@/api/mixins/tron/walletx"

export default {
  mixins: [walletvx],
  data() {
    return {
      founder: "",
      tokenName: "",
      sTranferExpressReceipt: "",
      amount: 0,
      confirmations: 0,
      contract_address: "",
      copy__: "",
      iamVIP: false,
      process_t0: false,
      process_f1: false,
      process_f2: false,
      process_f3: false,
      process_f4: false,
      clipboard: false
    }
  },
  methods: {
    debug(bool) {
      this._debug = bool
    },
    async contract_init(extra_cb) {
      // if (!TRC913.Instance()) {
      /**
         *
         *
         * you code in here to connect all the contracts and activate them
         */
      await this.queryUserStatus()
      // }
    },
    /**
     * info basic contracts
     * @returns {Promise<void>}
     */
    async contract_scan() {
      this.event_loading_process(true)
      if (this.is_contract_ready()) {
        await this.queryUserStatus()
        await this.miscStatus()
        await this.GetPriceLimit()
        await this.systemStatus()
        // await this.node_count_get()
        await this.lined()
      } else {
        this.report_error("contract is not init")
      }
      this.event_loading_process(false)
    },
    async userSys() {
      await this.queryUserStatus()
    },
    event_loading_process(sw) {
      this._worker_process = sw
      EventBus.$emit("loading_work_process", sw)
    },
    /**
     * this is the system status
     * @returns {Promise<void>}
     */
    async systemStatus() {
      try {
        // const { sysInfod } = await TRC913.Instance().shenzhen()
        // const { flags } = await TRC913.Instance().shenFlags()
        const sysInfod = ""
        const flags = []
        // if (this._debug) {
        /**  console.group("sys update data ==> ")
         console.log(flags)
         console.groupEnd()
         **/
        // console.log(sysInfod, flags)
        // }
        await this.$store.dispatch("b/shenzhen", sysInfod)
        await this.$store.dispatch("b/shflg", flags)
      } catch (e) {
        this.report_error_trn(e, "shen zhen")
      }
    },
    async miscStatus() {
      try {
        const vegas = await b.Instance().canGoToVegas()
        await this.$store.dispatch("b/can_vegas", vegas)
      } catch (e) {
        this.report_error_trn(e, "can vegas")
      }
    },
    /**
     * get my capital
     * @returns {Promise<void>}
     */
    async node_count_get() {
      try {
        const node_flash = this.$store.getters["b/get_round"]
        if (node_flash) {
          const my_max_p = await b.Instance().getMyMgmCount(this.fromBN(node_flash))
          // console.log("check before", node_flash, my_max_p)
          await this.$store.dispatch("b/mgm_node", this.fromBN(my_max_p))
        } else {
          this.report_error("round id not found")
        }
      } catch (e) {
        console.log(e)
        this.report_error_trn(e, "node count not right")
      }
    },
    /**
     * update player info by the address
     * @returns {Promise<void>}
     */
    async queryUserStatus() {
      if (!this.tronLink.isLoggedIn()) {
        return
      }
      try {
        const address = this.tronLink.getAccountAddress()
        const r = txtUnit(this.getRound) - 1
        const customer_data = await b.Instance().getUserByAddress(address, r)
        // console.log(address, toNumber(round))
        // console.log(customer_data, r)
        // this.saveLocal("b/user_info", customer_data)
        await this.$store.dispatch("b/user_info", customer_data)
      } catch (e) {
        this.report_error_trn(e, "get acc address")
      }
    },
    /**
     * get the price plan
     * @returns {Promise<void>}
     * @constructor
     */
    async GetPriceLimit() {
      const price_level = await b.Instance().getPriceLevels()
      await this.$store.dispatch("b/price_entry_info", price_level)
    },
    async lined() {
      const f = txtUnit(this.now_time_blockchain) - 15000
      const devents = await b.Instance().eventQ("LineIn", 0, f)
      const listpcx = devents.map(i => parseInt(i.result.amount))
      await this.$store.dispatch("b/line_vol", listpcx)
    },
    getReferText() {
      return this.myinvitationcode
    }
  }
}
