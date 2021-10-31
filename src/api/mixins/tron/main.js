import { EventBus } from "vue-backgrounds/src/engines/EventBus"
import walletvx from "@/api/mixins/tron/walletx"

export default {
  mixins: [walletvx],
  computed: {
    userRegistered() {
      return this.$store.getters["b/registered_user"]
    },
    getRound() {
      return this.$store.getters["b/get_round"]
    },
    fundEventStarted() {
      return this.$store.getters["b/canVegas"]
    },
    freeezeTime() {
      return this.$store.getters["b/_freeeze_time"]
    },
    nodeCount() {
      return this.$store.getters["b/nodeCount"]
    },
    directInvites() {
      return this.$store.getters["b/my_direct_invite_count"]
    },
    principalAmount() {
      return this.$store.getters["b/principalAmount"]
    },
    totalIncome() {
      return this.$store.getters["b/allIncomeAmount"]
    },
    lineLevel() {
      return this.$store.getters["b/line_level"]
    },
    freezeLevel() {
      return this.$store.getters["b/freeze_level"]
    },
    liquidLevel() {
      return this.$store.getters["b/liquidity_level"]
    },
    roseRate() {
      return this.$store.getters["b/rose_rate"]
    },
    lineAmount() {
      return this.$store.getters["b/lineAmount"]
    },
    deferDirectBonus() {
      return this.$store.getters["b/ddb_amount"]
    },
    oneDayCount() {
      return this.$store.getters["b/daily_count"]
    },
    showBal() {
      return this.$store.getters["b/getShowBalanceAllow"]
    },
    readyForWithdrawal() {
      return this.$store.getters["b/ready_for_withdrawal"]
    },
    dividendAmount() {
      return this.$store.getters["b/dividendAmount"]
    },
    hashPowerMgm() {
      return this.$store.getters["b/hashPowerManagement"]
    },
    hashPowerDelegate() {
      return this.$store.getters["b/hashPowerBonus"]
    },
    hashRosePower() {
      return this.$store.getters["b/hashRosePower"]
    },
    minedToken() {
      return this.$store.getters["b/minedToken"]
    },
    totalRose() {
      return this.$store.getters["b/totalRoseExisted"]
    },
    membercc() {
      return this.$store.getters["b/memberCountVc"]
    },
    recommendAmount() {
      return this.$store.getters["b/recommendAmount"]
    },
    investors() {
      return this.$store.getters["b/_totalCount"]
    },
    frozenAmount() {
      return this.$store.getters["b/lockedAmount"]
    },
    prizePot() {
      return this.$store.getters["b/_prize_pot"]
    },
    depositFund() {
      return this.$store.getters["b/_totalMoney"]
    },
    liquidityPool() {
      return this.$store.getters["b/liquidityPool"]
    },
    line_data() {
      return this.$store.getters["b/get_volume_trade_linedeposit"]
    },
    myinvitationcode() {
      return this.$store.getters["b/mycode"]
    },
    myuplinecode() {
      return this.$store.getters["b/upline"]
    },
    business_status() {
      return this.$store.getters["b/biz_status"]
    },
    now_time_blockchain() {
      return this.$store.getters["b/get_block_clock"]
    },
    freeAmountNotAvailable() {
      const hn = trx(this.withdraw_t)
      return !(hn > 0)
    },
    reinvestUnlockedNot() {
      const now = new Date().getTime() / 1000
      const fr = txtUnit(this.freeezeTime)
      const d = now - fr
      const readytrx = trx(this.withdraw_t)
      return !(d > 360 * 60 * 60 && readytrx > 0)
    },
    withdraw_t() {
      return this.$store.getters["b/ready_for_withdrawal"]
    }
  },
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
      /*   if (!b.Instance()) {
           const defined_contract = new b(this.tronWeb)
           defined_contract.setDebug(false)
           await defined_contract.init(process.env.contract)
           await defined_contract.startEventListeners()
           defined_contract.on("event_EndTimeMining", (d) => {
             EventBus.$emit("event_EndTimeMining", d)
           })
           defined_contract.on("event_LineIn", (d) => {
             EventBus.$emit("event_LineIn", d)
           })
           defined_contract.on("event_OfferMade", (d) => {
             EventBus.$emit("event_OfferMade", d)
           })
           await this.contract_scan()
           await this.GetPriceLimit()
           if (extra_cb) {
             extra_cb()
           }
         } */
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
      // this.InviteCodeGenerator()
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
      /*  try {
          const { sysInfod } = await b.Instance().shenzhen()
          const { flags } = await b.Instance().shenFlags()
          // if (this._debug) {
          /!**  console.group("sys update data ==> ")
           console.log(flags)
           console.groupEnd()
           **!/
          // console.log(sysInfod, flags)
          // }
          this.$store.dispatch("b/shenzhen", sysInfod)
          this.$store.dispatch("b/shflg", flags)
        } catch (e) {
          this.report_error_trn(e, "shen zhen")
        } */
    },
    async miscStatus() {
      try {
        // const vegas = await b.Instance().canGoToVegas()
        const vegas = false
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
      /**
       *
       *
       */
    },
    /**
     * update player info by the address
     * @returns {Promise<void>}
     */
    async queryUserStatus() {
      if (!this.blockLink.isLoggedIn()) {
        return
      }
      try {
        const address = this.blockLink.getAccountAddress()

        // console.log(address, toNumber(round))
        // console.log(customer_data, r)
        // this.saveLocal("b/user_info", customer_data)
        await this.$store.dispatch("b/user_info", 23424)
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
      // const price_level = await b.Instance().getPriceLevels()
      await this.$store.dispatch("b/price_entry_info", 990239)
    },
    async lined() {
      /*  const f = txtUnit(this.now_time_blockchain) - 15000
        const devents = await b.Instance().eventQ("LineIn", 0, f)
        const listpcx = devents.map(i => parseInt(i.result.amount))
        await  this.$store.dispatch("b/line_vol", listpcx) */
    },
    getReferText() {
      return this.myinvitationcode
    }
  }
}
