/** ЗАДАЧА 19 - Добавление элементов в массив
 *
 * 1. Создайте любой массив
 *
 * 2. Добавьте в конец массива несколько новых элементов
 *
 * 3. Выведите в консоль длину результирующего массива
 */


const myArray = ['Sergey', 32, true, null]

console.log(myArray)
console.log(myArray.length)

myArray.push('Simferopol')

console.log(myArray)
console.log(myArray.length)

myArray.push(33, 34)
console.log(myArray)
console.log(myArray.length)