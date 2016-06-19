var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/js/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  node: {
    fs: 'empty',
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src')
        ],
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]!postcss-loader',
        exclude: [
          path.resolve(__dirname, 'src', 'css', 'font-awesome.min.css')
        ]
      },
      {
        test: /\.(woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg|jpeg|jpg|woff|woff2)(\?.*$|$)/,
        loader: 'file-loader'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      },
      // {
      //   test: /\.json$/,
      //   loader: 'json-loader'
      // },
      // {
      //   test: /(\.txt|\.md|LICENSE)$/,
      //   loader: 'raw-loader'
      // },
      {
        test: /.html$/,
        loader: 'html-loader'
      }
    ]
  },
  postcss: function (webpack) {
    return [
      autoprefixer
    ];
  }
}
