const path = require('path');

module.exports = {
  entry: './public/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/public/'),
  },
  module: {
    
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'styled-components': path.resolve(__dirname, 'node_modules', 'styled-components'),
    }
  },
};