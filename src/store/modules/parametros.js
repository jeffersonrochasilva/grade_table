export default {
  state: {
    quantidade: 2,
    preco: 19.99,
    nome: "jefferson",
  },
  mutations: {
    setQuantidade(state, payload) {
      state.quantidade = payload;
    },
    setPreco(state, payload) {
      state.preco = payload;
    },
  },
  actions: {
    adicionarProduto({ commit }, payload) {
      setTimeout(() => {
        commit("adicionarProduto", payload);
      }, 1000);
    },
  },
};
