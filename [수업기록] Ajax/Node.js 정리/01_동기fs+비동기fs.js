//비동기로 읽기 --- 항상 동기실행 된 후에 실행됨
const fs1 = require('fs')
const file1 = fs1.readFile("test1.txt", (error, file1) => {
    console.log("비동기로 읽기 시작")
    console.log(file)
    console.log(file.toString())
})

//동기로 읽기
const fs = require('fs')
const file = fs.readFileSync('test1.txt')
console.log("동기로 읽기 시작")
console.log(file)
console.log(file.toString())