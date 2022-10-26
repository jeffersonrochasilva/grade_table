export default {
  SET_API_CALL_IN_PROGRESS: (state, value) => {
    state.isAPICallInProgress = value;
  },
  SET_GENERAL_ERRORS: (state, error) => {
    state.generalErros.push(error);
  },
};
