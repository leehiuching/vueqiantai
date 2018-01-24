import Vue from 'vue'
import Router from 'vue-router'
import beforeEach from "./beforeEach.js";
import Login from "../components/login/Login.vue";
import Store from "@/components/store/Store.vue";
import GoodsList from "../components/store/goods/List.vue";
import GoodsDetail from "../components/store/goods/Detail.vue";
import Shopcart from "../components/store/shopcart/Shopcart.vue";
import OrderCommit from "../components/store/order/Commit.vue";
import OrderPay from "../components/store/order/Pay.vue";
import OrderComplete from '@/components/store/order/Complete';
import Pay from "@/components/store/pay/Pay";


Vue.use(Router)
let router = new Router({
  routes: [
    {name: "login",path: "/login",component: Login},
    {name: "store",path: "/",component: Store,children:[
      {name: "goodsList",path: "goods/list",component: GoodsList},
      {name: "goodsDetail",path: "goods/detail/:id",component: GoodsDetail},
      {name: "shopcart",path: "shopcart",component: Shopcart},
      {name: "orderCommit",path: "order/commit/:ids",component: OrderCommit},
      {name: 'orderPay', path: 'order/pay/:id', component: OrderPay },
      {name: 'orderComplete', path: 'order/complete', component: OrderComplete }
    ]},
    { name: 'pay', path: '/pay/:id/:price', component: Pay }    
  ]
})
router.beforeEach(beforeEach);
export default router;
