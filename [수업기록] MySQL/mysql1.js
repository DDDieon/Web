// 모듈을 추출합니다.
var http = require('http');
var express = require('express');
var mysql = require('mysql');


var client = mysql.createConnection({
    user: 'root',
    password: '1130',
})
client.query('USE COMPANY')


// 웹 서버를 생성합니다.
var app = express()
app.use(express.static('public'));
app.use(express.bodyParser());
app.use(app.router);

app.get('/products', function (request, response) {
    var query = "select * from products"
    client.query(query, function (error, result) {
        response.send(result)
    })
});
app.get('/products/:id', function (request, response) {
    // 변수를 선언합니다.
    var id = Number(request.params.id);

    // 데이터베이스 요청을 수행합니다.
    client.query('SELECT * FROM products WHERE id=?', [id], function (error, data) {
        if (data == '') {
            response.send('오류');
        } else {
            response.send(data);
            console.log(data);
        }
    });
})
app.post('/products', function (request, response) {
    // 변수를 선언합니다.
    console.log(request.query)
    var name = request.body.name;
    var modelnumber = request.body.modelnumber;
    var series = request.body.series;

    var data = {
        name: name,
        modelnumber: modelnumber,
        series: series
    }

    var sql = "INSERT INTO products (name, modelnumber, series) VALUES ( '" + name + "' ,'" + modelnumber + "' , '" + series + "' )";
    client.query(sql, function (error, result) {
        if (error) {
            response.send("error발생");
        } else {
            response.send(data);
            console.log(sql);
        }
    });
});
// 웹 서버를 실행합니다.
http.createServer(app).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});