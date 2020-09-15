// 모듈을 추출합니다.
const express = require('express');
const fs = require('fs');
// 서버를 생성합니다.
const app = express();
// request 이벤트 리스너를 설정합니다.

// ** 이상태로는 미들웨어가 없어서 index에서는 Cannot GET /가 뜬다. '/image'를 뒤에 붙이자.

app.get('/image', (request, response) => {
    fs.readFile('image.png', (error, data) => {
        // 이미지 파일을 제공합니다.
        response.type('image/png');
        response.set('Content-type', 'image/png') //MIME형식
        response.send(data);
    });
});

// 서버를 실행합니다.
app.listen(52274, () => {
    console.log('Server running at http://127.0.0.1:52274');
});