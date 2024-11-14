/**
 * @module index
 * @description This module serves as the entry point of the application.
 * It initializes the HTTP server and sets up the necessary routes.
 */

// Node.js 내장 HTTP 모듈을 불러와서 `http` 변수에 할당합니다.
const http = require('http');

// 서버가 바인딩될 호스트 이름을 설정합니다. 여기서는 로컬 호스트를 사용합니다.
const hostname = '127.0.0.1';

// 서버가 수신할 포트 번호를 설정합니다.
const port = 3000;

/**
 * Handles HTTP requests and sends a response.
 * @function requestListener
 * @param {IncomingMessage} req - The incoming HTTP request.
 * @param {ServerResponse} res - The outgoing HTTP response.
 * @returns {void}
 * @response 200 - successful operation
 */

// `requestListener`라는 이름의 화살표 함수를 정의합니다.
const requestListener = (req, res) => {
  // 응답의 상태 코드를 200으로 설정합니다. 이는 성공적인 요청을 의미합니다.
  res.statusCode = 200;
  // 응답의 헤더에 `Content-Type`을 `text/plain`으로 설정합니다.
  res.setHeader('Content-Type', 'text/plain');
  // 응답 본문에 'Hello, World!\n' 메시지를 포함하여 응답을 종료합니다.
  res.end('Hello, World!\n');
};

/**
 * Creates an HTTP server.
 * @listen http://localhost:3000
 */
// `requestListener` 함수를 요청 처리기로 사용하는 HTTP 서버를 생성합니다.
const server = http.createServer(requestListener);

// 서버가 `hostname`과 `port`에서 요청을 듣기 시작합니다.
server.listen(port, hostname, () => {
  // 서버가 실행 중임을 알리는 메시지를 콘솔에 출력합니다.
  console.log(`Server running at http://${hostname}:${port}/`);
});