<template>
  <div class="login">
    <div class="login__content">
      <span class="login__content__title">Login</span>
      <input
        class="login__content__camp"
        v-model="email"
        placeholder="Digite seu E-mail"
        type="email"
        @keyup.enter="login()"
      />
      <p v-if="validateEmail" class="login__content__alert">
        Digite um E-mail valido.
      </p>
      <div class="login__content__boxCamp">
        <input
          class="login__content__boxCamp__camp"
          v-model="password"
          placeholder="Digite seu senha"
          :type="typePassword"
          @keyup.enter="login()"
        />
        <v-icon @click="activitSee()" class="login__content__boxCamp__icon"
          >mdi-{{ icon }}</v-icon
        >
      </div>

      <v-btn
        @click="login()"
        color="hsla(0, 90%, 60%, 0.603)"
        class="login__content__btn"
        >Login</v-btn
      >
      <p class="login__content__password">Equeceu a senha?</p>
    </div>
  </div>
</template>

<script>
import user from "@/utils/parms/user";
import { mapActions, mapMutations } from "vuex";
export default {
  data: () => ({
    email: "",
    password: "",
    otherEmail: "",
    otherPassword: "",
    icon: "eye",
    typePassword: "password",
    validateEmail: false,
  }),
  mounted() {
    this.otherEmail = this.$store.state.carrinho.email;
    this.otherPassword = this.$store.state.carrinho.password;
  },
  watch: {
    email() {
      const res = this.email.slice(this.email.indexOf("@"));
      if (this.email.length === 0) {
        this.validateEmail = false;
      } else if (this.email.length < 18) {
        this.validateEmail = true;
      } else if (res.length > 9) {
        this.validateEmail = false;
      } else {
        this.validateEmail = true;
      }
    },
  },
  methods: {
    ...mapMutations({
      setSnackbarMessage: "setSnackbarMessage",
      setSnackbarValue: "setSnackbarValue",
    }),
    ...mapActions({ setStep: "setStep", setSnackbar: "setSnackbar" }),
    login() {
      if (
        this.otherEmail === this.email &&
        this.otherPassword === this.password
      ) {
        this.$store.commit("setStepLoading", true);
        this.setStep(false);
      } else {
        this.setSnackbarMessage("usuári invalido !");
        this.setSnackbar(true);
      }
    },
    activitSee() {
      if (this.icon === "eye-off") {
        this.icon = "eye";
        this.typePassword = "password";
      } else {
        this.icon = "eye-off";
        this.typePassword = "text";
      }
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  // background: #454d6b;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__content {
    width: 450px;
    height: 400px;
    // background: #353b50;
    background: rgb(211, 209, 209);
    border-radius: 4px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    &__title {
      width: 28%;
      font-size: 42px;
      margin-top: 25px;
      margin-bottom: 25px;
      font-family: sans-serif;
      color: #000;
      // border-bottom: 1px solid #c0c0c0;
    }
    &__alert {
      font-family: sans-serif;
      font-size: 15px;
      color: hsla(0, 90%, 60%, 0.603);
    }
    &__camp {
      width: 100%;
      height: 54px;
      color: #c0c0c0;
      border-bottom: 0.5px solid #c0c0c0;
      outline: 0;
    }
    &__boxCamp {
      position: relative;

      &__camp {
        width: 100%;
        height: 54px;
        color: #c0c0c0;
        border-bottom: 0.5px solid #c0c0c0;
        outline: 0;
      }
      &__icon {
        position: absolute;
        top: 50%;
        right: 10px;
        color: #c0c0c0;
        transform: translateY(-50%);
      }
    }

    &__btn {
      width: 100%;
      height: 54px !important;
      background: #1ca11c !important;
      color: #c0c0c0;
      font-family: sans-serif;
    }
    &__password {
      text-align: center;
      color: #000;
      font-family: sans-serif;
      cursor: pointer;
    }
  }
}
</style>
