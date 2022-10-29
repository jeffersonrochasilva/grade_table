<template>
  <v-card class="students">
    <span class="students__title">Cadastro de Alunos</span>
    <div class="students__form">
      <div class="students__form__campAlert">
        <input
          class="students__form__campAlert__camp"
          type="text"
          v-model="name"
          placeholder="Nome"
        />
        <p v-if="campName">Preencha o campo</p>
      </div>
      <div class="students__form__campAlert">
        <input
          class="students__form__campAlert__camp"
          type="text"
          v-model="lastName"
          placeholder="sobrenome"
        />
        <p v-if="campLastName">Preencha o campo</p>
      </div>
      <div class="students__form__campAlert">
        <input
          class="students__form__campAlert__camp"
          type="Number"
          v-model="cpf"
          placeholder="cpf"
        />
        <p v-if="campCpf">Preencha o campo</p>
      </div>
      <div class="students__form__campAlert">
        <input
          class="students__form__campAlert__camp"
          type="number"
          v-model="age"
          placeholder="Idade"
        />
        <p v-if="campLastName">Preencha o campo</p>
      </div>
    </div>
    <div class="students__button">
      <v-btn
        @click="regeisterStudents()"
        :disabled="disabledButton(name, lastName, cpf, age)"
        class="students__button__btn"
        >Cadastrar</v-btn
      >
    </div>
  </v-card>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  data: () => ({
    name: "",
    lastName: "",
    age: "",
    cpf: "",
    campName: false,
    campLastName: false,
    campCpf: false,
  }),

  methods: {
    ...mapActions({ registerStudentss: "registerStudentss" }),
    ...mapMutations({ setStepLoading: "setStepLoading" }),
    disabledButton(name, lastName, cpf, age) {
      if (name.length > 0 && lastName.length > 0 && cpf > 0 && age > 0) {
        return false;
      } else {
        return true;
      }
    },
    async regeisterStudents() {
      this.$store.commit("setStepLoading", true);
      this.setStepLoading(true);
      const students = {
        name: this.name,
        lastName: this.lastName,
        age: this.age,
        cpf: this.cpf,
      };
      await this.registerStudentss(students);
      this.setStepLoading(false);
    },
  },
};
</script>

<style lang="scss" scoped>
.students {
  padding: 20px;
  &__title {
    color: #454d6b;
    font-family: sans-serif;
    font-size: 24px;
    padding: 50px 0px;
  }
  &__form {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    &__campAlert {
      width: 30%;
      &__camp {
        width: 100%;
        height: 70px;
        color: #c0c0c0;
        border-bottom: 0.5px solid #c0c0c0;
        outline: 0;
      }
      p {
        color: red;
        margin-top: 5px;
        font-family: sans-serif;
        font-size: 13px;
        font-weight: bold;
      }
    }
  }
  &__button {
    margin-top: 20px;
    &__btn {
      width: 250px;
      height: 50px !important;
      background: hsla(0, 90%, 60%, 0.603) !important;
      color: #c0c0c0 !important;
      font-family: sans-serif;
    }
  }
}
</style>
