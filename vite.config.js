import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";

// alias path 를 만들어주는 콜백함수
const getAliasPath = (path) => {
  return fileURLToPath(new URL(path, import.meta.url));
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": getAliasPath("./src"),
      "@assets": getAliasPath("./src/assets"),
      "@components": getAliasPath("./src/components"),
      "@pages": getAliasPath("./src/pages"),
      "@recoil": getAliasPath("./src/recoil"),
      "@store": getAliasPath("./src/store"),
      "@zustand": getAliasPath("./src/zustand"),
      "@apis": getAliasPath("./src/apis"),
    },
  },
  // scss 전역 사용
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/styles/scss/main.scss";`,
      },
    },
  },
});
