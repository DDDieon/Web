const fs = require('fs')

//동기방식 파일쓰기
fs.writeFileSync("output.txt", "안녕하세요!")
console.log("파일 생성완료")

//비동기방식 파일쓰기
fs.writeFile("output2.txt", "감사합니다!", (error) => {
    console.log("비동기파일쓰기 완료")
})