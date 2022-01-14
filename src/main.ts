import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";
import store from "./stores";
import App from "./App.vue";
import SvgIcon from "@/components/SvgIcon.vue";
import axios from "axios";

import "./styles/index.scss";

if (process.env.NODE_ENV === "development") {
    axios.defaults.baseURL = "./api";
} else if (process.env.NODE_ENV === "production") {
}

const router = createRouter({
    routes,
    history: createWebHashHistory(),
});

createApp(App).use(router).use(store).component("svg-icon", SvgIcon).mount("#app");
