// 모듈을 추출합니다.
var http = require("http")
var express = require("express")

//웹 서버를 생성합니다.
var app = express()

app.use(function (req, res, next) {
    req.text = "노드제이에스"
    res.text = "환영합니다"
    next()
})
app.use(function (req, res) {
    res.send("<h1>" + req.text + ": " + res.text + "</h1>")
})

// 웹 서버를 실행합니다.
http.createServer(app).listen(50000, function () {
    console.log("server Running at http://127.0.0.1:50000")
})
