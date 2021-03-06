const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-postcss",
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  // webpackFinal: async (config) => {
  //   config.module.rules.push({
  //     test: /\,css&/,
  //     use: [
  //       {
  //         loader: 'postcss-loader',
  //         options: {
  //           ident: 'postcss',
  //           plugins: [
  //             require('tailwindcss'),
  //             require('autoprefixer')
  //           ]
  //         }
  //       }
  //     ],
  //     include: path.resolve(__dirname, '../'),
  //   })
  //   return config
  // }
};
