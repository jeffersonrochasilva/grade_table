import Home from "@/pages/private/Home.vue";
import Table from "@/pages/private/Table.vue";
import CardsDirection from "@/pages/private/CardsDirection.vue";
import Students from "@/pages/private/Registers/Students.vue";
import Port from "@/pages/private/Registers/Port.vue";
import Janitor from "@/pages/private/Registers/Janitor.vue";
import RegisterBag from "@/pages/private/Registers/bags/RegisterBag.vue";
import Dispensa from "@/pages/private/Dispensa.vue";
import Slider from "@/pages/private/Slider.vue";

const routes = [
  {
    path: "/home",
    component: Home,
    name: "home",
    children: [
      { path: "", name: "cardsdirection", component: CardsDirection },
      { path: "/home/table", name: "table", component: Table },
      { path: "/home/students", name: "students", component: Students },
      { path: "/home/port", name: "port", component: Port },
      { path: "/home.janitor", name: "janitor", component: Janitor },
      {
        path: "/home/register-bag",
        name: "register-bag",
        component: RegisterBag,
      },
      { path: "/home/dispensa", name: "dispensa", component: Dispensa },
      { path: "/home/slider", name: "slider", component: Slider },
    ],
  },
];

export default routes;
