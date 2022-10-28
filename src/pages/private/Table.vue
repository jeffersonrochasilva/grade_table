<template>
  <div>
    <v-card class="table">
      <h1 class="table__title">Tabela de demostração</h1>
      <div class="table__container">
        <div class="table__container__header">
          <ul v-for="(item, i) in header" :key="i">
            <li class="table__container__header__description">{{ item }}</li>
          </ul>
        </div>

        <ul v-for="(item, i) in params" :key="i" class="table__container__list">
          <li class="table__container__list--content">
            <v-checkbox @click="getCheckbox(item)" color="#FF0000" />
          </li>
          <li class="table__container__list--content">
            {{ item.number }}
          </li>
          <li class="table__container__list--content">
            {{ item.name }}
          </li>
          <li class="table__container__list--content">
            {{ item.lastName }}
          </li>
          <li
            :class="`table__container__list--${
              item.matematica > 5 ? 'content' : 'contentFail'
            }`"
          >
            {{ item.matematica }}
          </li>
          <li
            :class="`table__container__list--${
              item.portugues > 5 ? 'content' : 'contentFail'
            }`"
          >
            {{ item.portugues }}
          </li>
          <li
            :class="`table__container__list--${
              item.ciencia > 5 ? 'content' : 'contentFail'
            }`"
          >
            {{ item.ciencia }}
          </li>
          <li
            :class="`table__container__list--${
              item.geografia > 5 ? 'content' : 'contentFail'
            }`"
          >
            {{ item.geografia }}
          </li>
          <li
            :class="`table__container__list--${
              item.historia > 5 ? 'content' : 'contentFail'
            }`"
          >
            {{ item.historia }}
          </li>
          <li
            :class="`table__container__list--${
              item.fisica > 5 ? 'content' : 'contentFail'
            }`"
          >
            {{ item.fisica }}
          </li>
          <li
            :class="`table__container__list--${
              item.filozofia > 5 ? 'content' : 'contentFail'
            }`"
          >
            {{ item.filozofia }}
          </li>
          <li
            :class="`table__container__list--${
              item.ingles > 5 ? 'content' : 'contentFail'
            }`"
          >
            {{ item.ingles }}
          </li>
        </ul>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    titlecolor: "red",
  }),
  computed: {
    header() {
      return this.$store.state.table.header;
    },
    params() {
      return this.$store.state.table.params;
    },
  },
  methods: {
    getCheckbox(item) {
      console.log(item, "item");
    },
  },
};
</script>
<style lang="scss" scoped>
.table {
  width: 1700px;
  overflow-x: scroll;
  padding: 15px 0 10px;
  &__title {
    color: #454d6b;
    font-family: sans-serif;
    font-size: 24px;
    padding: 50px 15px;
  }
  &__container {
    &__header {
      padding: 20px;
      display: flex;
      justify-content: space-between;
      &__description {
        width: 85px;
        list-style-type: none;
        font-family: sans-serif;
        color: #454d6b;
        font-weight: bold;
        font-size: 15px;
      }
    }
    &__list {
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
      align-items: center;
      &--content {
        min-width: 85px;
        list-style-type: none;
        font-family: sans-serif;
        font-size: 15px;
      }
      &--contentFail {
        min-width: 85px;
        list-style-type: none;
        font-family: sans-serif;
        font-size: 15px;
        color: #ff0000;
      }
    }
  }
}
</style>
