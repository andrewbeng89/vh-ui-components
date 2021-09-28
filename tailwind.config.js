module.exports = {
  prefix: "ce-",
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    inset: {
      0: 0,
      "1/2": "50%",
      full: "100%",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1600px",
    },
    extend: {
      outline: {
        blue: ["2px solid rgba(0, 62, 219, 0.5)", "2px"],
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        marketing: ["Futura", "sans-serif"],
      },
      spacing: {
        audioitemTitle: "442px",
        audioitemTags: "228px",
        half: "0.125rem", // 2px
        14: "3.5rem", //  "56px", text input height
      },
      duration: {
        0: "0ms",
      },
      colors: {
        transparent: "transparent",
        black: "#000",
        white: "#fff",
        // TODO: Limit to Lennarts Scale
        gray: {
          100: "#F5F5F5",
          200: "#EEEEEE",
          300: "#E3E3E3",
          400: "#BABABA",
          500: "#8C8C8C",
          600: "#7E7E7E",
          700: "#757575",
          800: "#4D4D4D",
          900: "#212121",
        },
        blue: {
          default: "#3A67E5",
          dark: "#0019A5",
        },
        red: {
          default: "#E53935",
          dark: "#AB000D",
        },
        pink: {
          default: "#F5138D",
          dark: "#BD0060",
        },
        purple: {
          default: "#8E24AA",
          dark: "#5C007A",
        },
        cyan: {
          default: "#00ACC1",
          dark: "#007C91",
        },
        teal: {
          default: "#00897B",
          dark: "#005B4F",
        },
        green: {
          default: "#30DF7B",
          dark: "#00AC4D",
        },
        yellow: {
          default: "#F9F500",
          dark: "#C1BE00",
        },
        orange: {
          default: "#FFB300",
          dark: "#C68400",
        },
        "alert-red": {
          default: "#F53000",
          dark: "#BA2400",
        },
        "alert-green": {
          default: "#00D200",
          dark: "#00AA00",
        },
      },
      opacity: {
        60: "0.6",
        20: "0.2",
      },
      boxShadow: {
        default: "0px 1px 1px rgba(0, 0, 0, 0.1)",
        negative: "0px -1px 1px rgba(0, 0, 0, 0.1)",
        md: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        lg: "0px 4px 6px rgba(0, 0, 0, 0.25)",
      },
      inset: {
        0: 0,
        auto: "auto",
        1: "0.25rem",
        3: "0.75rem",
        4: "1rem",
        16: "4rem",
      },
      screens: {
        print: { raw: "print" },
      },
    },
  },
  variants: {
    opacity: ["responsive", "hover", "focus", "group-hover"],
    outline: ["focus", "focus-visible"],
    display: ["responsive", "group-hover"],
    textColor: ["responsive", "hover", "focus", "group-hover", "group-focus"],
  },
  plugins: [],
};
