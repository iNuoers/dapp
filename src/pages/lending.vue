<template>
  <section id="indexbox" class="indexcolor">
    <div class="backee home">

    </div>
    <div class="box-wrap center">
      <v-main>
        <v-layout align-center class="flex-column">
          <v-card v-if="ready_to_share"
                  :color="c10_primary" class="qrcard mr-4 ml-4 mt-4 mt-lg-auto" elevation="11">
            <v-card-title>
              {{ $t("msg_invcard") }}
            </v-card-title>
            <!--   <cardgen ref="cardg" :code="my_invitation_code"/>-->
            <qrcode :value="url_final" :options="{ width: 200, height:200 }"/>
            <v-card-title>{{ my_invitation_code }}</v-card-title>
            <v-card-text class="text-left">
              Share this code to earn your rewards now! or share with the full URL: {{ url_final }}
            </v-card-text>

            <v-card-actions>
              <v-btn v-if="!userRegistered" class="mt-6" text color="error" @click="open_sheet_referral">
                {{ $t("bnt_invcode") }}
              </v-btn>
              <v-btn class="mt-6" text color="error" @click="copy_code">{{ $t("bnt_share") }}</v-btn>
            </v-card-actions>
          </v-card>
          <v-card v-else class="mr-4 ml-4 mt-4 mt-lg-auto">
            <v-card-title> {{ $t("msg_nr") }}</v-card-title>
            <v-card-text class="text-left"> {{ $t("msg_nrex") }}
            </v-card-text>
            <!-- <cardgen ref="cardg" :code="my_invitation_code"/>-->
            <v-card-actions>
              <v-btn class="mt-6" text color="error" @click="open_sheet_referral">{{ $t("bnt_invcode") }}</v-btn>
            </v-card-actions>
          </v-card>
        </v-layout>
      </v-main>
    </div>
  </section>
</template>
<script>

import nav from "@/api/mixins/tron/nav"
import string_tx from "@/api/mixins/string_tx"
import logic from "@/api/mixins/balincer/logic";


export default {
  components: {},
  layout: "bottom",
  mixins: [nav, logic, string_tx],
  data() {
    return {
      ready_to_share: false,
      url_final: "------",
      my_invitation_code: "",
      genSecond: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.LanguageStart()
      const domain = process.env.domain
      const enter_code = "main?code="
      this.ready_to_share = this.userRegistered && this.fundEventStarted
      const in_code = this.$store.getters["trc913/show_invitation_code"]
      this.url_final = `${domain}/${enter_code}${in_code}`
      // console.log("share url: ", this.url_final, this.ready_to_share)
      this.$nextTick(() => {
        this.my_invitation_code = in_code
      })
      if (!this.ready_to_share && in_code === "N/A" && !this.genSecond) {
        this.genSecond = setInterval(() => {
          this.my_invitation_code = generateReferCode()
        }, 1000)
      }
    })
  },
  methods: {
    copy_code(e) {
      e.preventDefault()
      const that = this
      this.$copyText(this.url_final).then(function (e) {
        // alert ('Copied')
        // console.log (e)
        that.notySuccess(that.$t("n_copy"))
      }, function (e) {
        that.notyError(e.toString())
        // alert ('Can not copy')
        // console.log (e)
      })
    }
  }
}
</script>

<style scoped>
.backee {
  z-index: 0;
}

.qrcard {
  max-width: 500px;
}

@media screen and (max-width: 410px) {
  .qrcard {
    max-width: 360px;
  }
}
</style>
