parseInt("123.45") // 123
parseFloat("123.45") // 123.45

// 형변환(Type Conversion) - String
// toString()
num = 10
a = true;

num.toString() // "10"
num.toString(2) // "1010" -> converts to binary(2)
true.toString() // "true"

// String()
String(true)
String(10)
String(null) // "null"
String(undefined) //  "undefined"

// 형변환(Type Conversion)  - Boolean
Boolean(0) // "false"
Boolean(5 * 4) // "true"
Boolean("hi?") // "true"
Boolean(null) // "false"

// Celsius = (Fahrenheit - 32) / 1.8
// Ex.
let Celsius
let Fahrenheit = parseFloat(prompt("type in the Fahrenheit  you want to convert to Celsius"))

Celsius = ((Fahrenheit - 32) / 1.8).toFixed(2);
alert(`converted vaule is ${Celsius}`)

// + / - / * / "/" / % / ++ / --

// "==" / "!=" /  "===" / "!=="
// 자료형 까지 같은지 비교

3 == "3" // true
3 != "3" // false

3 === "3" // false
3 !== "3" // true

//  조건문

// if(condition) {
//     command to execute
// }

// else if (condition) {
//     command to execute
// }

// else {
//     command to execute
// }

// switch (variable)
// {
//     case value1 : command to execute
//         break
//         ....
// 
//     default: command to execute
// }


let a = parseInt(prompt("enter a vaule"))
if (a % 3 === 0) {
    alert(`${a} is multiple of 3`)
}
else if (a % 3 === 1 || a % 3 === 2) {
    alert(`${a} is not multiple of 3`)
}
else {
    alert(`something went wrong ${a / 3}`)
}