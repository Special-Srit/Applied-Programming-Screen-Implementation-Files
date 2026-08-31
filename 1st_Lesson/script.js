// Primitive data types(원시형) & Object(겍체)
// Primitive data types(원시형) - 하나의 값만 가지고 있는 자료형
// Object(겍체) - 원시형을 제외한 모든 자료

// Basic Type(기본형) / Composite Type(복합형) 
// Basic Type(기본형) - Number, String, Boolean, Undefined, Null
// Composite Type(복합형) - Array, Object

// Undefined - 자료형을 지정하지 않았을 때의 유형 / 변수를 선언하고 값을 정의하지 않으면 뜨는 유형
// Null - 값이 유효하지 않을 때의 유형

// The Rules to how to name a variable
// 1. 변수 이름은 숫자로 시작하지 않으며 이름안에 공백이 들어가면 아니한다.
// 2. 영어의 대소문자를 구분한다.
// 3. 한 단어로 이루어진 변수 명은 주로 소문자를 지향한다(ex. age, name ...)
// 4. 두 단어로 이루어진 변수는 언더바 '_' 로 연결하거나 중간에 대문자를 섞어 사용한다.
// Snake Case(current_year) / Camel Case(currentYear) but prefers the Camel Case

let name = "john"
const age = 23

let result

// 숫자형(Number)
typeof (123)
typeof (123.123)

// 문자형(String)
typeof ("123")
typeof ("")

// 논리형(Boolean)

// truthy / falsy
// truthy - true로 인정할수 있는 값
//  falsy - false로 인정할수 있는 값(0, "", NaN, Undefined, Null)

// Undefined - 변수의 초기값
let name1

// Null - 유효하지 않은 값
let a = null

// 배열(Array)
const emptyArr = [0]
const colors = ["red", "green", "blue"]
const arr = [10, "banana", true]

// 탬플릿 리터럴(Template Literal)
let name2 = "Sam"
const age2 = 32
console.log(`${name2}'s age is ${age2}.`)

// 형변환(Type Conversion) - Number()
Number("123")
Number(prompt())

// Number(true) -> 1
// False -> 0
// Null -> 0
// Undefined -> NaN
// 정수 문자열(Int) -> 정수(단, 맨 앞의 0은 제외) "0123" -> 123
// 실수 문자열(float) -> 실수(단, 맨 앞의 0은 제외)
// 16진수 문자열 -> 10진수
// 빈 문자열("") -> 0
// 나머지(위 상황 제외) -> NaN