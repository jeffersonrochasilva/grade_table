export default {
  teste: () => {
    console.log("funcionou");
  },
  registerStudentss: () =>
    this.$http
      .post("usuarios.json", {
        nome: this.name,
        email: this.email,
      })
      .then((res) => {
        console.log(res);
        this.clear();
      })
      .catch((e) => {
        console.log(e);
      }),
};
