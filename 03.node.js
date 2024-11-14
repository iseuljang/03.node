// http 모듈을 불러옵니다
const http = require('http');

// http 서버 객체 생성
http.createServer((request, response)=>{
  // 응답 헤더를 작성
  // writeHead(코드, 내용)
  // js의 객체 object -> {'키':'값','키':'값'}
  response.writeHead(200,{'Content-Type':'text/plain'});
  // 응답 본문을 작성
  response.end('hello, node http server');
}).listen(8080,'127.0.0.1');

console.log("server running at http://127.0.0.1:8080/");  
//ctrl+c 누르면 서버 돌아가는거 멈춤