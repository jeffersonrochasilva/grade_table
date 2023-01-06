<template>
  <v-card>
    <div class="contact">
      <span class="contact__title">Fale Conosco</span>
      <Contact />
    </div>
  </v-card>
</template>

<script>
import Contact from "@/components/contact/index.vue";
export default {
  components: {
    Contact,
  },
};
</script>
<style lang="scss" scoped>
.contact {
  width: 100%;
  padding: 10px;
  &__title {
    font-size: 28px;
    font-family: sans-serif;
    margin: 45px 0 25px 10px;
  }
}
</style>
