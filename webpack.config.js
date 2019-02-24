const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
require("babel-polyfill");

const path = require('path');
const glob = require('glob');

const parts = require('./webpack.parts');

const outputDirectory = 'dist';

const PATHS = {
  app: path.join(__dirname, 'src'),
};

const commonConfig = merge([
  {
    entry: {
      app: [
        'babel-polyfill',
        './src/client/index.js',
      ]
    },
    output: {
      path: path.join(__dirname, outputDirectory),
      filename: 'bundle.js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
              babelrc: false,
              presets: ['env', 'stage-0', 'react'],
          },
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin([outputDirectory]),
      new HtmlWebpackPlugin({
        title: 'Online Code Editor',
        template: './public/index.html',
        favicon: './public/favicon.ico',
      }),
    ],
  },
]);

const productionConfig = merge([
  parts.loadEnv('https://cat-sports-api.herokuapp.com'),

  parts.extractCSS({
    use: 'css-loader',
  }),
  // parts.purifyCSS({
  //   paths: glob.sync(`${PATHS.app}/**/*.js`, { nodir: true }),
  // }),
  parts.loadImages({
    options: {
      limit: 100,
      name: 'public/images/[name].[ext]',
      publicPath: '../', // Take the directory into account
    },
  }),
  parts.loadFonts({
    options: {
      limit: 10000,
      mimetype: 'application/font-woff',
      name: 'public/fonts/[name].[ext]',
      publicPath: '../', // Take the directory into account
    },
  }),
  parts.loadStatic(),
]);

const developmentConfig = merge([
  parts.loadEnv('http://localhost:8080'),
  parts.devServer({
    // Customize host/port here if needed
    host: process.env.HOST,
    port: process.env.PORT,
  }),
  parts.loadCSS(),
  parts.loadImages(),
  parts.loadFonts(),
]);

module.exports = (mode) => {
  console.log(`mode:${mode}`);
  if (mode === 'production') {
    return merge(commonConfig, productionConfig, { mode });
  }

  const dev = merge(commonConfig, developmentConfig, { mode });
  console.log(dev);
  return dev;
};
