<template>
  <v-app>
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer absolute padless>
      <v-bottom-navigation v-model="bottomNav" shift>
        <v-btn
          v-for="(item, i) in items"
          :to="item.to"
          :key="i"
          :value="item.title"
          replace
          exact>
          <span>{{ item.title }}</span>
          <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
        <!--<v-btn value="favorites" router exact>
          <span>Referral</span>
          <v-icon>mdi-check-network</v-icon>
        </v-btn>
        <v-btn value="nearby" router exact>
          <span>Position</span>
          <v-icon>mdi-map-marker</v-icon>
        </v-btn>-->
      </v-bottom-navigation>
    </v-footer>
  </v-app>
</template>

<script>
import { EventBus } from "vue-backgrounds/src/engines/EventBus"

/**
 * hb-save-battery - update blockchain data in 20 seconds
 * hb-high-precision - update blockchain data in 2 seconds
 * hb-normal - update blockchain data in 9 seconds
 * hb-custom - allow custom update internals
 */
export default {
  name: "MasonicMain",
  data() {
    return {
      heartbeat: false,
      heartbeatrate: 9000,
      bottomNav: "Welcome",
      items: [
        {
          icon: "apps",
          title: "Welcome",
          to: "/sub/welcome"
        },
        {
          icon: "mdi-test-tube",
          title: "My stats",
          to: "/sub/priceplan"
        },
        {
          icon: "mdi-test-tube",
          title: "Share",
          to: "/sub/standardshare"
        }
      ]
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (!this.heartbeat) {
        this.heartbeat = setInterval(() => {
          EventBus.$emit("heartbeat")
        }, this.heartbeatrate)
        EventBus.$emit("heartbeat")
      }
      EventBus.$on("hb-save-battery", () => {
        this.heartbeatrate = 20000
      })
      EventBus.$on("hb-high-precision", () => {
        this.heartbeatrate = 2000
      })
      EventBus.$on("hb-normal", () => {
        this.heartbeatrate = 9000
      })
      EventBus.$on("hb-custom", (musecond) => {
        if (typeof musecond === "number") {
          this.heartbeatrate = musecond
        }
      })
    })
  }
}
</script>

<style scoped lang="scss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
