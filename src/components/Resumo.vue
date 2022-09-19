<template>
  <div class="carrinho">
    <div class="carrinho__header">
      <h1>Resumo</h1>
    </div>
    <div class="carrinho__content">
      <span>Total: {{ total }}</span>
    </div>
    <v-btn>Finalizar</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    total() {
      return this.produtos
        .map((p) => p.quantidade * p.preco)
        .reduce((atual, total) => total + atual, 0);
    },
    produtos() {
      return this.$store.state.produtos;
    },
  },
};
</script>

<style lang="scss" scoped>
.carrinho {
}
</style>
