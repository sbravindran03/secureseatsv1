/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        steelblue: {
          "100": "#4896d8",
          "200": "#008cbd",
          "300": "rgba(0, 140, 189, 0.09)",
        },
        "shades-white": "#fff",
        "neutral-100": "#e7eaee",
        "neutral-500": "#64748b",
        darkslategray: "#12485a",
        lightgray: "#cfd1d4",
        "neutral-800": "#191d23",
        "neutral-200": "#d0d5dd",
        khaki: {
          "100": "#ffde7c",
          "200": "#f2e070",
        },
        deepskyblue: "#31c0f0",
        seagreen: "#047857",
        gray: "rgba(255, 255, 255, 0.2)",
        gainsboro: {
          "100": "rgba(230, 230, 230, 0.2)",
          "200": "rgba(230, 230, 230, 0.09)",
        },
      },
      spacing: {},
      fontFamily: {
        manrope: "Manrope",
        inter: "Inter",
      },
      borderRadius: {
        "80xl-6": "99.6px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      mini: "15px",
      "smi-9": "12.9px",
      "12xl-3": "31.3px",
      lgi: "19px",
      "6xl": "25px",
      inherit: "inherit",
    },
    screens: {
      mq925: {
        raw: "screen and (max-width: 925px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
