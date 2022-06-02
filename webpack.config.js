/* eslint-disable no-unused-vars */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode,
  target: 'web',
  devServer: {
    historyApiFallback: true,
    static: path.resolve(__dirname, './src'),
    open: true,
    compress: true,
    port: 8080,
  },

  entry: {
    main: path.resolve(__dirname, './src/pages/web/landing-page/landing-page.js'),
    signIn: path.resolve(__dirname, './src/pages/web/sign-in/sign-in.js'),
    signUp: path.resolve(__dirname, './src/pages/web/sign-up/sign-up.js'),
    roomDetails: path.resolve(__dirname, './src/pages/web/room-details/room-details.js'),
    searchRoom: path.resolve(__dirname, './src/pages/web/search-room/search-room.js'),
    colors: path.resolve(__dirname, './src/pages/ui-kit/colors/colors.js'),
    headersAndFooters: path.resolve(
      __dirname,
      './src/pages/ui-kit/headers-and-footers/headers-and-footers.js'
    ),
    formElements: path.resolve(__dirname, './src/pages/ui-kit/form-elements/form-elements.js'),
    cards: path.resolve(__dirname, './src/pages/ui-kit/cards/cards.js'),
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'script/[name].bundle.js',
    clean: true,
  },

  devtool: 'source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style/[name].[contenthash].css',
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/pages/web/landing-page/landing-page.pug'),
      chunks: ['main'],
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/pages/web/sign-in/sign-in.pug'),
      filename: 'signIn.html',
      chunks: ['signIn'],
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/pages/web/sign-up/sign-up.pug'),
      filename: 'signUp.html',
      chunks: ['signUp'],
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/pages/web/room-details/room-details.pug'),
      filename: 'roomDetails.html',
      chunks: ['roomDetails'],
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/pages/web/search-room/search-room.pug'),
      filename: 'searchRoom.html',
      chunks: ['searchRoom'],
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/pages/ui-kit/colors/colors.pug'),
      filename: 'colors.html',
      chunks: ['colors'],
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(
        __dirname,
        './src/pages/ui-kit/headers-and-footers/headers-and-footers.pug'
      ),
      filename: 'headersAndFooters.html',
      chunks: ['headersAndFooters'],
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/pages/ui-kit/form-elements/form-elements.pug'),
      filename: 'formElements.html',
      chunks: ['formElements'],
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/pages/ui-kit/cards/cards.pug'),
      filename: 'cards.html',
      chunks: ['cards'],
    }),

    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/favicons'),
          to: path.resolve(__dirname, 'dist/assets/favicons'),
        },
      ],
    }),
  ],
  module: {
    rules: [
      // стили

      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env', {}]],
              },
            },
          },
          'sass-loader',
        ],
      },

      // изображения

      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext][query]',
        },
      },

      // шрифты

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext][query]',
        },
      },

      // pug

      {
        test: /\.pug$/,
        exclude: /(node_modules|bower_components)/,
        use: ['pug-loader'],
      },
    ],
  },
};
