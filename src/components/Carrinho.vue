<template>
  <div class="carrinho">
    <div class="carrinho__header">
      <h1>Carrinho</h1>
      nome:
      <h3>{{ name }}</h3>
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
          >total: <strong>{{ somaTotal }}</strong></span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
import url from "../utils/kkk";
export default {
  data() {
    return {};
  },
  async mounted() {
    console.log(URL, "URL");
    console.log(url, "url");
    await this.getApi();
    console.log(name, "name");
  },
  computed: {
    ...mapGetters({
      somaTotal: "valorTotal",
      name: "carrinho/name",
    }),
    total() {
      return this.$store.getters.valorTotal;
    },
    produtos() {
      return this.$store.state.carrinho.produtos;
    },
  },
  methods: {
    async getApi() {
      await axios
        .get(url)
        .then((res) => {
          console.log(res.data, "data da api");
        })
        .catch((error) => {
          console.log(error, "ERROR");
        });
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
