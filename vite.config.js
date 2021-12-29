import { defineConfig } from "vite"; // 帮手函数 这样不用 jsdoc 注解也可以获取类型提示
import vue from "@vitejs/plugin-vue";
const { resolve } = require("path");

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
    server: {
        port: 8888,
    },
});
