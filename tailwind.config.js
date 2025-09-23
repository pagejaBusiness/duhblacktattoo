/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#0B0B0F", // fundo principal quase preto
          lighter: "#1A1A1F", // cards / elementos destacados
        },
        purple: {
          DEFAULT: "#7C3AED", // roxo principal (vibrante e moderno)
          light: "#9F67FF", // hover e destaques
          dark: "#5B21B6", // para botões ou títulos mais fortes
        },
        white: {
          DEFAULT: "#F9FAFB", // branco suave para não cansar
          pure: "#FFFFFF", // branco puro para textos importantes
        },
        gray: {
          DEFAULT: "#9CA3AF", // cinza médio (textos secundários)
          dark: "#6B7280", // cinza mais escuro para balancear
        },
      },
      fontFamily: {
        cloister: ["CloisterBlack", "serif"],
      },
    },
  },
  plugins: [],
};
