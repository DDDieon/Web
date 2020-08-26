// 모듈을 추출합니다.
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
// 서버를 생성합니다.
const app = express();
app.use(express.static('public'));
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({
    extended: false
}));
//내부적으로 true 를 하면 qs 모듈(npm 패키지)을 사용하고, false 면 query-string 모듈(내장모듈)을 사용한다.

// request 이벤트 리스너를 설정합니다.


// ******* index html이 없다면 html을 만들자
app.get('/', (request, response) => {
    // HTML 형식의 문자열을 생성합니다.
    let output = '';
    output += '<h1>현재 페이지는 server에서 생성</h1>'
    output += '<form method="post">';
    output += '  <input type="text" name="a" />';
    output += '  <input type="text" name="b" />';
    output += '  <input type="submit" />';
    output += '</form>';
    // 응답합니다.
    response.send(output);
    console.log(response)
});

// ******** index html이 있다면 전송만 하자
app.post('/', (request, response) => {
    // 응답합니다.
    console.log(request.body)
    response.send(request.body);
});
// 서버를 실행합니다.
app.listen(52274, () => {
    console.log('Server running at http://127.0.0.1:52274');
});