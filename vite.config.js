import { resolve } from "path";
import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, "partials"),
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        "play/selection": resolve(__dirname, "play", "selection.html"),
        "user/sign-in": resolve(__dirname, "user", "sign-in.html"),
        "user/register": resolve(__dirname, "user", "register.html"),
      },
    },
  },
});
