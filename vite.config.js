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
        proxy: {
            "/api/": {
                target: "http://172.18.23.25:9999",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ""),
            },
        },
    },
});
