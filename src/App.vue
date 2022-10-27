<template>
  <div class="app">
    <Loading v-if="getStepLoading" />
    <router-view />
    <v-snackbar v-model="getSnackbarValue"
      ><p>{{ getSnackbarMessage }}</p></v-snackbar
    >
  </div>
</template>

<script>
import Loading from "@/components/commom/Loading.vue";
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "App",
  data: () => ({
    teste: true,
  }),
  components: {
    Loading,
  },
  mounted() {},
  computed: {
    ...mapGetters({
      getStepLoading: "getStepLoading",
      getSnackbarValue: "getSnackbarValue",
      getSnackbarMessage: "getSnackbarMessage",
    }),
    step() {
      return this.$store.state.general.stepLoading;
    },
  },
  methods: {
    ...mapActions({ setStep: "setStep" }),
  },
};
</script>

<style lang="scss" scoped>
.app {
  width: 100%;
  background: #fafafa;
  height: 100%;
  p {
    font-family: sans-serif;
  }
}
</style>
