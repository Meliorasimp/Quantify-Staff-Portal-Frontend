import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import graphqlLoader from "vite-plugin-graphql-loader";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), graphqlLoader()],
  server: {
    proxy: {
      // Proxy API requests to the backend
      "/api": {
        target: "https://localhost:7009", // Your API port from launchSettings
        changeOrigin: true,
        secure: false,
      },
      // Proxy GraphQL requests to the backend
      "/graphql": {
        target: "https://localhost:7009",
        changeOrigin: true,
        secure: false,
        ws: true, // Enable WebSocket proxying for GraphQL subscriptions
      },
    },
  },
});
