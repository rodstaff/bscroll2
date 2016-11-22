var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './routes', 
  output: {
    path: '',
    filename: 'bundle.js'  
  },
  devServer: {
    inline: true,   
    publicPath: '/',    
    port: 8087
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      { exclude: /node_modules/,
        test: /\.js$/,
        loader:  'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: [
            'react-html-attrs'
          ]
        }
      },
      {
          test: /\.(png|jpg|jpeg|gif|woff)$/, 
          loader: 'url-loader?limit=300000'
      }
    ]
  },
  plugins: [
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurrenceOrderPlugin()
  //new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ]
}