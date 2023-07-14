/** ЗАДАЧА 46 - Добавление уникальных элементов в массив
 *
 * 1. Создайте функцию "pushIfUnique" с двумя параметрами "inputArray" и "newElement"
 *
 * 2. Если "inputArray" уже содержит "newElement",
 * выведите в консоль "{newElement} уже находится в массиве"
 *
 * 3. В противном случае добавьте "newElement" в "inputArray"
 *
 * ПРИМЕЧАНИЕ: Мы предполагаем, что "inputArray" содержит элементы только примитивных типов
 */

// ВАРИАНТ 1 (не закончен)
// function pushIfUnique(inputArray, newElement) {
// 	if (!inputArray[newElement]) {
// 		console.log(inputArray[newElement])
// 		inputArray.push(newElement)
// 	} else {
// 		console.log(`${newElement} уже находится в массиве`)
// 	}
// }

// ВАРИАНТ 2 (рабочий)
	// const pushIfUnique = (inputArray, newElement) => {
	// 	if (inputArray.includes(newElement)) {
	// 		console.log(`${newElement} уже находится в массиве`)
	// 	} else {
	// 		inputArray.push(newElement)
	// 	}
	// }


// ВАРИАНТ 2 (рабочий, без else)
const pushIfUnique = (inputArray, newElement) => {
	if (inputArray.includes(newElement)) {
		return console.log(`${newElement} уже находится в массиве`)
	} 

	inputArray.push(newElement)
}



const myNumbers = [123, 50, 27]
console.log(`Начальный массив: ${myNumbers}`)

pushIfUnique(myNumbers, 50) // "50 уже в массиве"
console.log(myNumbers) // [123, 50, 27]

pushIfUnique(myNumbers, 80)
console.log(myNumbers) // [123, 50, 27, 80]

pushIfUnique(myNumbers, 80) // "80 уже в массиве"
console.log(myNumbers) // [123, 50, 27, 80]

pushIfUnique(myNumbers, 77)
console.log(myNumbers) // [123, 50, 27, 80, 77]

console.log(`Конечный массив: ${myNumbers}`)