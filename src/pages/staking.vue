<template>
  <v-main class="welcome_bacground_xxx">
    <loaddisc
        :show="loading"
        :show-loading-text="true"
        :loading-text="$t('msg_connecting')"
        disc-type="black"/>
    <v-container fill-height fluid>
      <v-layout column>

        <v-flex v-if="fundEventStarted" ref="scroll" class="main-container">
          <div class="ui statistics horizontal mini">
            <div class="statistic lvx" in-group="brief">
              <div class="value">{{ investors | unit }}</div>
              <div class="label">
                <v-icon>mdi-home-group</v-icon>
                {{ $t("entrepreneurs") }}
              </div>
            </div>
            <div class="statistic lvx" in-group="subam">
              <div class="value">{{ coin_balance_trx | trx }}</div>
              <div class="label">USDT Wallet {{ $t("bnt_balance") }}</div>
            </div>
          </div>
          <div class="ui statistics horizontal mini">
            <div class="statistic lvx" in-group="brief">
              <div class="value">{{ totalRose | trxlong }}</div>
              <div class="label">{{ $t("mining_earn") }}</div>
            </div>
          </div>
          <div class="ui statistics horizontal mini">
            <div class="statistic lvx" in-group="brief">
              <div class="value">{{ liquidityPool | trxlong }}</div>
              <div class="label">
                <v-icon>mdi-speedometer</v-icon>
                {{ $t("liquidity_pool") }}
              </div>
            </div>
          </div>
          <div class="ui statistics horizontal large">
            <div class="statistic lvx" in-group="brief">
              <div class="value">{{ depositFund | trx }}</div>
              <div class="label">{{ $t("pv_value") }}</div>
            </div>
          </div>
          <v-img>
            <v-sparkline
                :value="line_data"
                :gradient="gradient"
                :smooth="radius || false"
                :padding="padding"
                :line-width="width"
                :stroke-linecap="lineCap"
                :gradient-direction="gradientDirection"
                :fill="fill"
                :type="type"
                :auto-line-width="autoLineWidth"
                auto-draw>
              <!-- <template v-slot:label="item">
                 ${{ item.value }}
               </template>-->
            </v-sparkline>
          </v-img>
          <v-card
              :color="card_color"
              class="mb-3 mt-sm-6 mb-sm-6 mx-lg-auto" dark rounded elevation="12">

            <v-card-title>
              <v-icon>mdi-chart-areaspline</v-icon>
              LV {{ $t("site_name_ec") }}
            </v-card-title>
            <v-card-text v-if="!userRegistered" class="text-left">
              {{ $t("msg_ask_code") }}
            </v-card-text>
            <v-card-text v-if="userRegistered">

              <tripleleveltimerxla/>

              <v-row justify="center" class="ui statistics vertical large">
                <v-col cols="auto">
                  <div class="statistic lvx" in-group="referralcounts">
                    <div class="value">{{ nodeCount | unit }}</div>
                    <div class="label">{{ $t("bnt_node_num") }}</div>
                  </div>

                </v-col>

                <v-col cols="auto">
                  <div class="statistic lvx" in-group="referralcounts">
                    <div class="value">{{ directInvites | unit }}</div>
                    <div class="label">{{ $t("bnt_core") }}</div>
                  </div>
                </v-col>

              </v-row>

              <v-row justify="center" class="ui statistics vertical large">
                <v-col cols="auto">
                  <div class="statistic lvx" in-group="subam">
                    <div class="value">{{ freezeLevel | unit }}</div>
                    <div class="label">{{ $t("bnt_lvfreeze") }}</div>
                  </div>

                </v-col>

                <v-col cols="auto">
                  <div class="statistic lvx" in-group="subam">
                    <div class="value">{{ liquidLevel | unit }}</div>
                    <div class="label">{{ $t("bnt_lvm") }}</div>
                  </div>
                </v-col>

                <v-col cols="auto">
                  <div class="statistic lvx" in-group="subam">
                    <div class="value">{{ lineLevel | unitromance }}</div>
                    <div class="label">{{ $t("bnt_lvsum") }}</div>
                  </div>
                </v-col>

              </v-row>

              <v-divider style="margin-top: 20px"></v-divider>

              <div class="ui statistics horizontal mini">

                <div class="statistic lvx" in-group="subam">
                  <div class="value">{{ lineAmount | trx }}</div>
                  <div class="label">{{ $t("p_enqueue") }} USDT</div>
                </div>
                <div class="statistic lvx" in-group="subam">
                  <div class="value">{{ readyForWithdrawal| trx }}</div>
                  <div class="label">{{ $t("p_pend_withd") }} USDT</div>
                </div>
                <div class="statistic lvx" in-group="subam">
                  <div class="value">{{ frozenAmount| trx }}</div>
                  <div class="label">{{ $t("p_frozen_amount") }} USDT</div>
                </div>
                <div class="statistic lvx" in-group="subam">
                  <div class="value">{{ principalAmount | trx }}</div>
                  <div class="label">{{ $t("bnt_prin") }} USDT</div>
                </div>
                <div class="statistic lvx" in-group="subam">
                  <div class="value">{{ minedToken | trxlong }}</div>
                  <div class="label">{{ $t("c_forge") }}</div>
                </div>
                <div class="statistic lvx" in-group="subam">
                  <div class="value">{{ deferDirectBonus | trxlong }}</div>
                  <div class="label">{{ $t("c_softs") }} USDT</div>
                </div>
                <div class="statistic lvx" in-group="subam">
                  <div class="value">{{ recommendAmount | trxlong }}</div>
                  <div class="label">{{ $t("c_vcards") }} USDT</div>
                </div>
                <div class="statistic lvx" in-group="subam">
                  <div class="value">{{ dividendAmount | trxlong }}</div>
                  <div class="label">{{ $t("salesman") }} USDT</div>
                </div>
                <div class="statistic lvx" in-group="subam">
                  <div class="value">{{ totalIncome | trxlong }}</div>
                  <div class="label">USDT all income</div>
                </div>
              </div>
            </v-card-text>
            <v-card-actions>

              <v-btn v-if="!userRegistered" depressed color="transparent" @click="open_sheet_referral">
                {{ $t("bnt_invcode") }}
              </v-btn>

            </v-card-actions>
          </v-card>

          <v-card class="mt-3 mb-3 mt-sm-6 mb-sm-6 mx-lg-auto">

            <v-card-subtitle>
              <v-icon>mdi-gauge</v-icon>
              hash power: {{ hashPowerMgm | trxlong }} USDT<br/>
              <v-icon>mdi-gauge</v-icon>
              hash power: {{ hashPowerDelegate | trxlong }} USDT
            </v-card-subtitle>
            <v-card-actions>

              <v-btn :disabled="loading || reinvestUnlockedNot" class="mt-6" text @click="reinvestment">
                <v-icon>mdi-clock-time-nine-outline</v-icon>
                {{ $t("bnt_reinvest") }}
              </v-btn>

              <v-btn :disabled="loading||freeAmountNotAvailable" :loading="withdrawalloading" class="mt-6" text
                     @click="getMoneyUnlock">
                <v-icon>mdi-checkbook</v-icon>
                {{ $t("p_settle_withdraw") }}
                <span slot="loader">Checking..<v-icon>mdi-bank-transfer-out</v-icon></span>
              </v-btn>

            </v-card-actions>

          </v-card>

          <v-card class="mt-3 mb-3 mt-sm-6 mb-sm-6 mx-lg-auto">
            <v-card-text class="text-left">
              Now the block time is {{ now_time_blockchain |hexunixtime }} by Check Time button. Each round will have
              some
              people
              join and
              the price tag will rise accordingly. Each withdrawal request takes 30 minutes. Each compound calculation
              takes 30 minutes. There are 5 days for one cycle of investment and the reinvestment is available. Current
              round is
              {{ getRound | unit }}. The member increment count is {{ membercc | unit }}. The current Rose is swapping
              at {{ roseRate |trxlong }}
            </v-card-text>
            <v-card-actions>
              <v-btn ref="langSelect" depressed color="transparent" @click.stop="open_lang_selection">
                {{ $t("p_lang") }}
              </v-btn>
              <v-btn depressed color="transparent" @click="open_sheet_console">
                Console
              </v-btn>
              <v-btn depressed color="transparent" @click="straightInto('/')">
                LV story
              </v-btn>
              <v-menu
                  v-if="menuLang"
                  ref="setting_languages"
                  :activator="$refs.langSelect.$el"
                  :value="true"
                  transition="slide-x-transition"
                  tile
                  offset-y>

                <v-list elevation="10">
                  <v-list-item v-for="(val, k) in languages" :key="k" @click="onItemClicked(val)">
                    <v-list-item-title align="left">{{ val.label }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-card-actions>
          </v-card>

        </v-flex>

        <v-card v-else
                elevation="11" class="warning_sticky">
          <v-card-title>{{ $t("n_attention") }}</v-card-title>
          <v-card-subtitle align="left">{{ $t("n_round_unstarted") }}</v-card-subtitle>
          <v-card-text>
            <p v-html="i18nformat('msg_calm', escapeTimeCountDown)"></p>
          </v-card-text>

          <v-card-actions>
            <v-btn ref="langSelect" depressed color="transparent" @click.stop="open_lang_selection">
              {{ $t("p_lang") }}
            </v-btn>
            <v-btn depressed color="transparent" @click="straightInto('/')">
              LV story
            </v-btn>
            <v-menu
                v-if="menuLang"
                ref="setting_languages"
                :activator="$refs.langSelect.$el"
                :value="true"
                transition="slide-x-transition"
                tile
                offset-y>

              <v-list elevation="10">
                <v-list-item v-for="(val, k) in languages" :key="k" @click="onItemClicked(val)">
                  <v-list-item-title align="left">{{ val.label }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-actions>

        </v-card>

      </v-layout>
    </v-container>
  </v-main>
</template>
<script>

import {EventBus} from "vue-backgrounds/src/engines/EventBus"
import Loaddisc from "@/components/util/loaddisc"
import nav from "@/api/mixins/tron/nav"
import contract_tron_masonic from "@/api/mixins/tron/main"
import string_tx from "@/api/mixins/string_tx"
import Smallerskx from "@/components/timer/smallerskx"
import Tripleleveltimerxla from "@/components/timer/tripleleveltimerxla"

const gradients = [
  ["#222"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f5143f", "#25e71d", "#059b2b"]
]

export default {
  layout: "bottom",
  components: {
    Tripleleveltimerxla,
    Smallerskx,
    Loaddisc
  },
  mixins: [nav, contract_tron_masonic, string_tx],
  data() {
    return {
      card_color: "#5b4b67",
      loading: true,
      withdrawalloading: false,
      menuLang: false,
      failed_payment_message: "",
      width: 2,
      radius: 10,
      padding: 8,
      lineCap: "round",
      gradient: gradients[5],

      gradientDirection: "top",
      fill: false,
      type: "trend",
      autoLineWidth: false
    }
  },
  created() {
    this.$on("notify_tron_installed", this.installed)
    EventBus.$on("heartbeat", this.beat)
    EventBus.$on("event_LineIn", this.eventLineIn)
  },
  beforeDestroy() {
    this.$off("notify_tron_installed", this.installed)
    EventBus.$off("heartbeat", this.beat)
    EventBus.$off("event_LineIn", this.eventLineIn)
  },
  mounted() {
    this.$nextTick(() => {
      this.LanguageStart()
      EventBus.$emit("loading_work_process_nav", true)
      this.beat()
      this.debug(false)
      this.$on("notify_tron_account_set", async (name, address) => {
        await this.queryUserStatus()
      })
      this.$on("notify_tron_not_install", () => {
        this.tronlinkinstalled = false
      })
      this.$on("notify_tron_node_change", () => {
        if (!this.matchChainId(process.env.network)) {
          this.gotoHome()
          this.notyWarning(`the current network is not on ${process.env.network}.`)
        }
      })
    })
  },
  methods: {
    // event
    installed() {
      this.tronlinkinstalled = true
      this.contract_init(() => {
        // this.queryReferral()
        this.userSys()
      })
    },
    eventLineIn(dat) {
      this.notySuccess(`🧪 New partner ${dat.result.content_id} is online!\nBlock ID:${dat.block}\nTransaction:${dat.transaction}`)
    },
    // event
    beat() {
      if (this.keep_hb()) {
        return
      }
      try {
        this.wallet_scan()
        this.contract_scan()
        if (this.loading) {
          this.loading = false
          this.event_count_down(txtUnit(this.$store.getters["trc913/_start_time"]), !this.$store.getters["trc913/canVegas"])
          EventBus.$emit("loading_work_process_nav", false)
        }
      } catch (e) {
        this.report_scan_error(e)
      }
    },
    open_lang_selection() {
      if (this.menuLang && !this.$refs.setting_languages.isContentActive) {
        return
      }
      if (!this.menuLang) {
        this.menuLang = !this.menuLang
        if (this.menuLang) {
          this.$nextTick(() => this.$refs.setting_languages.activate())
        }
      }
    },
    onItemClicked(evt) {
      this.menuLang = false
      if (!this.menuLang) {
        // this.$nextTick(() => this.$refs.setting_languages.deactivate())
        this.ChangeLanguage(evt.key)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.ui.statistics {
  .label {
    color: #7c8619;
  }
}
.main-container {
  /*max-height: calc(100vh - 64px);
  height: auto;
  overflow-y: auto;
  overflow-x: hidden;*/
}
#indexbox {
  overflow: hidden;
}

@mixin warning_size($hover_color) {
  $strip_a: #cccccc;
  $strip_b: #dbdbdb;
  background-image: repeating-linear-gradient(110deg, $strip_a, $strip_a 30px, $strip_b 30px, $strip_b 60px);
  background-blend-mode: overlay;
  background-color: $hover_color;
}
.warning_sticky {
  @include warning_size(#9d146d)
}
</style>
