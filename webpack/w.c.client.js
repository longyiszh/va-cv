const { resolve } = require('path');

const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { root } = require('../lib/helpers');

const clientpath = root('src/client');
const assetPath = resolve(clientpath, './assets');
const staticPath = resolve(clientpath, './statics');

module.exports = {
  entry: [
    "babel-polyfill",
    root('src/client/main.ts'),
    root('src/client/styles.ts')
  ],
  output: {
    path: root('dist/client'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              'scss': 'vue-style-loader!css-loader!sass-loader'
            }
          }
        ]
      },
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/]
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]?[hash]',
              outputPath: 'assets/'
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        /* Global scss */
        test: /\.scss$/,
        exclude: [assetPath, staticPath],
        use: [
          {
            loader: "style-loader" // global styles needs to get injected to <style></style>
          },
          {
            loader: "css-loader?sourceMap" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      root: root('node_modules')
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  devtool: '#eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: root('src/client/index.html')
    }),
    new CopyWebpackPlugin([
      { 
        from: resolve(staticPath),
        to: 'statics',
        ignore: [".gitkeep"]
      }
    ])
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new CleanWebpackPlugin([`${root('dist/client')}/**`], {root: root(), verbose: true}),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    })
  ])
}
