<template>
  <div class="filter">
    <v-row>
      <v-col md="7">
        <v-autocomplete
          label="Tipo Endereço"
          :items="items"
          outlined
          dense
          filled
          v-model="value"
          hide-details
        ></v-autocomplete>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: ["foo", "bar", "fizz", "buzz"],
    values: ["foo", "bar"],
    value: null,
  }),
  computed: {
    getAlunos() {
      return this.$store.state.table.params;
    },
  },

  methods: {
    filterStudents() {
      const Alunos = this.getAlunos().map((item) => {
        return item.name;
      });
      console.log(alunos, "alunos");
    },
  },
};
</script>

<style lang="scss" scoped>
.filter {
  width: 100%;
  height: 101px;
  border-bottom: 0.5px solid #dcdcdc;
  background: #fff;
  padding: 10px 65px;
}
</style>
