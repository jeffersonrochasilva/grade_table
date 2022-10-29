export default {
  state: {
    students: [],
  },
  mutations: {
    registerStudents(state, payload) {
      state.students.push(payload);
      console.log(state.students, "students");
    },
  },
  actions: {
    registerStudentss({ commit }, psyload) {
      setTimeout(() => {
        commit("registerStudents", psyload);
        console.log(students, "students");
      }, 2000);
    },
  },
};
