import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import HelloWorld from "../components/HelloWorld";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/hello",
    name: "hello",
    component: HelloWorld
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
