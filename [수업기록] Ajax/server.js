// 모듈을 추출합니다.

var http = require("http")
var express = require("express")

//웹 서버를 생성합니다.
var app = express()
app.use(express.static("public"))
app.use(express.bodyParser())
app.use(app.router)

//request 가 오면 reponse 응답을 보낸다
app.post("/user", function (request, response) {
    var name = request.param("user_name")
    var age = request.param("user_age")
    var gender = request.param("gender")
    if (gender == "man") {
        gender = "남성"
    } else {
        gender = "여성"
    }
    var person = {
        name: name,
        age: age,
        gender: gender,
    }
    //받아온 값 request에서 해당하는 input태그값의 파라미터만 저장한다
    console.log(person)
    response.send(person)
})

app.use(function (request, response) {
    response.send("<h1>잠시 점검중</h1>")
})
// 웹 서버를 실행합니다.
http.createServer(app).listen(52270, function () {
    console.log("server Running at http://127.0.0.1:52270")
})
