import Vue from 'vue'
import Router from 'vue-router'
import beforeEach from "./beforeEach.js";
import Login from "@/components/login/Login.js";

Vue.use(Router)
let router = new Router({
  routes: [
    {name: "login",path: "/login",component: Login}
  ]
})
router.beforeEach(beforeEach);
export default router
