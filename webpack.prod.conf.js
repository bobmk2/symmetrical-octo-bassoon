const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const babelOptions = {
  presets: ['@emotion/babel-preset-css-prop'],
  cacheDirectory: true
};

module.exports = {
  target: 'web',
  mode: 'production',
  entry: {
    app: [path.resolve(__dirname, './src/index.tsx')]
  },
  devtool: 'eval-cheap-module-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx']
  },
  output: {
    path: path.resolve(__dirname, './dist/bundle'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './static/index.template.html',
      filename: path.resolve(__dirname, 'dist', 'index.html'),
      title: 'Symmetrical Octo Bassoon',
      loadingLabel: 'Loading...',
      inject: false,
      hash: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        APP_VERSION: JSON.stringify(`${process.env.npm_package_version}`)
      }
    }),
    new CompressionPlugin({
      deleteOriginalAssets: true,
      exclude: [/^.*?.html$/]
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'node_modules/normalize.css/normalize.css',
          to: path.resolve(__dirname, 'dist', 'static', 'css')
        },
        {
          from: 'node_modules/@blueprintjs/icons/lib/css/blueprint-icons.css',
          to: path.resolve(__dirname, 'dist', 'static', 'css'),
          transform(content) {
            return content.toString().replace(/\.\.\/\.\.\/resources\/icons/g, '../resources');
          }
        },
        {
          from: 'node_modules/@blueprintjs/core/lib/css/blueprint.css',
          to: path.resolve(__dirname, 'dist', 'static', 'css')
        },
        {
          context: 'node_modules/@blueprintjs/icons/resources/icons',
          from: '*.(eot|woff|ttf)',
          to: path.resolve(__dirname, 'dist', 'static', 'resources')
        }
      ]
    })
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['css-loader']
      },
      {
        test: /\.ts[x]?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: babelOptions
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          },
          {
            loader: 'eslint-loader',
            options: {
              fix: false,
              emitErrors: true,
              enforce: 'pre'
            }
          }
        ]
      },
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: babelOptions
          }
        ]
      },
      {
        test: /\.js[x]?$/,
        use: 'react-hot-loader/webpack',
        include: /node_modules/
      }
    ]
  }
};
