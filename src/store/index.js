import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import axios from "axios";
const LOGIN_URL = "https://api.jsonbin.io/b/600c24d5a3d8a0580c3532b1";
const MOBILES_URL = "https://api.jsonbin.io/b/600c2479a3d8a0580c353296";

export default new Vuex.Store({
  state: {
    token: "",
    mobiles: [],
  },
  mutations: {
    setMobiles(state, mobiles) {
      state.mobiles = mobiles;
    },
    setToken(state, t) {
      state.token = t;
    },
  },
  actions: {
    loadMobiles(context) {
      axios
        .get(MOBILES_URL, {
          headers: {
            Authorization: "bearer " + context.state.token,
          },
        })
        .then((res) => {
          context.commit("setMobiles", res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    async login(context, credentials) {
      return axios
        .get(LOGIN_URL, {
          params: {
            username: credentials.username,
            password: credentials.password,
          },
        })
        .then((res) => {
          context.commit("setToken", res.data.token);
          return true;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
});
