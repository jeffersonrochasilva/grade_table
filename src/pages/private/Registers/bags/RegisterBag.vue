<template>
  <v-card calss="select">
    <div>
      <span class="select__title">Cadastro de mantimentos</span>
    </div>
    <div class="select__container">
      <div
        @click="setStep(1)"
        :class="
          getStepSelect === 1
            ? 'select__container__boxSelect'
            : 'select__container__one'
        "
      >
        <p>Frios</p>
      </div>
      <div
        @click="setStep(2)"
        :class="
          getStepSelect === 2
            ? 'select__container__boxSelect'
            : 'select__container__two'
        "
      >
        <p>Cereais</p>
      </div>
      <div
        @click="setStep(3)"
        :class="
          getStepSelect === 3
            ? 'select__container__boxSelect'
            : 'select__container__three'
        "
      >
        <p>Enlatados</p>
      </div>
      <div
        @click="setStep(4)"
        :class="
          getStepSelect === 4
            ? 'select__container__boxSelect'
            : 'select__container__four'
        "
      >
        <p>Vegetais</p>
      </div>
      <div
        @click="setStep(5)"
        :class="
          getStepSelect === 5
            ? 'select__container__boxSelect'
            : 'select__container__five'
        "
      >
        <p>Legumes</p>
      </div>
    </div>
  </v-card>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({}),
  computed: {
    ...mapGetters({ getStepSelect: "getStepSelect" }),
  },
  methods: {
    setStep(item) {
      this.$store.commit("setStepSelect", item);
    },
  },
};
</script>
<style lang="scss" scoped>
.select {
  width: 100%;
  padding-top: 50px;

  &__container {
    width: 100%;
    margin-top: 30px;
    display: flex;
    &__one {
      width: 19%;
      height: 50px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__two {
      width: 19%;
      height: 50px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__three {
      width: 19%;
      height: 50px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__four {
      width: 19%;
      height: 50px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__five {
      width: 19%;
      height: 50px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__boxSelect {
      width: 19%;
      height: 50px;
      cursor: pointer;
      border-bottom: 2px solid red;
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        color: red;
      }
    }
  }
  p {
    font-family: sans-serif;
    font-size: 24px;
  }
}
p {
  font-family: sans-serif;
  font-size: 15px;
  font-weight: 600;
}
span {
  color: #454d6b;
  font-family: sans-serif;
  font-size: 24px;
  margin: 50px;
}
</style>
