// ./webpack.config.js
// desc : react 'App' build

const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname + "/build")
  },
  mode: "none",
  module: {
    rules: [
      {
        // ES6, ES7문법으로 작성된 javascript 파일을 ES5로 바꾸기 위해 작성한 babelrc를 babel-loader를 이용해 규칙에 적용
        test: /\.(js|jsx)$/,
        exclude: "/node_modules",
        use: ['babel-loader'],
      },
      {
        // html build option & loader
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        // css build option & loader
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({     // output에 있는 bundle.js를 자동을 import
      template: './public/index.html', // public/index.html 파일을 읽는다.
      filename: 'index.html' // output으로 출력할 파일은 index.html 이다.
    }),    
    new MiniCssExtractPlugin({        
        // css output file option
        filename: 'style.css'
      })
  ]
};