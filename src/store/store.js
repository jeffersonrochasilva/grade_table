import Vue from "vue";
import Vuex from "vuex";

import carrinho from "./modules/carrinho.js";
import general from "./modules/general";
import table from "./modules/table.js";
import students from "./modules/students.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    carrinho,
    general,
    table,
    students,
  },
});
