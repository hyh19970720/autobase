import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { svgBuilder } from "./src/plugins/svgBuilder";
const { resolve } = require("path");

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), svgBuilder("./src/icons/svg/")],
    resolve: {
        alias: {
            "@": resolve(__dirname, "src"),
        },
    },
    define: {
        process: { env: {} },
    },
    server: {
        port: 8888,
    },
});
