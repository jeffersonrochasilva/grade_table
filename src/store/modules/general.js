import router from "@/router";

export default {
  state: {
    stepLoading: false,
    stepSelect: 0,
    snackbarMessage: "",
    snackbarValue: false,
  },
  getters: {
    getStepLoading: (state) => state.stepLoading,
    getStepSelect: (state) => state.stepSelect,
    getSnackbarValue: (state) => state.snackbarValue,
    getSnackbarMessage: (state) => state.snackbarMessage,
  },
  mutations: {
    setStepLoading(state, payload) {
      state.stepLoading = payload;
    },
    setStepSelect(state, payload) {
      state.stepSelect = payload;
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
