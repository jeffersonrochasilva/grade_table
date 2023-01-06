<template>
  <div class="container">
    <div class="container__cards" v-for="(item, i) in params" :key="i">
      <v-icon size="32" class="container__cards__icon">{{ item.icon }}</v-icon>
      <span class="container__cards__title">{{ item.title }}</span>
      <p class="container__cards__text">{{ item.text }}</p>
      <a class="container__cards__link" href="">{{ item.link }}</a>
    </div>
  </div>
</template>

<script>
import params from "@/components/contact/cards/index";
export default {
  data() {
    return {
      params: [],
    };
  },
  mounted() {
    this.params = params;
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  &__cards {
    height: 180px;
    min-width: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    &__icon {
    }
    &__title {
      color: #831f9c;
      font-weight: bold;
      font-family: sans-serif;
    }
    &__text {
      font-size: 15px;
      color: gray;
      font-family: sans-serif;
    }
    &__link {
      font-size: 15px;
      font-weight: bolder;
      color: #303030;
      font-family: sans-serif;
      text-decoration: none;
    }
  }
}
</style>
