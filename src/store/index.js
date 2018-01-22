 import Vue from "vue";
 export default {
     state: {
         shopping: {87: 24, 88: 275}
     },
     getters: {
         shoppingSum(state){
             return Object.values(state.shopping).reduce((sum,v)=>sum+v,0);
         }
     },
    //  添加购物车
     mutations: {
        modifyShopping(state,{id,count}){
            Vue.set(state.shopping,id,count);
        }
     }
 }