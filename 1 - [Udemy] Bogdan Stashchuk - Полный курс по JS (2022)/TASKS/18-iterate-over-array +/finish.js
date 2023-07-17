/** ЗАДАЧА 18 - Перебор элементов массива
 *
 * 1. Создайте массив с несколькими элементами
 *
 * 2. Используя один из методов массивов, переберите все элементы
 * и выведите каждый элемент в консоль
 */


const myArray = ['Sergey', null, 32, true]
const myArray2 = ['Sergey', null, 32, true]

myArray.forEach( (el) => console.log(el) )

// console.log('-----------')

myArray2.forEach( (el) => {
	console.log(el)
})