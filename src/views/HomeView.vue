<template>
  <v-container>
    <div>
      <Parametros />
      <Carrinho />
    </div>
    <div>
      <Loja />
      <Resumo />
    </div>
    <v-btn @click="$router.push('/about')">ir para o pagina about</v-btn>
  </v-container>
</template>

<script>
import Parametros from "@/components/Parametros.vue";
import Carrinho from "@/components/Carrinho.vue";
import Loja from "@/components/Loja.vue";
import Resumo from "@/components/Resumo.vue";
export default {
  name: "Home",

  components: {
    Carrinho,
    Parametros,
    Loja,
    Resumo,
  },
};
</script>
