import * as Vuex from "vuex"
import Vue from "vue"
import www from "../api/db/_w"
import _balincerdb from "../api/db/_balincerdb"

const createStore = function () {
  const storex = new Vuex.Store({})
  const opts = {}
  storex.registerModule("wallet", www, opts)
  storex.registerModule("b", _balincerdb, opts)
  return storex
}

Vue.use(Vuex)
export default createStore
