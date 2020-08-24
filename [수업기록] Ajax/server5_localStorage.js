// 모듈을 추출합니다.
var http = require('http');
var express = require('express');

//웹 서버를 생성합니다.
var app = express();

app.use(express.static('public5'));
app.use(express.bodyParser());

app.get('/', function (req, res) {
    res.send('Hello World');
});

// 웹 서버를 실행합니다.
http.createServer(app).listen(50005, function () {
    console.log("server Running at http://127.0.0.1:50005");
})