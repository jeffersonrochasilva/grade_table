<template>
  <div class="parametros">
    <div class="parametros__header">
      <h1>Loja virtual</h1>
    </div>
    <div class="parametros__content">
      <div class="parametros__content__canp">
        <p>adicionar</p>
        <input type="number" v-model="quantidade" />
      </div>
      <div class="parametros__content__canp">
        <p>item de R$</p>
        <input type="number" v-model="preco" />
      </div>
      <v-btn @click="adincionar()">Agora !</v-btn>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      preco: 9.99,
      quantidade: 1,
      sequencia: 1,
    };
  },
  methods: {
    adincionar() {
      const produto = {
        id: this.sequencia,
        nome: `produto ${this.sequencia}`,
        quantidade: this.quantidade,
        preco: this.preco,
      };
      this.sequencia++;
      // this.$store.state.produtos.push(produto);
      this.$store.commit("adicionarProduto", produto);
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
