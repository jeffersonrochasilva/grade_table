<template>
  <div class="carrinho">
    <div class="carrinho__header">
      <h1>Carrinho</h1>
    </div>
    <div class="carrinho__content">
      <div class="carrinho__content__title">
        <span>Nome</span>
        | <span>QTDD</span> |

        <span>Preço</span>
      </div>
      <div
        v-for="(item, i) in produtos"
        :key="i"
        class="carrinho__content__value"
      >
        <strong>{{ item.nome }}</strong> |
        <strong>{{ item.quantidade }}</strong> |
        <strong>{{ item.preco }}</strong>
      </div>
      <div class="carrinho__content__total">
        <span
          >total: <strong>{{ total }}</strong></span
        >
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex';
export default {
  data() {
    return {};
  },
  computed: {
    total() {
      return this.$store.getters.valorTotal;
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
input {
  background: #303030;
  margin: 5px;
  border-radius: 4px;
  color: white;
}
</style>
