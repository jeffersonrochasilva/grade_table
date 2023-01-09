<template>
  <div>
    <v-card class="students">
      <span class="students__title">Cadastro de Faxineiro</span>
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
            type="text"
            v-model="age"
            placeholder="Digite sua idade"
          />
          <p v-if="campAge">Valor invalido</p>
        </div>
        <div class="students__form__campAlert">
          <input
            class="students__form__campAlert__camp"
            type="text"
            v-model="cpf"
            placeholder="cpf"
          />
          <p v-if="campCpf">O maximo de caracteries são 11</p>
        </div>
      </div>
      <div class="students__button">
        <v-btn
          :disabled="disabledButton(name, lastName, cpf)"
          @click="regeisterStudents()"
          class="students__button__btn"
          >Cadastrar</v-btn
        >
      </div>
    </v-card>
    <v-card class="table">
      <TabelaFaxineiro :faxineiros="faxineiros" @editUser="chackbox = $event" />
    </v-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import TabelaFaxineiro from "@/components/TabelaFaxineiro/index.vue";
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
    email: "",
    faxineiros: [],
    chackbox: null,
    id: "",
  }),
  components: {
    TabelaFaxineiro,
  },
  mounted() {
    this.getFaxineiros();
  },
  watch: {
    chackbox() {
      if (this.chackbox) {
        this.name = this.chackbox.name;
        this.cpf = this.chackbox.cpf;
        this.lastName = this.chackbox.lastName;
        this.age = this.chackbox.age;
        this.id = this.chackbox.id;
      }
    },
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

    getFaxineiros() {
      this.$http
        .get("faxineiros.json")
        .then((resposta) => {
          console.log(resposta.data);
          this.faxineiros = resposta.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    disabledButton(name, lastName, cpf, age) {
      if (name.length > 0 && lastName.length > 0 && cpf.length > 0) {
        return false;
      } else {
        return true;
      }
    },
    async regeisterStudents() {
      await this.setStepss(true);
      const methods = this.id ? "patch" : "post";
      const lastJson = this.id ? `/${this.id}.json` : ".json";
      await this.$http[methods](`faxineiros${lastJson}`, {
        name: this.name,
        lastName: this.lastName,
        age: this.age,
        cpf: this.cpf,
      })
        .then(() => {
          this.setStepss(false);
          this.clear();
          this.getFaxineiros();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    clear() {
      this.name = "";
      this.lastName = "";
      this.cpf = "";
      this.age = "";
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
.table {
  margin-top: 25px;
  padding: 15px;
}
</style>
