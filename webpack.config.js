module.exports = {
  mode: "development",
  entry: './src/index.tsx',
  output: {
    filename: './dist/bundle.js'
  },

  devtool: 'source-map',
  
  devServer: {
    historyApiFallback: true
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: [
          {
            loader: 'ts-loader'
          },

          
        ]
      }
    ],
  }
};