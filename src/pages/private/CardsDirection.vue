<template>
  <div class="card">
    <v-card
      v-for="(item, i) in items"
      @click="$router.push({ name: item.direction })"
      :key="i"
      class="card__container"
    >
      <v-icon size="160" class="card__container__content">{{
        item.icon
      }}</v-icon>
      <span>{{ item.name }}</span>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { icon: "mdi-table", name: "table Alunos", direction: "table" },
      { icon: "mdi-food-apple", name: "Dispensa", direction: "dispensa" },
    ],
  }),
  computed: {},
};
</script>

<style lang="scss" scope>
.card {
  display: flex;
  flex-wrap: wrap;
  &__container {
    width: 220px;
    height: 220px;
    margin: 20px 33px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__content {
      font-size: 42px;
    }
    span {
      color: #454d6b;
      font-family: sans-serif;
      font-size: 24px;
    }
  }
}
</style>
