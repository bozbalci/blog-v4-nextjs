const colors = require("tailwindcss/colors");

const shades = [100, 200, 300, 400, 500, 600, 700, 800, 900];

module.exports = {
  purge: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    boxShadow: (theme) => ({
      black: "4px 4px 0 0 black",
      white: "4px 4px 0 0 white",

      ...["primary", "secondary", "gray"].reduce(
        (obj2, color) => ({
          ...obj2,
          ...shades.reduce(
            (obj, shade) => ({
              ...obj,
              [`${color}-${shade}`]: `4px 4px 0 0 ${theme(
                `colors.${color}.${shade}`
              )}`,
            }),
            {}
          ),
        }),
        {}
      ),

      none: "none",
    }),

    extend: {
      spacing: {
        2.25: "0.5625rem",
        128: "32rem",
      },
      colors: {
        primary: {
          ...colors.trueGray,
          // 950: "#340562",
          // 1000: "#0D0119",
        },
        secondary: colors.trueGray,
        gray: colors.trueGray,
        // gray: colors.teal,
      },
      minHeight: {
        "1/2-screen": "50vh",
      },
      width: {
        "9/10": "90%",
      },
      fontFamily: {
        // sans: ["Oxygen", "sans-serif"],
        // serif: "Playfair Display, serif",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: [
            // {
            //   h1: {
            //     fontFamily: theme("fontFamily.serif"),
            //     fontWeight: 400,
            //   },
            //   h2: {
            //     fontFamily: theme("fontFamily.serif"),
            //     fontWeight: 400,
            //   },
            //   h3: {
            //     fontFamily: theme("fontFamily.serif"),
            //     fontWeight: 400,
            //   },
            // },
          ],
        },
        light: {
          css: [
            {
              color: theme("colors.gray.400"),
              '[class~="lead"]': {
                color: theme("colors.gray.300"),
              },
              a: {
                color: theme("colors.white"),
              },
              strong: {
                color: theme("colors.white"),
              },
              "ol > li::before": {
                color: theme("colors.gray.400"),
              },
              "ul > li::before": {
                backgroundColor: theme("colors.gray.600"),
              },
              hr: {
                borderColor: theme("colors.gray.200"),
              },
              blockquote: {
                color: theme("colors.gray.200"),
                borderLeftColor: theme("colors.gray.600"),
              },
              h1: {
                color: theme("colors.white"),
              },
              h2: {
                color: theme("colors.white"),
              },
              h3: {
                color: theme("colors.white"),
              },
              h4: {
                color: theme("colors.white"),
              },
              "figure figcaption": {
                color: theme("colors.gray.400"),
              },
              code: {
                color: theme("colors.white"),
              },
              "a code": {
                color: theme("colors.white"),
              },
              pre: {
                color: theme("colors.gray.200"),
                backgroundColor: theme("colors.gray.800"),
              },
              thead: {
                color: theme("colors.white"),
                borderBottomColor: theme("colors.gray.400"),
              },
              "tbody tr": {
                borderBottomColor: theme("colors.gray.600"),
              },
            },
          ],
        },
      }),
    },
  },
  variants: {
    extend: {
      boxShadow: ["dark"],
      typography: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
