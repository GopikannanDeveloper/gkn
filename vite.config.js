import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        navigateFallback: "/index.html",

        navigateFallbackDenylist: [
          /\.pdf$/,
          /\.png$/,
          /\.jpg$/,
          /\.jpeg$/,
          /\.svg$/,
        ],
      },
      includeAssets: ["favicon.svg", "apple-touch-icon.png"],
      manifest: {
        name: "My Portfolio - GKN",
        short_name: "My Portfolio",
        description: "My React PWA App",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            purpose: "maskable",
            sizes: "48x48",
            src: "maskable_icon_x48.png",
            type: "image/png",
          },
          {
            purpose: "maskable",
            sizes: "192x192",
            src: "maskable_icon_x192.png",
            type: "image/png",
          },
          {
            purpose: "maskable",
            src: "maskable_icon_x384.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
