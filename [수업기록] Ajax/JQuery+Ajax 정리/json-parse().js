//2. JSON.stringfy(json형태)는 거의 그대로지만, 문자열로 반환
let rabbit = {
    name: 'tom',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump !!`)
    }
}

// json을 문자화해서 파싱하기
var _json = JSON.stringify(rabbit, (key, value) => {
    console.log(`키를 출력:${key}, 밸류를 출력:${value}`)
    return value;
})
var obj = JSON.parse(_json, (key, value) => {
    return value;
})

console.log(obj.birthDate)