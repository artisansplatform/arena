import { defineConfig } from "vite";
import handlebars from "vite-plugin-handlebars";
import path from "path";
import { glob } from "glob";

const htmlFiles = glob.sync("*.html", { cwd: import.meta.dirname });
const input = {};
htmlFiles.forEach((file) => {
  const name = file.replace(".html", "");
  input[name] = path.resolve(import.meta.dirname, file);
});

input["main"] = path.resolve(import.meta.dirname, "assets/script/main.js");

export default defineConfig({
  plugins: [
    handlebars({
      partialDirectory: path.resolve(import.meta.dirname, "partials"),
    }),
  ],
  build: {
    outDir: "dist",
    rollupOptions: {
      input,
      output: {
        entryFileNames: "assets/[name].[hash].js",
        chunkFileNames: "assets/[name].[hash].js",
      },
    },
  },
  server: {
    port: 3000,
    open: true,
    watch: {
      usePolling: true,
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    exclude: ["**/node_modules/**", "**/dist/**"],
  },
});
