import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";
import store from "./stores";
import App from "./App.vue";
import SvgIcon from "@/components/SvgIcon.vue";

import "./styles/index.scss";
// import "virtual:svg-icons-register";

const router = createRouter({
    routes,
    history: createWebHashHistory(),
});

createApp(App).use(router).use(store).component("svg-icon", SvgIcon).mount("#app");
