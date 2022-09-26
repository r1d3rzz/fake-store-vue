import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CategoryView from "../views/CategoryView.vue";
import ItemDetail from "../views/ItemDetail.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/items/:category",
    name: "category",
    component: CategoryView,
    props: true,
  },
  {
    path: "/item/:id",
    name: "itemDetail",
    component: ItemDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
