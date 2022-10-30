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
        <p v-if="campName">O maximo de caracteries são 20</p>
      </div>
      <div class="students__form__campAlert">
        <input
          class="students__form__campAlert__camp"
          type="text"
          v-model="lastName"
          placeholder="sobrenome"
        />
        <p v-if="campLastName">O maximo de caracteries são 32</p>
      </div>
      <div class="students__form__campAlert">
        <input
          class="students__form__campAlert__camp"
          type="Number"
          v-model="cpf"
          placeholder="cpf"
        />
        <p v-if="campCpf">O maximo de caracteries são 11</p>
      </div>
      <div class="students__form__campAlert">
        <input
          class="students__form__campAlert__camp"
          type="number"
          v-model="age"
          placeholder="Idade"
        />
        <p v-if="campAge">Valor invalido</p>
      </div>
    </div>
    <div class="students__button">
      <v-btn
        :disabled="disabledButton(name, lastName, cpf, age)"
        @click="regeisterStudents()"
        class="students__button__btn"
        >Cadastrar</v-btn
      >
    </div>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    name: "",
    lastName: "",
    age: "",
    cpf: "",
    campName: false,
    campLastName: false,
    campCpf: false,
    campAge: false,
  }),
  watch: {
    name() {
      if (this.name.length > 20) {
        this.campName = true;
        return;
      }
    },
    lastName() {
      if (this.lastName.length > 20) {
        this.campLastName = true;
        return;
      }
    },
  },
  methods: {
    ...mapActions({
      registerStudentss: "registerStudentss",
      setStepss: "setStepss",
    }),
    disabledButton(name, lastName, cpf, age) {
      if (name.length > 0 && lastName.length > 0 && cpf > 0 && age > 0) {
        return false;
      } else {
        return true;
      }
    },
    async regeisterStudents() {
      await this.setStepss(true);

      await this.registerStudentss({
        name: this.name,
        lastName: this.lastName,
        age: this.age,
        cpf: this.cpf,
      });
      setTimeout(async () => {
        await this.setStepss(false);
      }, 3000);

      (this.name = ""), (this.lastName = ""), (this.cpf = 0), (this.age = 0);
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
