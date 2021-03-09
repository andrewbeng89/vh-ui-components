module.exports = {
  prefix: "ce-",
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
       black: "#000",
      white: "#fff",
       gray: {
        100: "#f7fafc",
        200: "#edf2f7",
        300: "#e2e8f0",
        400: "#cbd5e0",
        500: "#a0aec0",
        600: "#718096",
        700: "#4a5568",
        800: "#2d3748",
        900: "#1a202c"
      },
      red: {
        100: "#fff5f5",
        200: "#fed7d7",
        300: "#feb2b2",
        400: "#fc8181",
        500: "#f56565",
        600: "#e53e3e",
        700: "#c53030",
        800: "#9b2c2c",
        900: "#742a2a"
      },
      orange: {
        100: "#fffaf0",
        200: "#feebc8",
        300: "#fbd38d",
        400: "#f6ad55",
        500: "#ed8936",
        600: "#dd6b20",
        700: "#c05621",
        800: "#9c4221",
        900: "#7b341e"
      },
      yellow: {
        100: "#fffff0",
        200: "#fefcbf",
        300: "#faf089",
        400: "#f6e05e",
        500: "#ecc94b",
        600: "#d69e2e",
        700: "#b7791f",
        800: "#975a16",
        900: "#744210"
      },
      green: {
        100: "#f0fff4",
        200: "#c6f6d5",
        300: "#9ae6b4",
        400: "#68d391",
        500: "#48bb78",
        600: "#38a169",
        700: "#2f855a",
        800: "#276749",
        900: "#22543d"
      },
      teal: {
        100: "#e6fffa",
        200: "#b2f5ea",
        300: "#81e6d9",
        400: "#4fd1c5",
        500: "#38b2ac",
        600: "#319795",
        700: "#2c7a7b",
        800: "#285e61",
        900: "#234e52"
      },
      blue: {
        100: "#ebf8ff",
        200: "#bee3f8",
        300: "#90cdf4",
        400: "#63b3ed",
        500: "#4299e1",
        600: "#3182ce",
        700: "#2b6cb0",
        800: "#2c5282",
        900: "#2a4365"
      },
      indigo: {
        100: "#ebf4ff",
        200: "#c3dafe",
        300: "#a3bffa",
        400: "#7f9cf5",
        500: "#667eea",
        600: "#5a67d8",
        700: "#4c51bf",
        800: "#434190",
        900: "#3c366b"
      },
      purple: {
        100: "#faf5ff",
        200: "#e9d8fd",
        300: "#d6bcfa",
        400: "#b794f4",
        500: "#9f7aea",
        600: "#805ad5",
        700: "#6b46c1",
        800: "#553c9a",
        900: "#44337a"
      },
      pink: {
        100: "#fff5f7",
        200: "#fed7e2",
        300: "#fbb6ce",
        400: "#f687b3",
        500: "#ed64a6",
        600: "#d53f8c",
        700: "#b83280",
        800: "#97266d",
        900: "#702459"
      }
    },
    extend: {
      colors: {
        transparent: "transparent",
        black: "#000",
        white: "#fff",
        // TODO: Limit to Lennarts Scale
        gray: {
          "100": "#F5F5F5",
          "200": "#EEEEEE",
          "300": "#E3E3E3",
          "400": "#BABABA",
          "500": "#8C8C8C",
          "600": "#7E7E7E",
          "700": "#757575",
          "800": "#4D4D4D",
          "900": "#212121"
        },
        blue: {
          default: "#3A67E5",
          dark: "#0019A5"
        },
        red: {
          default: "#E53935",
          dark: "#AB000D"
        },
        pink: {
          default: "#F5138D",
          dark: "#BD0060"
        },
        purple: {
          default: "#8E24AA",
          dark: "#5C007A"
        },
        cyan: {
          default: "#00ACC1",
          dark: "#007C91"
        },
        teal: {
          default: "#00897B",
          dark: "#005B4F"
        },
        green: {
          default: "#30DF7B",
          dark: "#00AC4D"
        },
        yellow: {
          default: "#F9F500",
          dark: "#C1BE00"
        },
        orange: {
          default: "#FFB300",
          dark: "#C68400"
        },
        "alert-red": {
          default: "#F53000",
          dark: "#BA2400"
        },
        "alert-green": {
          default: "#00D200",
          dark: "#00AA00"
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
