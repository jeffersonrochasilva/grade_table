import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    produtos: [
      {
        id: 1,
        nome: "Produto 1",
        quantidade: 25,
        preco: 39.9,
      },
      {
        id: 2,
        nome: "Produto 2",
        quantidade: 15,
        preco: 59.9,
      },
      {
        id: 3,
        nome: "Produto 3",
        quantidade: 15,
        preco: 59.9,
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
