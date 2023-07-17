/** ЗАДАЧА 62 - Разница в объявлении функций
 *
 * 1. Объясните разницу между двумя вариантами объявления функций
 *
 * 2. Покажите эту разницу, добавив дополнительный код под функциями
 *
 * 3. Также вызовите обе функции
 */

firstFunction(2, 3)

// Можем вызывать функцию до объявления функции
function firstFunction(a, b) {
  return a + b
}

// // Можем присваивать значение
// firstFunction = 'qwe'
// console.log(firstFunction)

// -------------------------------------

// // Cannot access 'secondFunction' before initialization
// secondFunction(2, 7)
const secondFunction = function (a, b) {
  return a + b
}


// // Новое значение не может быть присвоено
// secondFunction = true


console.log(firstFunction(2, 5))
console.log(secondFunction(5, 10))