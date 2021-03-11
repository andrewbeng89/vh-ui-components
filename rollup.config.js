import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import postcssImport from "postcss-import";
import tailwind from "tailwindcss";
import replace from "@rollup/plugin-replace";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import copy from "rollup-plugin-copy";
import fg from "fast-glob";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import minifyHTML from "rollup-plugin-minify-html-literals";

const outputDir = process.env.NODE_ENV === "dev" ? "./dev" : "./dist";
const outputCJS =
  process.env.NODE_ENV === "dev" ? "dev/index.cjs.js" : "dist/index.cjs.js";
const outputESM =
  process.env.NODE_ENV === "dev" ? "dev/index.esm.js" : "dist/index.esm.js";

export default [
  {
    input: "src/index.js",
    output: [
      {
        file: outputCJS,
        sourcemap: true,
        format: "cjs",
      },
      {
        file: outputESM,
        sourcemap: true,
        format: "esm",
      },
    ],
    plugins: [
      {
        name: "watch-external",
        async buildStart() {
          const files = await fg("src/**/*");
          files.forEach((file) => {
            this.addWatchFile(file);
          });
        },
      },
      commonjs(),
      minifyHTML(),
      postcss({
        plugins: [tailwind(), postcssImport()],
        module: false,
        minimize: true,
        inject: false,
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
          {
            src: "./src/fonts/**/*",
            dest: `${outputDir}/fonts`,
          },
        ],
      }),
      nodeResolve(),
      terser(),
      ...(process.env.NODE_ENV === "production"
        ? []
        : [serve("dev"), livereload("dev")]),
    ],
  },
];
