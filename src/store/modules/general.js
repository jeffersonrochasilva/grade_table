import router from "@/router";

export default {
  state: {
    stepLoading: false,
    snackbarMessage: "",
    snackbarValue: false,
  },
  getters: {
    getStepLoading: (state) => state.stepLoading,
    getSnackbarValue: (state) => state.snackbarValue,
    getSnackbarMessage: (state) => state.snackbarMessage,
  },
  mutations: {
    setStepLoading(state, payload) {
      state.stepLoading = payload;
    },
    setSnackbarMessage(state, payload) {
      state.snackbarMessage = payload;
    },
    setSnackbarValue(state, payload) {
      state.snackbarValue = payload;
    },
  },
  actions: {
    setStep({ commit }, payload) {
      setTimeout(() => {
        commit("setStepLoading", payload);
        router.push("/home");
      }, 3000);
    },
    setStepss({ commit }, payload) {
      commit("setStepLoading", payload);
    },
    setSnackbar({ commit }, payload) {
      commit("setSnackbarValue", payload);
      setTimeout(() => {
        commit("setSnackbarValue", false);
      }, 5000);
    },
  },
};
