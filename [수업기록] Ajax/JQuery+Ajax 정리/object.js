// 리터럴과 속성
const name = "kim"
const age = 30
print(name, age)

function print(name, age) {
    console.log(name)
    console.log(age)
}


//값에 접근하는 2가지 방법 : .과 ['']

const student = {
    name: 'park',
    age: 20
}

const obj1 = {} // object literal syntax
const obj2 = new Object()

function print2(person) {
    console.log(person.name)
    console.log(person.age)
}

print2(student)
console.log(student['name'])
console.log(student.name)


//object의 특정 키를 이용해 값을 꺼내기

// 1. 함수선언
function printValue(obj, key) {
    console.log(obj[key])
}

//2. 값을 추출
printValue(student, 'name')


// 생성자함수로 제이슨형태 객체 생성하기

//1. 함수선언
function makePerson1(name, age) {
    return {
        name: name,
        age: age
    }
}
const 인간 = new makePerson1('Cat', 2)
console.log(인간)

// Object.assign() api로 다른객체의 키값을 참조하는 방법

const user = {
    name: 'song',
    age: 33
}
const 복사 = Object.assign(student, user)
// student의 값은 user에서 참조한다
console.log(student.name)
// student의 이름은 park->song으로 출력