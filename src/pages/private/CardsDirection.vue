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
    items: [{ icon: "mdi-table", name: "Tabela", direction: "table" }],
  }),
  computed: {},
};
</script>

<style lang="scss" scope>
.card {
  &__container {
    width: 220px;
    height: 220px;
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
