module.exports = {
  entry: __dirname + '/client/src/index.jsx',
  watch: true,
  module: {
    rules: [
      {
        test: [/\.js|.jsx?/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ],
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/client/dist'
  },
};