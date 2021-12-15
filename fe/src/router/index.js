import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/Home.vue"),
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
