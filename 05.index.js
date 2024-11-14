const http = require('http');
//파일 읽어오는 모듈
const fs = require('fs');
const url = require('url');
http.createServer((request,response)=>{
    console.log('서버에 요청 발생');
    var _url = request.url;
    console.log('요청주소:' + _url);
    //요청주소에 따른 처리로직
    response.writeHead(200);
    try{
        //index.html을 불러옴
        //readFile()을 쓸 경우 파일 읽기전에 catch로 넘어갈수있음
        const data = fs.readFileSync('index.html');
        response.end(data);
    }catch(error){
        //못불러오면 에러 응답
        response.writeHead(404);
        response.end('not found');
    }
}).listen(3000,'127.0.0.1');
console.log('서버 실행중 http://127.0.0.1:3000');