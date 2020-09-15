// 모듈을 추출합니다.
const fs = require('fs');
// 파일을 읽어 들입니다.
fs.readFile('none.txt', (error, file) => {
    // 예외 처리합니다.
    if (error) {
        // 예외가 발생했을 때
        console.log('파일을 읽어 들이는데 문제가 발생했습니다.');
        console.log(error);
    } else {
        // 출력합니다.
        console.log(file);
        console.log(file.toString());
    }
});