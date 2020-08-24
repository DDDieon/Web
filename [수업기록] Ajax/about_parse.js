// 모듈을 추출합니다.

const url = require('url');

// 모듈을 사용합니다.

const parsedObject = url.parse('http://www.hanbit.co.kr/store/books/look.php?p_code=B4250257160');
// 파싱: 파싱(parsing)은 쉽게말해 문장이나 데이터문자열(html, json 등)에서 원하는 데이터를 분석하여 추출하는 기술

console.log(parsedObject);