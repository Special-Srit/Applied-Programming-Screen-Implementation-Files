// 연결 연산자 (Concatenation Operator) "+"
// 문자열과 문자열을 연결하는 연산자

user = prompt("이름을 입력하세요.");
alert("안녕하세요. " + user + "님");

// 문자열 + 숫자 = 문자열
// "2026" + 1 = "20261"

// 반복문(Loop)
for (let i = 0; i < 5; i++) {
    // 실행할 명령어
}

// // forEach 
// ArrayName.forEach(FallbackFunction) {
//     // 실행할 명령어
// }

// Ex - forEach
const season = ["spring", "summer", "fall", "winter"];
season.forEach(function (pseason) {
    console.log(`${pseason}`)
});

// for...in
// 객체에서 사용 가능한 반복문
for (variable in object) {
    // 실행할 명령어
}

// Ex - for...in
for (x in season) {
    console.log(`${x} : ${season[x]}`)
}

// Ex - Objects(for explaining how key grabbing works) 
const Teacher = {
    name: "John", // key : value
    birth: 1990,
    email: "john@example.com",
    job: true
}

for (x in Teacher) {
    console.log(`${x} : ${Teacher[x]}`)
}

// for...of
// 객체 중에서도 이터러블(iterable)한 객체

// for (variable of iterable) {
//     // 실행할 명령어
// }

// Ex - for...of
for (x of season) {
    console.log(`${x}`)
}

// Ex - 1(make a star tree)
// output:
//    *
//   ***
//  *****
//   ***
//    *

var star = "*";
var space = " ";
//  first answer:
for (let i = 0; i < 3; i++) {
    console.log(" ".repeat(2 - i) + star.repeat(1 + 2 * i));
}
for (let i = 0; i < 2; i++) {
    console.log(`${" ".repeat(1 + i)}${star.repeat(3 - 2 * i)}`);
}

// second answer:
function repeatStringNumTimes(str, num) {
    var result = "";
    var i;
    for (i = 0; i < num; i++) {
        result += str;
    }
    return result;
}

for (let i = 0; i < 3; i++) {
    console.log(`${repeatStringNumTimes(space, 2 - i)}` + `${repeatStringNumTimes(star, 1 + 2 * i)}`);
}
for (let i = 0; i < 2; i++) {
    console.log(`${repeatStringNumTimes(space, 1 + i)}` + `${repeatStringNumTimes(star, 3 - 2 * i)}`);
}

// third answer:
for (let i = 1; i <= 3; i++) {
    let str = ""
    for (let j = 1; j <= 3 - i; j++) {
        str += " "
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        str += "*"
    }
    console.log(str)
}
for (let i = 2; i >= 1; i--) {
    let str = ""
    for (let j = 1; j <= 3 - i; j++) {
        str += " "
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        str += "*"
    }
    console.log(str)
}

// while / do...while
while (condition) {
    // 실행할 명령어
}

// do {
//     // 실행할 명령어
// } while (condition);

// Ex - while
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// Ex - do...while
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);

// 함수(Function)
// function functionName() {
//     // 실행할 명령어(들)
// }

// 함수.w parameter
// function functionName(parameter1, parameter2, ...) {
//     // 실행할 명령어(들)
// }

//  Ex - function
function sumOf1to10() {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += i;
    }
    return sum;
}

// Ex - function with parameter
function multiply(a, b = 5, c = 10) {
    return a * b + c;
}

console.log(multiply(5, 10, 20));
console.log(multiply(5, 10));
console.log(multiply(5));

// 지역변수(Local Variable) / 전역변수(Global Variable)
// 지역변수 : 함수 안에서만 사용 가능한 변수
// 전역변수 : 함수 밖에서도 사용 가능한 변수

// Ex - local variable
function localVariable() {
    let local = "I am a local variable";
    console.log(local);
}
localVariable();
let local = "1"; // Not the same as the local variable in the function
console.log(local); // This will log "1"

// Ex - global variable
let global = "I am a global variable";
function globalVariable() {
    console.log(global);
}
globalVariable();
console.log(global); // This will log "I am a global variable"

// Ex. why does people does not use var usually?
// var는 함수 스코프(function scope)를 가지기 때문에, 블록 스코프(block scope)를 가지는 let이나 const에 비해 의도치 않은 변수 재선언이나 값 변경이 발생할 수 있다. 
// 그래서 애러가 떠야하는 코드도 var를 사용하면 애러가 안뜨고, 의도치 않은 결과가 나올 수 있다.

// Ex - var
var x = 1;
var y;
var sum;
sum = x + y; // it does not throw an error
y = 2;

// 함수 표현 방법

// 1. 함수를 변수에 할당하는 방법
let sum = function (a, b) {
    return a + b;
}
console.log(`함수 실행 결과 = ${sum(5, 10)}`);

// 2. 즉시 실행 함수
(function (매개변수) {
    console.log("즉시 실행 함수");
})(인수);

// Ex - 즉시 실행 함수
(function () {
    let userName = prompt("이름을 입력하세요.");
    alert(`안녕하세요. ${userName}님`);
})();

// 3. 화살표 함수(Arrow Function)
(매개변수) => {
    // 실행할 명령어(들)
}
// Ex - 화살표 함수
let hi1 = function () {
    return `Hi`;
}

let hi2 = () => {
    return `Hi`;
}

let hi3 = () => `Hi`;

// 만약 명령이 한 줄이라면, 중괄호와 return을 생략할 수 있다.
// 그 한 줄에 return이 포함되어 있다면, return도 생략할 수 있다.
// All three functions above are the same.

let sum1 = function (a, b) {
    return a + b;
}

// Into...

let sum2 = (a, b) => a + b;

let findRelatedto3 = () => {
    let num = parseInt(prompt("type in a number to find the related numbers in the array"));
    let relatedArr = [];
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0) {
            relatedArr.push(i);
        }
    }
    return relatedArr;
}
