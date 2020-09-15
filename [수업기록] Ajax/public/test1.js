// 모듈을 추출합니다.
const request = require("request")
// request 모듈을 사용합니다.
const url = "http://www.google.com"
request(url, function (error, response, body) {
    console.log(body)
    // 구글의 body태그를 가져와 console에 올린다
})
