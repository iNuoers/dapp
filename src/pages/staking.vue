<template>
  <section id="indexbox" class="index">

    <!-- <v-footer></v-footer> -->
  </section>
</template>
<script>
import nav from "@/api/mixins/tron/nav";
import string_tx from "@/api/mixins/string_tx";
import terms from "@/components/sheet/terms";
// import vHeader from "@/components/header";
// import vFooter from "@/components/footer";

import {ImTokenComponent, EthereumWeb3Component} from "vue-blocklink";

export default {
  layout: "cover",
  name: "CoverPage",
  comments: {},
  components: {terms},
  mixins: [EthereumWeb3Component, ImTokenComponent, nav, string_tx],
  data() {
    return {
      skin: 0,
    };
  },
  computed: {},
  watch: {},
  methods: {
    beforeMount: function () {
    },
    mounted: function () {
    },
    swithskin: function (e) {
    },
  },
};
</script>
<style scoped lang="scss">

.index {
  background: #0c0d17;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  top: 0px;
  padding-top: 45px;

  .body {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;

    .left {
      width: 411px;
      border-right: 1px solid #1e2334;
      height: 100%;
      z-index: 2;
      left: 0;
      min-width: 320px;

      .nav_ul {
        list-style: none;
        padding: 0;
        color: #3a4365;
        font-family: "Futwora";
        margin: 0;
        padding: 15px;
        box-sizing: border-box;

        li {
          font-family: "Gotham";
          padding: 15px 25px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          font-size: 15px;
          margin-top: 10px;
          transition: all 0.3s;
          -webkit-transition: all 0.3s;

          &:nth-child(1) {
            margin-top: 0px;
          }

          .icon_img {
            margin-right: 15px;
            width: 25px;
          }

          &:hover {
            background: #0a0a12;
            border-radius: 10px;
          }
        }
      }
    }

    .right {
      width: 100%;

      .market_info {
        display: flex;
        height: 294px;
        // border-bottom: 1px solid #1e2334;
        box-sizing: border-box;
        width: 100%;

        .num {
          width: 400px;
          border-right: 1px solid #1e2334;

          .lock {
            border-bottom: 1px solid #1e2334;
            padding: 30px;
            box-sizing: border-box;

            .lock_title {
              color: #3a4365;
              font-size: 15px;
              font-family: "Gotham";
              margin-bottom: 0;
            }

            .lock_num {
              display: flex;
              align-items: flex-end;
              font-size: 26px;
              margin-top: 20px;
              color: white;
              font-weight: bold;
              font-family: "Gotham";
            }

            .toBTC {
              display: flex;
              font-size: 14px;
              color: #3a446482;
              margin-left: 5px;
            }

            .week {
              margin-top: 8px;
              color: #3fb68b;
              display: flex;
              align-items: center;

              .up {
                background: url("/up.svg") center no-repeat;
                background-size: cover;
                background-size: cover;
                width: 10px;
                height: 10px;
                margin-bottom: 5px;
                margin-right: 2px;
              }

              .week_t {
                color: #6f6e84;
                margin-left: 4px;
              }
            }

            .borrow_title {
              color: #3a4365;
              font-size: 15px;
              font-family: "Gotham";
              margin-bottom: 0;
            }

            .borrow_num {
              display: flex;
              align-items: flex-end;
              font-size: 26px;
              margin-top: 20px;
              color: white;
              font-weight: bold;
              font-family: "Gotham";
            }

            .borrow_tote {
              margin-top: 8px;
              color: #3fb68b;
              display: flex;
              align-items: center;

              .up {
                background: url("/up.svg") center no-repeat;
                background-size: cover;
                background-size: cover;
                width: 10px;
                height: 10px;
                margin-bottom: 5px;
                margin-right: 2px;
              }

              .tote {
                color: #6f6e84;
                margin-left: 4px;
              }
            }
          }
        }
      }

      .traderview {
        position: relative;
        background: url("/trader_background.png") center repeat-x;
        width: 75%;
        border-bottom: 1px solid #1e2334;

        .traderview_info_box {
          position: absolute;
          color: white;
          left: 50%;
          right: 50%;
          top: 50%;
          bottom: 50%;
          width: 400px;
          background: #0000007d;
          padding: 25px;
          margin-left: -200px;
          margin-top: -30px;
          height: 65px;
          text-align: center;
          border-radius: 5px;
          font-family: "Gotham";
          font-size: 15px;
          border: 1px solid #1e2334b0;
        }
      }
    }

    .market_list {
      width: 100%;
      line-height: 16px;
      border-collapse: collapse;
      border-spacing: 0;

      thead {
        background: #10111e;
        letter-spacing: 0px;
        position: sticky;
        top: 0px;
        color: #3a4365;
        border-bottom: 1px solid #1e2334;

        .search_th {
          padding: 0;

          .search {
            background: #0a0a12;
            padding: 5px;
            border-radius: 5px;
            margin-right: 15px;
            display: flex;
            align-items: center;

            input {
              color: #3a4464;
              width: 92%;
              padding-left: 5px;
            }

            .search_icon {
              background: url("/search.svg") no-repeat center;
              background-size: cover;
              width: 10px;
              height: 10px;
            }
          }
        }

        th {
          padding: 10px;
          font-family: "Gotham";
          font-size: 12px;
        }
      }

      tbody {
        height: 50px;

        .t {
          background: #0a0b14;
        }

        tr {
          height: 50px;
          border-bottom: 1px solid #1e233436;
          transition: all 0.5s;
          -webkit-transition: all 0.5s;

          .control {
            width: 230px;
          }

          &:hover {
            background: #dddddd0f;
          }

          td {
            .deposit_button {
              background: #ffc037;
              padding: 10px;
              border-radius: 5px;
              width: 100px;
            }

            .open_button {
              background: #131322;
              padding: 10px;
              color: white;
              border-radius: 3px;
              margin-left: 3px;
            }
          }

          .coin_info {
            display: flex;
            padding: 10px;
            align-items: center;

            .coin_img {
              background: url("/bit.png") no-repeat center;
              width: 30px;
              height: 30px;
              background-size: cover;
            }

            .coin_text {
              margin-left: 10px;
              padding-top: 2px;
              box-sizing: border-box;

              .coin_name {
                color: #6f6e84;
                font-size: 18px;
                padding-top: 3px;
                font-family: "Gotham";
              }

              .coin_price {
                color: #3a4365;
                font-size: 12px;
                font-family: "Gotham";
                margin-top: 2px;
              }
            }
          }

          .num {
            color: #3a4365;
            text-align: center;
            font-family: "Gotham";

            .claim {
              display: flex;
              align-items: center;
              justify-content: center;

              .claim_img {
                background: url("/icon_logo_200x200.png") no-repeat center;
                background-size: cover;
                width: 15px;
                height: 15px;
                margin-right: 8px;
              }
            }
          }

          .overall {
            color: #ffc037;
          }
        }
      }
    }
  }
}
</style>
