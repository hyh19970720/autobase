import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: "/login",
    },
    {
        path: "/login",
        component: () => import("@/views/login/Login.vue"),
    },
    {
        path: "/home",
        component: () => import("@/views/home/Home.vue"),
    },
];

export default routes;
