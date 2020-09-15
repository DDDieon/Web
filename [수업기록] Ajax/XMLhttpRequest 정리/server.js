// 모듈을 추출합니다.
var http = require('http');
var express = require('express');
// 변수를 선언합니다.
var items = [{
    name: '우유',
    price: '2000'
}, {
    name: '홍차',
    price: '5000'
}, {
    name: '커피',
    price: '5000'
}];
// 웹 서버를 생성합니다.
var app = express();
app.use(express.static('public'));
app.use(express.bodyParser());
app.use(app.router);
// 라우트합니다.
app.get('/products', function (request, response) {
    response.send(items);
});
app.get('/products/:id', function (request, response) {
    // 변수를 선언합니다.
    var id = Number(request.param('id'));
    if (isNaN(id)) {
        // 오류: 잘못된 경로
        response.send({
            error: '숫자를 입력하세요!'
        });
    } else if (items[id]) {
        // 정상
        response.send(items[id]);
    } else {
        // 오류: 요소가 없을 경우
        response.send({
            error: '존재하지 않는 데이터입니다!'
        });
    }
});
app.post('/products', function (request, response) {
    // 변수를 선언합니다.
    var name = request.param('name');
    var price = request.param('price');
    var item = {
        name: name,
        price: price
    };
    // 데이터를 추가합니다.
    items.push(item);
    // 응답합니다.
    response.send({
        message: '데이터를 추가했습니다.',
        data: item
    });
});
app.put('/products/:id', function (request, response) {
    // 변수를 선언합니다.
    var id = Number(request.param('id'));
    var name = request.param('name');
    var price = request.param('price');
    if (items[id]) {
        // 데이터를 수정합니다.
        if (name) {
            items[id].name = name;
        }
        if (price) {
            items[id].price = price;
        }
        // 응답합니다.
        response.send({
            message: '데이터를 수정했습니다.',
            data: items[id]
        });
    } else {
        // 오류: 요소가 없을 경우
        response.send({
            error: '존재하지 않는 데이터입니다!'
        });
    }
});
// express5에서는 지원하지 않는다 (del은 delete로 가자)
app.del('/products/:id', function (request, response) {
    // 변수를 선언합니다.
    var id = Number(request.param('id'));
    if (isNaN(id)) {
        // 오류: 잘못된 경로
        response.send({
            error: '숫자를 입력하세요!'
        });
    } else if (items[id]) {
        // 정상: 데이터 삭제
        items.splice(id, 1);
        response.send({
            message: '데이터를 삭제했습니다.'
        });
    } else {
        // 오류: 요소가 없을 경우
        response.send({
            error: '존재하지 않는 데이터입니다!'
        });
    }
});
// 웹 서버를 실행합니다.
http.createServer(app).listen(52273, function () {
    console.log('Server Running at http://127.0.0.1:52273');
});