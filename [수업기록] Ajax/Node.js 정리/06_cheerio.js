// npm install cheerio
// npm install request 명령어를 미리 실행해주세요.
// 모듈을 추출합니다.
const request = require('request');
const cheerio = require('cheerio');
// request 모듈을 사용합니다.
const url = 'http://www.hanbit.co.kr/store/books/new_book_list.html';
request(url, (error, response, body) => {
    // cheerio 모듈을 사용합니다.
    const $ = cheerio.load(body);
    // 데이터를 추출합니다.
    $('.view_box').each((index, element) => {
        // 변수를 선언합니다.
        const title = $(element).find('.book_tit').text().trim();
        let writer = $(element).find('.book_writer').text().trim();
        writer = writer.split(',').map((item) => item.trim());
        // 출력합니다.
        console.log(title)
        console.log(writer);
        console.log();
    });
});