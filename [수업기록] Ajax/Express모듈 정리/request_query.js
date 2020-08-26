// 모듈을 추출합니다.
const express = require('express');
// 서버를 생성합니다.
const app = express();
// request 이벤트 리스너를 설정합니다.
// ** /?a=3&b=4 등을 입력해보자
app.get('*', (request, response) => {
    console.log(request.query);
    response.send(request.query);
});
// 서버를 실행합니다.
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
});