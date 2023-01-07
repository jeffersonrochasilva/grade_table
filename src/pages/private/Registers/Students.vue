<template>
  <div>
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
            placeholder="Digite seu sobrenome"
          />
          <p v-if="campAge">Valor invalido</p>
        </div>
        <div class="students__form__campAlert">
          <input
            class="students__form__campAlert__camp"
            type="text"
            v-model="email"
            placeholder="email"
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
      </div>
      <div class="students__button">
        <v-btn
          :disabled="disabledButton(name, email, cpf, lastName)"
          @click="regeisterStudents()"
          class="students__button__btn"
          >Cadastrar</v-btn
        >
      </div>
    </v-card>
    <v-card class="component">
      <div class="component__students">
        <TableStudents
          @editUser="studentsComponent = $event"
          :students="students"
        />
      </div>
    </v-card>
  </div>
</template>

<script>
import TableStudents from "@/components/TableStudents/index.vue";
import { mapActions } from "vuex";
import { request } from "../../../utils/request";
export default {
  components: {
    TableStudents,
  },
  data: () => ({
    name: "",
    email: "",
    age: "",
    cpf: "",
    lastName: "",
    campName: false,
    campLastName: false,
    campCpf: false,
    campAge: false,
    students: [],
    studentsComponent: {},
  }),
  mounted() {
    this.getDataStudents();
  },
  watch: {
    studentsComponent() {
      if (this.studentsComponent.id) {
        this.name = this.studentsComponent.nome;
        this.email = this.studentsComponent.email;
      } else {
        this.getDataStudents();
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
    async getDataStudents() {
      await this.$http
        .get("usuarios.json")
        .then((response) => {
          this.students = response.data;
          console.log("sucesso");
        })
        .catch((e) => console.log(e));
    },
    disabledButton(name, email) {
      if (name.length > 0 && email.length > 0) {
        return false;
      } else {
        return true;
      }
    },
    clear() {
      this.name = "";
      this.lastName = "";
      this.cpf = 0;
      this.age = 0;
    },
    async regeisterStudents() {
      await this.setStepss(true);
      const lastURL = this.studentsComponent.id
        ? `/${this.studentsComponent.id}.json`
        : ".json";
      const methods = this.studentsComponent.id ? "patch" : "post";
      await this.$http[methods](`usuarios${lastURL}`, {
        nome: this.name,
        email: this.email,
      })
        .then((res) => {
          console.log(res);
          this.clear();
          this.getDataStudents();
        })
        .catch((e) => {
          console.log(e);
        });
      await this.setStepss(false);
    },
  },
};
</script>

<style lang="scss" scoped>
.students {
  padding: 20px;
  margin-bottom: 30px;
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
      background: #1ca11c !important;
      color: #fff !important;
      font-family: sans-serif;
    }
  }
}
.component {
  &__students {
    padding: 25px;
  }
}
</style>
