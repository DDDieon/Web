const fs = require('fs')

try {
    const file = fs.readFileSync("AAA.txt") // 없는 파일
    console.log(file.toString())
} catch (exception) {
    console.log("없는 파일을 읽으라네")
    console.log(exception)
}