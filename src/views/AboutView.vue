<template>
  <div class="about">
    <h1>Abount page here</h1>
    <h3>{{ name }}</h3>
    <a href="/">Home about</a>
  </div>
</template>

<script>
import params from "../utils/parms/index";
export default {
  data: () => ({
    name: "",
  }),
  mounted() {
    console.log(params);
    this.chamarName();
  },
  methods: {
    chamarName() {
      const myName = params;
      this.name = myName;
    },
  },
};
</script>
