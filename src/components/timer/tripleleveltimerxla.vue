<template>
  <!-- SVG -->
  <div class="timer-face">
    <svg class="timer-ring" height="150px" width="150px">
      <circle
        v-for="(m, i) in timer_facer_level"
        :key="i+100"
        :stroke="c6_primary" :stroke-width="m.w"
        :r="m.r"
        cx="75"
        cy="75"
        class="timer_ring_trackr"
        fill="transparent"
      />
      <circle
        v-for="(m, i) in timer_facer_level"
        :key="i"
        :style="{ stroke: startlevel(i) ? c2_primary : c9_primary }" :stroke-width="m.w-2"
        :stroke-dashoffset="m.progress"
        :r="m.r"
        cx="75"
        cy="75"
        class="timer_ring_l"
        stroke="#cfbbd9"
        fill="transparent"
      />
    </svg>
    <div class="timer-face__cont">{{ until }}</div>
    <div class="timer-face__text">{{ minutes }}:{{ seconds }}</div>
  </div>
</template>
<script>
import { EventBus } from "vue-backgrounds/src/engines/EventBus"

import string_tx from "@/api/mixins/string_tx"
import logic from "@/api/mixins/balincer/logic";

export default {
  name: "Tripleleveltimerxla",
  mixins: [logic, string_tx],
  data() {
    return {
      timer: null,
      time: 0,
      startTime: 0,
      started: false,
      radioVal: 0,
      until: "",
      cfundlevel: 0,
      timer_facer_level: [
        { r: 69, w: 13, progress: 0 },
        { r: 51, w: 19, progress: 0 },
        { r: 25, w: 28, progress: 0 }
      ],
      fullcucle: 433.54
    }
  },
  computed: {
    setProgress() {
      const offset = 433.54 - this.time / this.startTime * 433.54
      return -offset
    },
    minutes() {
      const minutes = Math.floor(this.time / 60)
      return this.formatTime(minutes)
    },
    seconds() {
      const seconds = this.time - (60 * this.minutes)
      return this.formatTime(seconds)
    },
    progress() {
      return 0
    }
  },
  watch: {
    radioVal() {
      this.time = this.radioVal
      this.startTime = this.radioVal
      this.resetTimer()
    }
  },
  beforeDestroy() {
    EventBus.$off("eventChangeLanguage", this.init_mach)
  },
  mounted() {
    this.$nextTick(() => {
      this.LanguageStart()
      this.init_mach()
      EventBus.$on("eventChangeLanguage", this.init_mach)
    })
  },
  methods: {
    startlevel(level) {
      if (level === this.cfundlevel) {
        return this.started
      } else if (level > this.cfundlevel) {
        return false
      } else {
        return false
      }
    },
    init_mach() {
      if (txtUnit(this.business_status) === 2) {
        if (this.nowFromFreezeT() > this.byHr(168)) {
          this.startTime = this.byHr(360)
          this.time = this.lengthHr(360)
          this.until = this.$t("msg_lv3")
          this.cfundlevel = 2
          this.timer_facer_level[0].progress = this.fullcucle
          this.timer_facer_level[1].progress = this.fullcucle
        } else if (this.nowFromFreezeT() > this.byHr(24)) {
          this.startTime = this.byHr(168)
          this.time = this.lengthHr(168)
          this.until = this.$t("msg_lv2")
          this.cfundlevel = 1
          this.timer_facer_level[0].progress = this.fullcucle
        } else {
          this.startTime = this.byHr(24)
          this.time = this.lengthHr(24)
          this.until = this.$t("msg_lv1")
          this.cfundlevel = 0
        }
        this.startTimer()
      } else {
        this.until = this.$t("msg_inactivebiz")
        this.pauseTimer()
      }
    },
    byHr(m) {
      return m * 60 * 60
    },
    nowFromFreezeT() {
      const now = new Date().getTime() / 1000
      const fr = txtUnit(this.freeezeTime)
      return now - fr
    },
    lengthHr(c) {
      const now = new Date().getTime() / 1000
      const fr = txtUnit(this.freeezeTime)
      return this.byHr(c) + fr - parseInt(now)
    },
    startTimer() {
      if (!this.started) {
        this.started = true
        this.timer = setInterval(this.countdown, 1000)
      }
    },
    pauseTimer() {
      if (this.started) {
        this.started = false
        clearInterval(this.timer)
      }
    },
    resetTimer() {
      this.time = 0
      clearInterval(this.timer)
      this.started = false
    },
    countdown() {
      const time = this.radioVal
      if (this.time > 0) {
        this.time--
      } else {
        this.resetTimer()
      }
      const offset = this.fullcucle - this.time / this.startTime * this.fullcucle
      this.timer_facer_level[this.cfundlevel].progress = -offset
    },
    formatTime(time) {
      return (time < 10 ? "0" : "") + time
    }
  }
}
</script>

<style scoped lang="sass">
.timer_ring_trackr
  stroke-linecap: square
  stroke-dasharray: 433.54 433.54

.timer_ring_l
  stroke-linecap: square
  stroke-dasharray: 433.54 433.54
  transition: stroke-dashoffset 0.35s
  transform: rotate(-90deg)
  transform-origin: 50% 50%

.button
  font-family: 'LCD7', serif
  font-weight: bold
  padding: 12px 23px
  margin-top: 20px
  border: 0
  border-radius: 30px
  color: #fff
  cursor: pointer
  transition: 0.2s

  &:hover
    transform: scale(1.05)

.start
  background: #BB4E75

.pause
  background: darken(#BB4E75, 20)

.reset
  background: #555

.timer-face
  position: relative

.timer-face__cont
  font-weight: bold
  font-family: serif
  position: relative
  bottom: 0px
  font-size: 14px

.timer-face__text
  font-weight: bold
  position: relative
  font-family: "kofi", serif
  bottom: 0px
  font-size: 13px

.timer-seconds
  display: flex
  flex-direction: column
  align-items: center
  margin-top: 30px
  border: 2px solid lightgray
  border-radius: 10px
  padding: 5px 15px

  h3
    margin-bottom: 0

  .timer-seconds__radios
    list-style: none
    margin-left: -45px

    li
      display: inline-block
      margin: 0 10px
      font-weight: bold
</style>
