import { createStore } from "vuex";

const globalStore = createStore({
    state: {
        copyright: "coderhyh",
        userInfo: {
            userName: "BumbleBee",
            avatar: "",
        },
    },
});

export default globalStore;
