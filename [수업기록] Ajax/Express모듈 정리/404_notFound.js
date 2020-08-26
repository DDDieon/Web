// 모듈을 추출합니다.
const express = require('express');
const fs = require('fs');
// 서버를 생성합니다.
const app = express();
// request 이벤트 리스너를 설정합니다.

app.get('*', (request, response) => {
    response.status(404);
    response.send('해당 경로에는 아무것도 없습니다.');

});

// 서버를 실행합니다.
app.listen(52274, () => {
    console.log('Server running at http://127.0.0.1:52274');
});