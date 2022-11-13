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
    <template>
      <v-carousel v-model="model">
        <v-carousel-item v-for="(color, i) in colors" :key="color">
          <v-sheet :color="color" height="100%" tile>
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-h2">Slide {{ i + 1 }}</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </template>
    <template>
      <v-carousel v-model="model">
        <v-carousel-item v-for="(color, i) in colors" :key="color">
          <v-sheet :color="color" height="100%" tile>
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-h2">Slide {{ i + 1 }}</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </template>
    <template>
      <v-carousel v-model="model">
        <v-carousel-item v-for="(color, i) in colors" :key="color">
          <v-sheet :color="color" height="100%" tile>
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-h2">Slide {{ i + 1 }}</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </template>
    <template>
      <v-carousel v-model="model">
        <v-carousel-item v-for="(color, i) in colors" :key="color">
          <v-sheet :color="color" height="100%" tile>
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-h2">Slide {{ i + 1 }}</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </template>
    <template>
      <v-carousel v-model="model">
        <v-carousel-item v-for="(color, i) in colors" :key="color">
          <v-sheet :color="color" height="100%" tile>
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-h2">Slide {{ i + 1 }}</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </template>
    <template>
      <v-carousel v-model="model">
        <v-carousel-item v-for="(color, i) in colors" :key="color">
          <v-sheet :color="color" height="100%" tile>
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-h2">Slide {{ i + 1 }}</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </template>
    <template>
      <v-carousel v-model="model">
        <v-carousel-item v-for="(color, i) in colors" :key="color">
          <v-sheet :color="color" height="100%" tile>
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-h2">Slide {{ i + 1 }}</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </template>
    <template>
      <v-carousel v-model="model">
        <v-carousel-item v-for="(color, i) in colors" :key="color">
          <v-sheet :color="color" height="100%" tile>
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-h2">Slide {{ i + 1 }}</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </template>
    <template>
      <v-carousel v-model="model">
        <v-carousel-item v-for="(color, i) in colors" :key="color">
          <v-sheet :color="color" height="100%" tile>
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-h2">Slide {{ i + 1 }}</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </template>
    <template>
      <v-carousel v-model="model">
        <v-carousel-item v-for="(color, i) in colors" :key="color">
          <v-sheet :color="color" height="100%" tile>
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-h2">Slide {{ i + 1 }}</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </template>
    <template>
      <v-carousel v-model="model">
        <v-carousel-item v-for="(color, i) in colors" :key="color">
          <v-sheet :color="color" height="100%" tile>
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-h2">Slide {{ i + 1 }}</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </template>
    <template>
      <v-carousel v-model="model">
        <v-carousel-item v-for="(color, i) in colors" :key="color">
          <v-sheet :color="color" height="100%" tile>
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-h2">Slide {{ i + 1 }}</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </template>
    <template>
      <v-carousel v-model="model">
        <v-carousel-item v-for="(color, i) in colors" :key="color">
          <v-sheet :color="color" height="100%" tile>
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-h2">Slide {{ i + 1 }}</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </template>
    <template>
      <v-carousel v-model="model">
        <v-carousel-item v-for="(color, i) in colors" :key="color">
          <v-sheet :color="color" height="100%" tile>
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-h2">Slide {{ i + 1 }}</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </template>
    <template>
      <v-carousel v-model="model">
        <v-carousel-item v-for="(color, i) in colors" :key="color">
          <v-sheet :color="color" height="100%" tile>
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-h2">Slide {{ i + 1 }}</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </template>
  </div>
</template>

<script>
export default {
  data: () => ({
    titlecolor: "red",
    model: 0,
    colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
  }),
  computed: {
    descriptionData() {
      return this.$store.state.dispensa.descriptionData;
    },
    months() {
      return this.$store.state.dispensa.months;
    },
  },
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
