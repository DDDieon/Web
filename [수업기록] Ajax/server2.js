// 모듈을 추출합니다.
var http = require("http")
var express = require("express")

//json 변수 선언
var items = [
    {
        name: "우유",
        price: "2000",
    },
    {
        name: "홍차",
        price: "5000",
    },
    {
        name: "커피",
        price: "5000",
    },
]

//웹 서버를 생성합니다.
var app = express()
app.use(express.static("public2"))
app.use(function (request, response) {
    response.send("<h1>사이트 리뉴얼..공사중..</h1>")
    //response
})

// 웹 서버를 생성합니다.
var app = express()
app.use(express.static("public2"))
app.use(app.router)
// 라우터 설정

app.all("/a", function (req, res) {
    res.send("<h1> PAGE A </h1>")
})
app.all("/b", function (req, res) {
    res.send("<h1> PAGE B </h1>")
})
app.all("/c", function (request, response) {
    response.send("<h1>Page C</h1>")
})
app.all("/data.html", function (request, response) {
    var output = ""
    output += "<!DOCTYPE html>"
    output += "<html>"
    output += "<head>"
    output += "    <title>Data HTML</title>"
    output += "</head>"
    output += "<body>"
    items.forEach(function (item) {
        output += "<div>"
        output += "    <h1>" + "items를 뺑뺑이해서 item이라는 객체의 속성 두개를 출력할거" + "</h1>"
        output += "    <h2>" + item.name + item.price + "</h2>"
        output += "</div>"
    })
    output += "</body>"
    output += "</html>"
    response.send(output)
})
app.all("/data.json", function (request, response) {
    response.send(items)
})
app.all("/data.xml", function (request, response) {
    var output = ""
    output += '<?xml version="1.0" encoding="UTF-8" ?>'
    output += "<products>"
    items.forEach(function (item) {
        output += "<product>"
        output += "    <name>" + item.name + "</name>"
        output += "    <price>" + item.price + "</price>"
        output += "</product>"
    })
    output += "</products>"
    response.type("text/xml")
    response.send(output)
})

// 웹 서버를 실행합니다.
http.createServer(app).listen(50001, function () {
    console.log("server Running at http://127.0.0.1:50001")
})
