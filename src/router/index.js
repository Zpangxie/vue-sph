import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Home from "../views/Home";
import Search from "../views/Search";
import Login from "../views/Login";
import Register from "../views/Register";

const router = new VueRouter({
  routes: [
    {
      path: "/home",
      component: Home,
      meta: { show: true },
    },
    {
      path: "/search",
      component: Search,
      meta: { show: true },
    },
    {
      path: "/login",
      component: Login,
      meta: { show: false },
    },
    {
      path: "/register",
      component: Register,
      meta: { show: false },
    },
    //重定向：在项目启动的时候，访问，立马让他定向到首页
    {
      path: "*",
      redirect: " /Home",
    },
  ],
});

export default router;
