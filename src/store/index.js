import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    counter: 0,
  },
  mutations: {
    INCREASECOUNTER(state, payload) {
      state.counter += payload;
    },
    DECREASECOUNTER(state, payload) {
      if (state.counter - payload > 0) {
        state.counter -= payload;
      } else {
        state.counter = 0;
      }
    },
  },
  actions: {
    async increaseCounter({ commit }) {
      await axios
        .get(
          "https://www.random.org/integers/?num=1&min=1&max=9&col=5&base=10&format=plain&rnd=new"
        )
        .then((response) => {
          commit("INCREASECOUNTER", response.data);
        });
    },
    async decreaseCounter({ commit }) {
      await axios
        .get(
          "https://www.random.org/integers/?num=1&min=1&max=9&col=5&base=10&format=plain&rnd=new"
        )
        .then((response) => {
          commit("DECREASECOUNTER", response.data);
        });
    },
  },
  getters: {
    counterSquared(state) {
      return state.counter * state.counter;
    },
  },
  modules: {},
});
