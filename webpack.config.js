const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

console.log(mode + ' mode');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: mode,
  target: 'web',
  devServer: {
    historyApiFallback: true,
    static: path.resolve(__dirname, './src'),
    open: true,
    compress: true,
    port: 8080,
  },

  entry: {
    main: path.resolve(__dirname, './src/pages/landingPage/landingPage.js'),
    signIn: path.resolve(__dirname, './src/pages/signIn/signIn.js'),
    signUp: path.resolve(__dirname, './src/pages/signUp/signUp.js'),
    roomDetails: path.resolve(__dirname, './src/pages/roomDetails/roomDetails.js'),
    searchRoom: path.resolve(__dirname, './src/pages/searchRoom/searchRoom.js'),
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
      template: path.resolve(__dirname, './src/pages/landingPage/landingPage.pug'), // шаблон
      chunks: ['main'],
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/pages/signIn/signIn.pug'), // шаблон
      filename: 'signIn.html',
      chunks: ['signIn'],
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/pages/signUp/signUp.pug'), // шаблон
      filename: 'signUp.html',
      chunks: ['signUp'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/pages/roomDetails/roomDetails.pug'), // шаблон
      filename: 'roomDetails.html',
      chunks: ['roomDetails'],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/pages/searchRoom/searchRoom.pug'), // шаблон
      filename: 'searchRoom.html',
      chunks: ['searchRoom'],
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
                plugins: [
                  [
                    'postcss-preset-env',
                    {
                      // Options
                    },
                  ],
                ],
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

      // щрифты

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
