const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const fs = require('fs');

let mode = 'development';
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
}

const pathToUiPages = path.resolve(__dirname, './src/pages/ui-kit');
const pathToWebPages = path.resolve(__dirname, './src/pages/web');

const getPages = (pathToPagesFolder) => {
  const pagesNames = fs.readdirSync(pathToPagesFolder);
  const pages = pagesNames.map((pageName) => {
    const pageNameInCamelCase = pageName
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (match, char) => char.toUpperCase());

    const page = new HtmlWebpackPlugin({
      template: path.resolve(pathToPagesFolder, `${pageName}/${pageName}.pug`),
      filename: `${pageNameInCamelCase}.html`,
    });
    return page;
  });

  return pages;
};

const pages = [...getPages(pathToUiPages), ...getPages(pathToWebPages)];

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
    ...pages,

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
