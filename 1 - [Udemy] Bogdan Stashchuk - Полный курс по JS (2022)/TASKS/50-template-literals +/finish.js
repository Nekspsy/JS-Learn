/** ЗАДАЧА 50 - Шаблонные строки
 *
 * 1. Создайте функцию "templateLiteral" с одним параметром "num"
 *
 * 2. Функция должна возвращать многострочную строку.
 *
 * 3. Ниже приведены примеры вызовов функции.
 */



// const templateLiteral = (num) => {
// 	while (num >= 10) do {
// 			return console.log(
// 				`
// 				Число ${num}.
// 				Это число больше, либо равно 10.
// 				Квадратный корень этого числа ${Math.sqrt(num)}
// 				`
// 			)
// 	}
// }



const templateLiteral = (num) => {
	return (
		`
		Число ${num}.
		Это число ${num < 10 ? 'меньше' : 'больше, либо равно'} 10.
		Квадратный корень этого числа ${Math.sqrt(num)}.
		`
	)
}




// ТЕСТ 1
const myNumber = 9
console.log(templateLiteral(myNumber))
/* 
Число 9.
Это число меньше 10.
Квадратный корень этого числа - 3.
*/

// // ТЕСТ 2
const myAnotherNumber = 25
console.log(templateLiteral(myAnotherNumber))
// /* 
// Число 25.
// Это число больше или равно 10.
// Квадратный корень этого числа - 5.
// */

const myAnotherNumberr = 36
console.log(templateLiteral(myAnotherNumberr))

const myAnotherNumberrr = 81
console.log(templateLiteral(myAnotherNumberrr))

const myAnotherNumberrrr = 4
console.log(templateLiteral(myAnotherNumberrrr))