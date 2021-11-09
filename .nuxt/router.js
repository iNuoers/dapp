import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0beb16f6 = () => interopDefault(import('../src/pages/cov.vue' /* webpackChunkName: "pages/index" */))
const _17cbb46c = () => interopDefault(import('../src/pages/borrow.vue' /* webpackChunkName: "pages/borrow" */))
const _12cac692 = () => interopDefault(import('../src/pages/governance.vue' /* webpackChunkName: "pages/governance" */))
const _924a048a = () => interopDefault(import('../src/pages/launchpad.vue' /* webpackChunkName: "pages/launchpad" */))
const _e7cb0ce4 = () => interopDefault(import('../src/pages/lending.vue' /* webpackChunkName: "pages/lending" */))
const _06e37d03 = () => interopDefault(import('../src/pages/margin.vue' /* webpackChunkName: "pages/margin" */))
const _a13ec29c = () => interopDefault(import('../src/pages/markets.vue' /* webpackChunkName: "pages/markets" */))
const _6e729fc1 = () => interopDefault(import('../src/pages/rank.vue' /* webpackChunkName: "pages/rank" */))
const _3e5794b2 = () => interopDefault(import('../src/pages/staking.vue' /* webpackChunkName: "pages/staking" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/ar",
    component: _0beb16f6,
    name: "index___ar"
  }, {
    path: "/borrow",
    component: _17cbb46c,
    name: "borrow___en"
  }, {
    path: "/cn",
    component: _0beb16f6,
    name: "index___cn"
  }, {
    path: "/cov",
    component: _0beb16f6,
    name: "cov___en"
  }, {
    path: "/de",
    component: _0beb16f6,
    name: "index___de"
  }, {
    path: "/es",
    component: _0beb16f6,
    name: "index___es"
  }, {
    path: "/fr",
    component: _0beb16f6,
    name: "index___fr"
  }, {
    path: "/governance",
    component: _12cac692,
    name: "governance___en"
  }, {
    path: "/in",
    component: _0beb16f6,
    name: "index___in"
  }, {
    path: "/it",
    component: _0beb16f6,
    name: "index___it"
  }, {
    path: "/jp",
    component: _0beb16f6,
    name: "index___jp"
  }, {
    path: "/ko",
    component: _0beb16f6,
    name: "index___ko"
  }, {
    path: "/launchpad",
    component: _924a048a,
    name: "launchpad___en"
  }, {
    path: "/lending",
    component: _e7cb0ce4,
    name: "lending___en"
  }, {
    path: "/margin",
    component: _06e37d03,
    name: "margin___en"
  }, {
    path: "/markets",
    component: _a13ec29c,
    name: "markets___en"
  }, {
    path: "/rank",
    component: _6e729fc1,
    name: "rank___en"
  }, {
    path: "/ru",
    component: _0beb16f6,
    name: "index___ru"
  }, {
    path: "/staking",
    component: _3e5794b2,
    name: "staking___en"
  }, {
    path: "/th",
    component: _0beb16f6,
    name: "index___th"
  }, {
    path: "/zh",
    component: _0beb16f6,
    name: "index___zh"
  }, {
    path: "/ar/borrow",
    component: _17cbb46c,
    name: "borrow___ar"
  }, {
    path: "/ar/cov",
    component: _0beb16f6,
    name: "cov___ar"
  }, {
    path: "/ar/governance",
    component: _12cac692,
    name: "governance___ar"
  }, {
    path: "/ar/launchpad",
    component: _924a048a,
    name: "launchpad___ar"
  }, {
    path: "/ar/lending",
    component: _e7cb0ce4,
    name: "lending___ar"
  }, {
    path: "/ar/margin",
    component: _06e37d03,
    name: "margin___ar"
  }, {
    path: "/ar/markets",
    component: _a13ec29c,
    name: "markets___ar"
  }, {
    path: "/ar/rank",
    component: _6e729fc1,
    name: "rank___ar"
  }, {
    path: "/ar/staking",
    component: _3e5794b2,
    name: "staking___ar"
  }, {
    path: "/cn/borrow",
    component: _17cbb46c,
    name: "borrow___cn"
  }, {
    path: "/cn/cov",
    component: _0beb16f6,
    name: "cov___cn"
  }, {
    path: "/cn/governance",
    component: _12cac692,
    name: "governance___cn"
  }, {
    path: "/cn/launchpad",
    component: _924a048a,
    name: "launchpad___cn"
  }, {
    path: "/cn/lending",
    component: _e7cb0ce4,
    name: "lending___cn"
  }, {
    path: "/cn/margin",
    component: _06e37d03,
    name: "margin___cn"
  }, {
    path: "/cn/markets",
    component: _a13ec29c,
    name: "markets___cn"
  }, {
    path: "/cn/rank",
    component: _6e729fc1,
    name: "rank___cn"
  }, {
    path: "/cn/staking",
    component: _3e5794b2,
    name: "staking___cn"
  }, {
    path: "/de/borrow",
    component: _17cbb46c,
    name: "borrow___de"
  }, {
    path: "/de/cov",
    component: _0beb16f6,
    name: "cov___de"
  }, {
    path: "/de/governance",
    component: _12cac692,
    name: "governance___de"
  }, {
    path: "/de/launchpad",
    component: _924a048a,
    name: "launchpad___de"
  }, {
    path: "/de/lending",
    component: _e7cb0ce4,
    name: "lending___de"
  }, {
    path: "/de/margin",
    component: _06e37d03,
    name: "margin___de"
  }, {
    path: "/de/markets",
    component: _a13ec29c,
    name: "markets___de"
  }, {
    path: "/de/rank",
    component: _6e729fc1,
    name: "rank___de"
  }, {
    path: "/de/staking",
    component: _3e5794b2,
    name: "staking___de"
  }, {
    path: "/es/borrow",
    component: _17cbb46c,
    name: "borrow___es"
  }, {
    path: "/es/cov",
    component: _0beb16f6,
    name: "cov___es"
  }, {
    path: "/es/governance",
    component: _12cac692,
    name: "governance___es"
  }, {
    path: "/es/launchpad",
    component: _924a048a,
    name: "launchpad___es"
  }, {
    path: "/es/lending",
    component: _e7cb0ce4,
    name: "lending___es"
  }, {
    path: "/es/margin",
    component: _06e37d03,
    name: "margin___es"
  }, {
    path: "/es/markets",
    component: _a13ec29c,
    name: "markets___es"
  }, {
    path: "/es/rank",
    component: _6e729fc1,
    name: "rank___es"
  }, {
    path: "/es/staking",
    component: _3e5794b2,
    name: "staking___es"
  }, {
    path: "/fr/borrow",
    component: _17cbb46c,
    name: "borrow___fr"
  }, {
    path: "/fr/cov",
    component: _0beb16f6,
    name: "cov___fr"
  }, {
    path: "/fr/governance",
    component: _12cac692,
    name: "governance___fr"
  }, {
    path: "/fr/launchpad",
    component: _924a048a,
    name: "launchpad___fr"
  }, {
    path: "/fr/lending",
    component: _e7cb0ce4,
    name: "lending___fr"
  }, {
    path: "/fr/margin",
    component: _06e37d03,
    name: "margin___fr"
  }, {
    path: "/fr/markets",
    component: _a13ec29c,
    name: "markets___fr"
  }, {
    path: "/fr/rank",
    component: _6e729fc1,
    name: "rank___fr"
  }, {
    path: "/fr/staking",
    component: _3e5794b2,
    name: "staking___fr"
  }, {
    path: "/in/borrow",
    component: _17cbb46c,
    name: "borrow___in"
  }, {
    path: "/in/cov",
    component: _0beb16f6,
    name: "cov___in"
  }, {
    path: "/in/governance",
    component: _12cac692,
    name: "governance___in"
  }, {
    path: "/in/launchpad",
    component: _924a048a,
    name: "launchpad___in"
  }, {
    path: "/in/lending",
    component: _e7cb0ce4,
    name: "lending___in"
  }, {
    path: "/in/margin",
    component: _06e37d03,
    name: "margin___in"
  }, {
    path: "/in/markets",
    component: _a13ec29c,
    name: "markets___in"
  }, {
    path: "/in/rank",
    component: _6e729fc1,
    name: "rank___in"
  }, {
    path: "/in/staking",
    component: _3e5794b2,
    name: "staking___in"
  }, {
    path: "/it/borrow",
    component: _17cbb46c,
    name: "borrow___it"
  }, {
    path: "/it/cov",
    component: _0beb16f6,
    name: "cov___it"
  }, {
    path: "/it/governance",
    component: _12cac692,
    name: "governance___it"
  }, {
    path: "/it/launchpad",
    component: _924a048a,
    name: "launchpad___it"
  }, {
    path: "/it/lending",
    component: _e7cb0ce4,
    name: "lending___it"
  }, {
    path: "/it/margin",
    component: _06e37d03,
    name: "margin___it"
  }, {
    path: "/it/markets",
    component: _a13ec29c,
    name: "markets___it"
  }, {
    path: "/it/rank",
    component: _6e729fc1,
    name: "rank___it"
  }, {
    path: "/it/staking",
    component: _3e5794b2,
    name: "staking___it"
  }, {
    path: "/jp/borrow",
    component: _17cbb46c,
    name: "borrow___jp"
  }, {
    path: "/jp/cov",
    component: _0beb16f6,
    name: "cov___jp"
  }, {
    path: "/jp/governance",
    component: _12cac692,
    name: "governance___jp"
  }, {
    path: "/jp/launchpad",
    component: _924a048a,
    name: "launchpad___jp"
  }, {
    path: "/jp/lending",
    component: _e7cb0ce4,
    name: "lending___jp"
  }, {
    path: "/jp/margin",
    component: _06e37d03,
    name: "margin___jp"
  }, {
    path: "/jp/markets",
    component: _a13ec29c,
    name: "markets___jp"
  }, {
    path: "/jp/rank",
    component: _6e729fc1,
    name: "rank___jp"
  }, {
    path: "/jp/staking",
    component: _3e5794b2,
    name: "staking___jp"
  }, {
    path: "/ko/borrow",
    component: _17cbb46c,
    name: "borrow___ko"
  }, {
    path: "/ko/cov",
    component: _0beb16f6,
    name: "cov___ko"
  }, {
    path: "/ko/governance",
    component: _12cac692,
    name: "governance___ko"
  }, {
    path: "/ko/launchpad",
    component: _924a048a,
    name: "launchpad___ko"
  }, {
    path: "/ko/lending",
    component: _e7cb0ce4,
    name: "lending___ko"
  }, {
    path: "/ko/margin",
    component: _06e37d03,
    name: "margin___ko"
  }, {
    path: "/ko/markets",
    component: _a13ec29c,
    name: "markets___ko"
  }, {
    path: "/ko/rank",
    component: _6e729fc1,
    name: "rank___ko"
  }, {
    path: "/ko/staking",
    component: _3e5794b2,
    name: "staking___ko"
  }, {
    path: "/ru/borrow",
    component: _17cbb46c,
    name: "borrow___ru"
  }, {
    path: "/ru/cov",
    component: _0beb16f6,
    name: "cov___ru"
  }, {
    path: "/ru/governance",
    component: _12cac692,
    name: "governance___ru"
  }, {
    path: "/ru/launchpad",
    component: _924a048a,
    name: "launchpad___ru"
  }, {
    path: "/ru/lending",
    component: _e7cb0ce4,
    name: "lending___ru"
  }, {
    path: "/ru/margin",
    component: _06e37d03,
    name: "margin___ru"
  }, {
    path: "/ru/markets",
    component: _a13ec29c,
    name: "markets___ru"
  }, {
    path: "/ru/rank",
    component: _6e729fc1,
    name: "rank___ru"
  }, {
    path: "/ru/staking",
    component: _3e5794b2,
    name: "staking___ru"
  }, {
    path: "/th/borrow",
    component: _17cbb46c,
    name: "borrow___th"
  }, {
    path: "/th/cov",
    component: _0beb16f6,
    name: "cov___th"
  }, {
    path: "/th/governance",
    component: _12cac692,
    name: "governance___th"
  }, {
    path: "/th/launchpad",
    component: _924a048a,
    name: "launchpad___th"
  }, {
    path: "/th/lending",
    component: _e7cb0ce4,
    name: "lending___th"
  }, {
    path: "/th/margin",
    component: _06e37d03,
    name: "margin___th"
  }, {
    path: "/th/markets",
    component: _a13ec29c,
    name: "markets___th"
  }, {
    path: "/th/rank",
    component: _6e729fc1,
    name: "rank___th"
  }, {
    path: "/th/staking",
    component: _3e5794b2,
    name: "staking___th"
  }, {
    path: "/zh/borrow",
    component: _17cbb46c,
    name: "borrow___zh"
  }, {
    path: "/zh/cov",
    component: _0beb16f6,
    name: "cov___zh"
  }, {
    path: "/zh/governance",
    component: _12cac692,
    name: "governance___zh"
  }, {
    path: "/zh/launchpad",
    component: _924a048a,
    name: "launchpad___zh"
  }, {
    path: "/zh/lending",
    component: _e7cb0ce4,
    name: "lending___zh"
  }, {
    path: "/zh/margin",
    component: _06e37d03,
    name: "margin___zh"
  }, {
    path: "/zh/markets",
    component: _a13ec29c,
    name: "markets___zh"
  }, {
    path: "/zh/rank",
    component: _6e729fc1,
    name: "rank___zh"
  }, {
    path: "/zh/staking",
    component: _3e5794b2,
    name: "staking___zh"
  }, {
    path: "/",
    component: _0beb16f6,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
