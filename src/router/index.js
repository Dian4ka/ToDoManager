import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import TaskDetailsView from "../views/TaskDetailsView.vue";
import AboutView from "@/views/AboutView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  {
    path: "/task/:id",
    name: "TaskDetails",
    component: TaskDetailsView,
    props: true,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
