import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [

    {
        path: "/",
        name: "Home",

        component: () =>
            import(/* webpackChunkName: "about" */ "../views/Home.vue"),
    },
    {
        path: "/404",
        name: "404Page",

        component: () =>
            import(/* webpackChunkName: "about" */ "../views/404Page.vue"),
    },
    {
        path: "/login",
        name: "Login",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/Login.vue"),
    },
    {
        path: "/register",
        name: "Register",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/Register.vue"),
    },
    {
        path: "/manage-account",
        name: "ManageAccount",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/ManageAccount.vue"),
    },
    {
        path: "/vehicle-statistics",
        name: "VehicleStatistics",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/VehicleStatistics.vue"),
    },
    {
        path: "/revenues",
        name: "Revenues",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/Revenues.vue"),
    },
    {
        path: "/salary",
        name: "Salary",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/Salary.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;