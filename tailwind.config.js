/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      width: {
        half: "50%",
        51: "51%",
      },

      boxShadow: {
        imgShadow: "0px 13px 14px 0px rgba(0, 0, 0, 0.4)",
        imgShadowTwo: "-10px 13px 14px 0px rgba(0, 0, 0, 0.4)",
        insetShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset",
        descriptionTextShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        buttonShadow: " 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        bgTextGrey: "#00000014",
        bgRed: "#b71f18",
        insetBgColor: "rgba(217, 217, 217, 0.2",
      },
    },
  },
  plugins: [],
};
