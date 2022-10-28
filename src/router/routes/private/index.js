import Home from "@/pages/private/Home.vue";
import Table from "@/pages/private/Table.vue";
import CardsDirection from "@/pages/private/CardsDirection.vue";

const routes = [
  {
    path: "/home",
    component: Home,
    name: "home",
    children: [
      { path: "", name: "cardsdirection", component: CardsDirection },
      { path: "/home/table", name: "table", component: Table },
    ],
  },
];

export default routes;
