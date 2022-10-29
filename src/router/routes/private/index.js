import Home from "@/pages/private/Home.vue";
import Table from "@/pages/private/Table.vue";
import CardsDirection from "@/pages/private/CardsDirection.vue";
import Students from "@/pages/private/Registers/Students.vue";

const routes = [
  {
    path: "/home",
    component: Home,
    name: "home",
    children: [
      { path: "", name: "cardsdirection", component: CardsDirection },
      { path: "/home/table", name: "table", component: Table },
      { path: "/students", name: "students", component: Students },
    ],
  },
];

export default routes;
