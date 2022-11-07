<template>
  <div>
    <v-card class="table">
      <h1 class="table__title">Demonstração de dispensa</h1>
      <div class="table__container">
        <div class="table__container__header">
          <div class="table__container__header__month">
            <ul
              v-for="(item, i) in months"
              :key="i"
              class="table__container__header__month__listMonth"
            >
              <li class="table__container__header__month__listMonth__text">
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="table__container__header__list">
            <div class="table__container__header__list__listHeader">
              <ul v-for="(item, i) in descriptionData" :key="i">
                <li
                  class="table__container__header__list__listHeader__description"
                >
                  {{ item.name }}
                </li>
              </ul>
            </div>
            <div
              v-for="(item, i) in months"
              :key="i"
              class="table__container__header__list__listValue"
            >
              <ul v-for="(item, i) in descriptionData" :key="i">
                <li class="table__container__header__list__listValue__text">
                  {{
                    i === 3 || i === 6 || i === 7
                      ? formatLt(item.value)
                      : formatKg(item.value)
                  }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    titlecolor: "red",
    descriptionData: [
      { name: "Arroz", value: "36" },
      { name: "Feijão", value: "47" },
      { name: "Carne", value: "150" },
      { name: "Leite", value: "80" },
      { name: "Farinha", value: "34" },
      { name: "Macarrão", value: "59" },
      { name: "Òleo", value: "45" },
      { name: "Azeite", value: "15" },
      { name: "Sal", value: "10" },
      { name: "Gelatina", value: "300" },
      { name: "Frango", value: "150" },
    ],
    months: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
  }),
  computed: {},
  methods: {
    formatKg(item) {
      return `${item} Kg`;
    },
    formatLt(item) {
      return `${item} L`;
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
      &__month {
        margin-top: 42px;
        margin-right: 20px;
        &__listMonth {
          &__text {
            height: 30px;
            list-style: none;
            font-family: sans-serif;
            color: #454d6b;
            font-weight: bold;
            font-size: 15px;
          }
        }
      }
      &__list {
        width: 100%;
        &__listHeader {
          width: 100%;
          padding-bottom: 20px;
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
        &__listValue {
          border-bottom: 1px solid #454d6b9a;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          &__text {
            width: 85px;
            height: 28.5px;
            list-style-type: none;
            font-family: sans-serif, "Open Sans";
            color: #777777;
            font-weight: 400;
            display: flex;
            align-items: center;
            font-size: 15px;
            font-style: normal;
          }
        }
      }
    }
  }
}
</style>
