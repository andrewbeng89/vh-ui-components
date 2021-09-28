const path = require("path");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss",
    "@storybook/addon-a11y"
  ],
  webpackFinal: async config => {
    // Remove the existing css rule
    config.module.rules = config.module.rules.filter(
      f => f.test !== /\\.css$/
    );

    config.module.rules.push({
      test: /\.css$/,
      loaders: ["style-loader", "css-loader", "postcss-loader"],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },
};
