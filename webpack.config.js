const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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

  entry: path.resolve(__dirname, './src/entry.js'),

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'script/[name].bundle.js',
    clean: mode !== 'development',
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
      template: path.resolve(__dirname, './src/pages/web/index/index.pug'),
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/pages/web/landing-page/landing-page.pug'),
      filename: 'landing-page.html',
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/pages/web/sign-in/sign-in.pug'),
      filename: 'signIn.html',
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/pages/web/sign-up/sign-up.pug'),
      filename: 'signUp.html',
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/pages/web/room-details/room-details.pug'),
      filename: 'roomDetails.html',
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/pages/web/search-room/search-room.pug'),
      filename: 'searchRoom.html',
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/pages/ui-kit/colors/colors.pug'),
      filename: 'colors.html',
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(
        __dirname,
        './src/pages/ui-kit/headers-and-footers/headers-and-footers.pug'
      ),
      filename: 'headersAndFooters.html',
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/pages/ui-kit/form-elements/form-elements.pug'),
      filename: 'formElements.html',
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/pages/ui-kit/cards/cards.pug'),
      filename: 'cards.html',
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
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext][query]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext][query]',
        },
      },
      {
        test: /\.pug$/,
        exclude: /(node_modules|bower_components)/,
        use: ['pug-loader'],
      },
    ],
  },
};
