import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    time: {
      day: "",
      hour: ""
    }
  },
  mutations: {
    updateHour(state, val) {
      state.time.hour = val;
    },
    updateDay(state, val) {
      state.time.day = val;
    }
  },
  actions: {},
  modules: {}
});
