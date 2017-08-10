const webpack = require('webpack');
const path = require('path');
const TransferWebpackPlugin = require('transfer-webpack-plugin');
const config = {
  entry: {
    main: [
      './src/app/app.js',
    ],
  },
	//Resolve path
	resolve:{
		alias: {
		  Api: path.resolve(__dirname, 'src/app/api/'),
		  Components: path.resolve(__dirname, 'src/app/components/'),
		  Actions: path.resolve(__dirname, 'src/app/actions/'),
		  Root: path.resolve(__dirname, 'src/app/')
		}
	},
  // Render source-map file for final build
  devtool: 'source-map',
  // output config
  output: {
    path: path.resolve(__dirname, 'build'), // Path of output file
    filename: 'app.js', // Name of output file
  },
  plugins: [
    // Define production build to allow React to strip out unnecessary checks
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    // Minify the bundle
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
    // Transfer Files
    new TransferWebpackPlugin([
      {from: 'www'},
    ], path.resolve(__dirname, 'src')),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
        },
      },
			{
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
			{ test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
    ],
  },
};

module.exports = config;
