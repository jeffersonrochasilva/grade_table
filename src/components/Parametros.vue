<template>
  <div class="parametros">
    <div class="parametros__header">
      <h1>Paramentros</h1>
    </div>
    <div class="parametros__content">
      <div class="parametros__content__canp">
        <p>quantidade padrão</p>
        <input type="number" v-model="quantidade" />
      </div>
      <div class="parametros__content__canp">
        <p>Preço padrão</p>
        <input type="number" v-model="preco" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    quantidade: {
      get() {
        return this.$store.state.parametros.quantidade;
      },
      set(valor) {
        this.$store.commit("setQuantidade", valor);
      },
    },
    preco: {
      get() {
        return this.$store.state.parametros.preco;
      },
      set(valor) {
        this.$store.commit("setPreco", valor);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.parametros {
  &__content {
    display: flex;

    &__camp {
      display: flex;
    }
  }
}
input {
  background: #303030;
  margin: 5px;
  border-radius: 4px;
  color: white;
}
</style>
