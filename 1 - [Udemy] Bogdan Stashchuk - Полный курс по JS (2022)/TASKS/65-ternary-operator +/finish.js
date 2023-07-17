/** ЗАДАЧА 65 - Тернарный оператор
 *
 * Измените функцию "isNumber", используя тернарный оператор
 */

// function isNumber(a) {
//   if (typeof a === 'number') {
//     return `${a} - это число`
//   } else {
//     return `${a} - это не число`
//   }
// }

function isNumber(a) {
	return typeof a === 'number' 
	? `${a} - это число` 
	: `${a} - это не число`
}


console.log(isNumber(12))
// 10 - это число

console.log(isNumber('qwe'))
// Привет - это не число

console.log(isNumber(false))
// true - это не число


// -----------------------------------
console.log('-----------------------')


const isNumber2 = (a) => {
	return typeof a === 'number' ? `${a} - это число` : `${a} - это не число`
}

console.log(isNumber2(10))
// 10 - это число

console.log(isNumber2('Привет'))
// Привет - это не число

console.log(isNumber2(true))
// true - это не число
