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
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters({ total: "valorTotal" }),
  },
  // computed: {
  //   total() {
  //     return this.$store.getters.valorTotal;
  //   },
  // },
};
</script>

<style lang="scss" scoped>
.carrinho {
}
</style>
