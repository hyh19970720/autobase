import { createStore } from "vuex";
import globalStore from "./globalStore";

const store = createStore({
    modules: {
        globalStore,
    },
});

export default store;
