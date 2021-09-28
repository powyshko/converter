import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currencies: {},
    charCodeCur: "",
    charCodeConv: "",
  },
  mutations: {
    setCurrencie(state, currencie) {
      state.currencies = currencie;
    },
    setCharCodeCur(state, code) {
      state.charCodeCur = code;
    },
    setCharCodeConv(state, code) {
      state.charCodeConv = code;
    },
  },
  actions: {
    getCurrencies({ commit }) {
      axios.get("https://www.cbr-xml-daily.ru/daily_json.js").then((res) => {
        const result = res.data.Valute;
        commit("setCurrencie", result);
      });
    },
    getCharCodeCur({ commit }, code) {
      commit("setCharCodeCur", code);
    },
    getCharCodeConv({ commit }, code) {
      commit("setCharCodeConv", code);
    },
  },
  getters: {
    getCurrencies(state) {
      return state.currencies;
    },
    getKeysCurrencies(state) {
      return Object.keys(state.currencies);
    },
    getCurrenciesSingle: (state) => (charCode) => {
      return state.currencies[charCode];
    },
    getCharCodeCur(state) {
      return state.charCodeCur;
    },
    getCharCodeConv(state) {
      return state.charCodeConv;
    },
  },
  modules: {},
});
