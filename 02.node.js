// 리터럴 템플릿
// js에서 문자열 데이터를 표현하고, 문자열 내부에
// 변수의 값을 넣기위해(바인딩) 사용하는 문법
var title = "제목입니다";
var text = `문자열 내용 : ${title}`;
// jsp의 el 문법과 동일하여
// jsp문서에서 리터럴 템플릿을 사용할때는 주의
console.log(text);
var html_text = `<!DOCTYPE html>
<html>
  <head>
    <title>${title}</title>
  </head>
  <body>
    hello, node & http
  </body>
</html>`;
console.log(html_text);
// http 서버를 실행하기 위한 모듈을 불러옵니다

// http 서버 객체를 생성합니다

// 서버 셋팅을 합니다
// html 태그

// 서버를 실행합니다