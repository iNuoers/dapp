import * as Vuex from "vuex"
import Vue from "vue"
import www from "../api/db/_w"
import _balincerdb from "../api/db/_balincerdb"

const createStore = function () {
  const sx = new Vuex.Store({})
  const opts = {}
  sx.registerModule("wallet", www, opts)
  sx.registerModule("b", _balincerdb, opts)
  return sx
}

Vue.use(Vuex)
export default createStore
