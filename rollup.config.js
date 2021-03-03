import postcss from "rollup-plugin-postcss";
import postcssImport from "postcss-import";
import tailwind from "tailwindcss";
import replace from "@rollup/plugin-replace";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import copy from "rollup-plugin-copy";

const outputDir = process.env.NODE_ENV === "dev" ? "./dev" : "./dist";

export default [
  {
    input: "src/index.js",
    output: {
      dir: outputDir,
      sourcemap: true,
      format: "esm",
    },
    plugins: [
      postcss({
        plugins: [tailwind(), postcssImport()],
        module: false,
        minimize: true,
      }),
      replace({
        "process.env.NODE_ENV": JSON.stringify("production"),
      }),
      copy({
        targets: [
          {
            src: "./src/index.html",
            dest: outputDir,
          },
        ],
      }),
      nodeResolve(),
      terser(),
    ],
  },
];
