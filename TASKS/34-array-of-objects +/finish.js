/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */


const carsArray = [
	{
		carBrand: 'BMW',
		price: 12500,
		isAvailableForSale: true,
	},
	{
		carBrand: 'Mercedes',
		price: 15600,
		isAvailableForSale: false,
	},
	{
		carBrand: 'Mazda',
		price: 9400,
		isAvailableForSale: true,
	},
]

const carsArrayNew = {
	carBrand: 'Nissan',
	price: 6200,
	isAvailableForSale: false,
	}


carsArray.push(carsArrayNew)
console.table(carsArray)