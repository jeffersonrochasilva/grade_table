export default {
  valorTotal(state) {
    return state.produtos
      .map((p) => p.quantidade * p.preco)
      .reduce((total, atual) => total + atual, 0);
  },
  getname: (state) => state.name,
};
