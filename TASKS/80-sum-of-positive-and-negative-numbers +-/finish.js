/** ЗАДАЧА 80 - Сумма положительных и отрицательных чисел
 *
 * 1. Создайте функцию "sumPositiveNegative", которая принимает массив
 * и суммирует отдельно положительные и отрицательные числа.
 *
 * 2. Функция должна вернуть такой объект:
 *  {
 *    positive: 74, // сумма всех положительных чисел
 *    negative: -54 // сумма всех отрицательных чисел
 *  }
 */

const nums = [10, -12, 30, -1, -8, 0, 14, -33, 20]

// // Вариант 1 
// 	const sumPositiveNegative = (arr) => {
// 		let positive = 0
// 		let negative = 0
		
// 	 for (const num of arr) {
// 		if (num < 0) {
// 			negative += num
// 		} else {
// 			positive += num
// 		}
// 	 }

// 	 return (`positive: ${positive}, negative: ${negative}`)
// 	}


// Вариант 2
	function sumPositiveNegative(arr) {
		return arr.reduce( (sums, num) => {
			if (num > 0) {
				return {
					positive: sums.positive + num,
					negative: sums.negative
				}
			}

			return {
				positive: sums.positive,
				negative: sums.negative + num
			}

		}, { positive: 0, negative: 0})
	}


const result = sumPositiveNegative(nums)

console.log(result)
// { positive: 74, negative: -54 }
