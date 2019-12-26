var path = require('path');

module.exports = {
  entry: './app/index.js', // 번들링 할 대상
  output: { 
    filename: 'bundle.js', // 번들링 할 파일명
    path: path.resolve(__dirname, 'dist') // 번들링 할 위치
  }
};

/***
 * 번들링 = 여러개의 파일 중에 종속성이 존재하는 파일을 하나의 파일로 묶어 패키징 시키는 과정.
 * 번들링을 함으로써 파일은 하나로 합쳐지고 네트워킹 요청횟수는 줄어들게 된다. 
 * 그리고 중복된 소스코드도 최소화하고 모듈 개념을 사용하기 때문에 글로벌이 오염되지 않는다.
 * 웹팩을 사용하면 자바스크립트 간의 종속성 뿐만 아니라 자바스크립트 내에서 필요한 css나 img와 같은 파일(.css, .jpg)도 
 * 번들링해서 하나의 파일로 합쳐주기 때문에 네트워크 요청을 최소화 시킬 수 있다.
 * 
 * webpack.config.js에 entry와 output을 정의해놓으면
 * 터미널에 'webpack app/index.js --output dist/bundle.js --mode development' 명령을 사용하지 않고
 * 'webpack'이라고만 쳐도 webpack이 자동으로 webpack.config.js 파일을 찾아서 정의해놓은대로 실행한다.
 ***/
