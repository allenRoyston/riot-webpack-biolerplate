const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  entry: {
    helloworld: './src/components/helloworld/helloworld.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      script: 'src="http://localhost:35729/livereload.js"'
    }),
    new LiveReloadPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }
    ],
    rules: [
      {
        test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            'file-loader'
          ]
        }
    ]
  }
};
