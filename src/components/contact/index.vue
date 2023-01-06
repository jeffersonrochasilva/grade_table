<template>
  <div class="contact">
    <Header />
    <div class="contact__content">
      <Cards />
    </div>
  </div>
</template>
<script>
import Header from "@/components/contact/Header.vue";
import Cards from "@/components/contact/cards/index.vue";
export default {
  components: {
    Header,
    Cards,
  },
};
</script>
<style lang="scss" scoped>
.contact {
}
</style>
