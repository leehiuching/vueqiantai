 import Vue from "vue";
 export default {
     state: {
         shopping: JSON.parse(localStorage.getItem('shopping')) || {}
     },
     getters: {
         shoppingSum(state){
             return Object.values(state.shopping).reduce((sum,v)=>sum+v,0);
         },
         shoppingIds(state){
             return Object.keys(state.shopping).join(',');
         }
     },
    //  添加购物车
     mutations: {
        modifyShopping(state,{id,count}){
            Vue.set(state.shopping,id,count);
            localStorage.setItem('shopping',JSON.stringify(state.shopping));
        },
        delShopping(state,id){
            Vue.delete(state.shopping,id);
            localStorage.setItem('shopping',JSON.stringify(state.shopping));
        }
     }
 }