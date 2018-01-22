import date from "./date";

export default {
    // 在install方法中对vue原型进行扩展
    install(vue){
        vue.filter('date',date);
    }
}