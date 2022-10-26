export default {
  adicionarProduto({ commit }, payload) {
    setTimeout(() => {
      commit("adicionarProduto", payload);
    }, 1000);
  },
};
