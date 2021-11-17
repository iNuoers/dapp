<template>
  <v-container v-scroll.self="onScroll" class="overflow-y-auto" max-height="200px"
               style="align-items: normal!important; display: block" fluid>

    <v-card-text class="text-left">
      <p> Version: {{ version }}</p>
      <p> {{ $t("msg_auditrepo") }}: pdf</p>
      <p> {{ $t("msg_dpl_network_tron") }}: {{ network }}</p>
      <p> {{ $t("msg_contr_addr") }}: {{ main_contract_address }}</p>
      <p> Mining {{ $t("msg_token") }}: {{ cp_token }}</p>
      <p> Funding {{ $t("msg_token") }}: {{ cd_token }}</p>
      <p>Telegram: </p>
      <p>Discord: </p>
      <p>Reddit: </p>
    </v-card-text>

    <v-row justify="center">
      <v-col cols="auto">
        your imag here... .
      </v-col>
    </v-row>

    <v-card-text class="text-left">
      <h2>About Balincer</h2>
      <h3>The worlds first Blockchain Branding Software and technology platform for growing networks, revenue and
        earnings</h3>
      <p>Balincer marketplace provides the software tools and training your business
        needs to enhance your business efficiency and revenue growth</p>
    </v-card-text>

    <v-card-text class="text-left">
      <h2>Project ecosystem</h2>
      <p>Balincer Blockchain’s globally distributed software network Marketplace.</p>
      <p>Tap into an Unlimited audience, Unlimited growth, sustainable long term tools to create projects gathered
        within a complete and always expanding Marketplace all supporting the community, a unified training system for
        all community partners and a professional technical support service. All of this is unique for the Balincer
        Marketplace.</p>
      <p>Blockchain Balincer Aggregator. The new generation platform.</p>
      <p>Create any project for your company easily and track your results.</p>
      <p>Through Becoming a user in our network you can earn a commission for helping companies use Balincer
        systems.</p>
    </v-card-text>

    <v-card-text class="text-left">
      <h2>Legal Disclaimer</h2>
      <p>
        By clicking “CONNECT” (in the Balincer Protocol) or by accessing the Balincer Protocol, you acknowledge that you
        have read and agree to the following statements, disclaimers, and limitation of liability. If you don’t agree,
        you may not use the Balincer Protocol. "We" refers as Balincer Team and the author of the application.
      </p>
      <p>
        No Guarantee of Security. Balincer endeavors to take reasonable steps to protect your personal information.
        However, we cannot guarantee the security of any data you disclose online. By accessing the Balincer Protocol,
        you
        accept the inherent security risks of providing information and dealing online over the Internet and will not
        hold us responsible for any breach of security.
      </p>
      <p>
        Assumption of Network Risks. You accept and acknowledge and accept the various risks inherent to using digital
        currency network including but not limited to hardware failure, software issues, internet connection failure,
        malicious software, third party interference leading to access to your wallet and other user data, unknown
        vulnerabilities and unanticipated changes to the protocol. You accept and acknowledge that Balincer will not be
        responsible for any communication failures, disruptions, errors, distortions or delays you may experience when
        using the Wallet, however caused and will not be responsible for any harm occurring as a result of such risks.
      </p>
      <p>
        Assumption of Risk of Trading Digital Currencies. You accept and acknowledge the legal risks inherent in trading
        digital currencies. In particular, you acknowledge and agree that the USDT token may be considered a security
        under US law and elsewhere, and that if it is so considered, it may not be traded in any such jurisdiction. Any
        trading of the USDT by you in the US or elsewhere is undertaken at your sole risk.
      </p>
      <p>
        No Liability. Balincer will not be responsible or liable to you for any loss and take no responsibility for and
        will
        not be liable to you for any use of the Wallet, including but not limited to any losses, damages or claims
        arising from:
        a) User error such as forgotten passwords, incorrectly constructed transactions, or mistyped addresses;
        b) Server failure or data loss;
        c) Corrupted Wallet files;
        d) Unauthorized access to applications;
        e) Any unauthorized third party activities, including without limitation the use of viruses, phishing, brute
        forcing or other means of attack against the Website or Services;
        f) Any enforcement action against you for illegally trading digital currencies.
        g) Any of your activities that may be unlawful or injurious in any way to any third party.
      </p>
      <p>
        No warranty. Balincer make no warranty that the Wallet is free of viruses or errors, that its content is
        accurate,
        that it will be uninterrupted, or that defects will be corrected. We will not be responsible or liable to you
        for any loss of any kind, from action taken, or taken in reliance on material, or information, contained in the
        Wallet.
      </p>
      <p>
        Right to Terminate. Balincer may terminate your access to and use of the Services, at our sole discretion, at
        any
        time
        and for any reason, with or without notice to you.
      </p>
      <p>
        Balincer reserves the right to update the Balincer Protocol’s disclaimer and privacy policy without notice to
        users.
      </p>
      <p>
        The information provided on this website/application/wallet does not constitute investment advice, financial
        advice, trading
        advice, or any other sort of advice and you should not treat any of the website's content as such. Balincer Team
        does not recommend that any cryptocurrency should be bought, sold, or held by you. Do conduct your own due
        diligence and consult your financial advisor before making any investment decisions.
      </p>
      <p>
        By purchasing USDT, you agree that you are not purchasing a security or investment and you agree to hold the
        team harmless and not liable for any losses or taxes you may incur. You also agree that the team is presenting
        the token “as is” and is not legally required to provide any support or services. You should have no expectation
        of any form from USDT and its team.
      </p>
      <p>
        Always make sure that you are in compliance with your local laws and regulations before you make any purchase.
      </p>
      <h3>Warranty Disclaimers</h3>
      <p>
        YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT USE OF THE WALLET IS AT YOUR SOLE RISK AND THAT THE ENTIRE RISK AS TO
        SATISFACTORY QUALITY, PERFORMANCE, ACCURACY AND EFFORT IS WITH YOU. THE SERVICES ARE PROVIDED ON AN “AS IS” AND
        “AS AVAILABLE” BASIS WITHOUT ANY REPRESENTATION OR WARRANTY, WHETHER EXPRESS, IMPLIED OR STATUTORY. TO THE
        MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW Balincer SPECIFICALLY DISCLAIMS ANY EXPRESS OR IMPLIED WARRANTIES OF
        TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND/OR NON-INFRINGEMENT. Balincer DOES NOT MAKE ANY
        REPRESENTATIONS OR WARRANTIES THAT ACCESS TO THE WALLET OR ANY OF THE MATERIALS CONTAINED THEREIN WILL BE
        CONTINUOUS, UNINTERRUPTED, TIMELY, OR ERROR-FREE.
      </p>
      <h3>Limitation of Liability</h3>
      <p>
        TO THE MAXIMUM EXTENT NOT PROHIBITED BY LAW, Balincer SHALL NOT BE LIABLE FOR DAMAGES OF ANY TYPE, WHETHER
        DIRECT OR INDIRECT, ARISING OUT OF OR IN ANY WAY RELATED TO YOUR USE OR INABILITY TO USE THE WALLET INCLUDING
        BUT NOT LIMITED TO DAMAGES ALLEGEDLY ARISING FROM THE COMPROMISE OR LOSS OF YOUR LOGIN CREDENTIALS OR FUNDS, OR
        LOSS OF OR INABILITY TO RESTORE ACCESS FROM YOUR BACKUP PHRASE, OR FOR MISTAKES, OMISSIONS, INTERRUPTIONS,
        DELAYS, DEFECTS AND/OR ERRORS IN THE TRANSMISSION OF TRANSACTIONS OR MESSAGES TO THE NETWORK, OR THE FAILURE OF
        ANY MESSAGE TO SEND OR BE RECEIVED BY THE INTENDED RECIPIENT IN THE INTENDED FORM, OR FOR DIMINUTION OF VALUE OF
        ETHER OR ANY OTHER DIGITAL TOKEN OR DIGITAL ASSET ON THE NETWORK. Balincer SHALL NOT BE LIABLE UNDER ANY
        CIRCUMSTANCES FOR ANY LOST PROFITS OR ANY SPECIAL, INCIDENTAL, INDIRECT, INTANGIBLE, OR CONSEQUENTIAL DAMAGES,
        WHETHER BASED IN CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR OTHERWISE, ARISING OUT OF OR IN CONNECTION
        WITH AUTHORIZED OR UNAUTHORIZED USE OF THE WALLET, EVEN IF AN AUTHORIZED REPRESENTATIVE OF Balincer HAS BEEN
        ADVISED OF OR KNEW OR SHOULD HAVE KNOWN OF THE POSSIBILITY OF SUCH DAMAGES.
      </p>
      <p>
        © 2020 A and B.
        All rights reserved.
      </p>
    </v-card-text>
  </v-container>
</template>
<script>
import string_tx from "@/api/mixins/string_tx"

export default {
  name: "InstructionMasonicTron",
  mixins: [string_tx],
  data: () => ({
    winHeight: window.innerHeight * 0.7 + "px",
    container: null,
    elem: null,
    version: process.env.version,
    network: process.env.network,
    main_contract_address: process.env.contract,
    cp_token: process.env.award_token,
    cd_token: process.env.fund_token,
    scrollTop: 0
  }),
  methods: {
    onScroll() {
      this.scrollTop++
    },
    copyAddress(contract) {
      const that = this
      this.$copyText(contract).then(function (e) {
        that.notySuccess(that.$t("n_copy"))
      }, function (e) {
        that.notyError("copy failed")
      })
    }
  }
}
</script>
