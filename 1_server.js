// import http from 'http';
const http = require('http');

// localhost -> 127.0.0.1 -> 루프백 -> 서버를 실행한 컴퓨터
const host = 'localhost';
const port = 3000;

// 서버를 만들고나서 어떤 응답들을 보내줘야하는 지 설정하는 메서드(서버 생성)
// request -> 요청, response -> 응답
const server =  http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html'});
  res.end('<h1>Hello World!</h1>');
});

// 어떤 호스트와 포트에서 실행할 건지?
// 포트, 호스트. 서버가 실행되었을 때 실행되는 콜백 함수
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});