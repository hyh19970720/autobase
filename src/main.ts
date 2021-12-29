import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";
import store from "./stores";
import App from "./App.vue";

import "./styles/index.scss";

const router = createRouter({
    routes,
    history: createWebHashHistory(),
});

createApp(App).use(router).use(store).mount("#app");