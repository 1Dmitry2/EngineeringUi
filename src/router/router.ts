import {createRouter, createWebHashHistory} from "vue-router";
import Tanks from "../pages/Tanks.vue";
import Cargo from "../pages/Cargo.vue";
import Stocks from "../pages/Stocks.vue";
import Main from "../pages/Main.vue";

const routes = [
    {
        path:'/',
        component: Main
    },
    {
        path:'/guide',
        component: Tanks
    },
    {
        path:'/cargo',
        component: Cargo
    },
    {
        path:'/stocks',
        component: Stocks
    }
]


export const router = createRouter({
    history: createWebHashHistory(),
    routes : routes
})