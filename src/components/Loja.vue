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
      <v-btn>Agora !</v-btn>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      preco: 9.9,
      quantidade: 4,
    };
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
