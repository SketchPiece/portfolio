/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#181818",
        "soft-gray": "#f5f7fa",
        "dock-gray": "#232629",
        "editor-gray": "#202020",
        "primary-blue": "#0078D3",
        "tan-gold": "#D6BA7D",
        "inactive-gray": "#8C8C8C",
        faint: "#2A2A2A",
        stale: "#CCCCCC",
      },
    },
  },
  plugins: [],
};
