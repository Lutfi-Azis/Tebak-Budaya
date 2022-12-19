import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        "play/selection": resolve(__dirname, "play", "play/selection.html"),
      },
    },
  },
});
