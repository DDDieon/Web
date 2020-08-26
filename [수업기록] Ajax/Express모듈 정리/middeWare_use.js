// 모듈을 추출합니다.
const express = require('express');
const morgan = require('morgan');
// 서버를 생성합니다.
const app = express();


//------여기서 폴더를 설정하는 use는 환승터미널. 미들웨어다.------
app.use(express.static('public'));
// request 이벤트 리스너를 설정합니다.
app.get('*', (request, response) => {
    response.send('명령 프롬프트를 확인해주세요.');
});
// 서버를 실행합니다.
app.listen(52273, () => {
    console.log('Server running at http://127.0.0.1:52273');
});