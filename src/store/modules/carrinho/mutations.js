export default {
  adicionarProduto(state, payload) {
    return state.produtos.push(payload);
  },
};
