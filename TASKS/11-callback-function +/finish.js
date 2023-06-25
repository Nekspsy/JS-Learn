/** ЗАДАЧА 11 - Колбэк функция
 *
 * 1. Выведите в консоль "Привет, мир!" с задержкой 5 секунд
 *
 * 2. Используйте стрелочную функцию
 */


// setTimeout(() => console.log('Привет, мир!'), 5000)


const hello = () => {
	// console.log('Hello,world')
	return 'Hello,world'
}
setTimeout(hello, 5000)
console.log(hello())