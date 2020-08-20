// 모듈을 추출합니다.

var http = require("http")
var express = require("express")

//웹 서버를 생성합니다.
var app = express()
app.use(express.static("public"))
app.use(express.bodyParser())
app.use(app.router)
app.post("/user", function (request, response) {
    // 변수를 선언합니다.
    var name = request.param("user_name")

    // 응답합니다.
    // response.send({
    //     message: '데이터를 추가했습니다.',
    //     data: name
    // });
    response.send(name)
})

app.use(function (request, response) {
    response.send("<h1>Hello Middleware...!</h1>")
})
// 웹 서버를 실행합니다.
http.createServer(app).listen(52273, function () {
    console.log("server Running at http://127.0.0.1:52273")
})
