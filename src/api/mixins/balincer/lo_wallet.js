export default {
    computed: {
        coin_balance() {
            return this.$store.getters["wallet/QueryNowBalance"]
        },
        coin_symbol_lo() {
            return this.$store.getters["wallet/QueryNowSymbol"]
        },
        contract_address() {
            return this.$store.getters["wallet/addressContract"]
        },
        farming_coin() {
            return this.$store.getters["wallet/farming_coin_account"]
        },
        usdt_coin() {
            return this.$store.getters["wallet/usdt_coin_account"]
        },
        farming_coin_symbol() {
            return "BLRC"
        },
        contract_balance() {
            return this.$store.getters["wallet/QueryContractBalance"]
        },
        approved_usd() {
            return this.$store.getters["wallet/isusdapproved"]
        },
        approved_farm() {
            return this.$store.getters["wallet/isfarmapproved"]
        },
        explorer_uri() {
            const t = this.$store.getters["wallet/user_account"]
            return `https://www.raisc.io/address/${t}/transactions`
        },
        address_x() {
            const text = this.$store.getters["wallet/user_account"]
            return text.substring(0, 6) + "..." + text.substr(text.length - 5)
        },
        address_uncompressed() {
            return this.$store.getters["wallet/user_account"]
        },
        login() {
            return this.$store.getters["wallet/isLoginWeb3"]
        }
    },
}
