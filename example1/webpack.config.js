var path = require("path");

module.exports = {
  entry: "./app/index.js", // 시작점
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist") // 완료점 => 시작점에서 가져온 모든것을 dist/bundle.js로 만들겠다
  },
  module: {
    rules: [
      {
        test: /\.css$/, // .css라는 파일 확장자를 가진 모든 파일에 대해서
        use: ["style-loader", "css-loader"] // style-loader와 css-loader를 실행하겠다
      }
    ]
  }
};
