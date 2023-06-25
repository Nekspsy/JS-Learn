/** ЗАДАЧА 14 - Строка заглавными буквами
 *
 * 1. Создайте переменную и присвойте ей любую строку
 *
 * 2. Убедитесь что значение этой переменной НЕ является экземпляром String
 * Используйте для этого оператор "instanceof"
 *
 * 3. Убедитесь что значение этой переменной имеет тип "string"
 *
 * 4. Создайте другую переменную и ее значением должно быть значение
 * первой переменной заглавными буквами
 *
 * 5. Выведите в консоль значение второй переменной
 */

// const str = 'Привет, мир!'
// // console.log(instanceof str)
// console.log(typeof str)
// const strUpper = str.toUpperCase()
// console.log(strUpper)


const myFavoriteSeason = 'summer'
console.log(myFavoriteSeason instanceof String)
console.log(typeof myFavoriteSeason)
const seasonToUpperCase = myFavoriteSeason.toUpperCase()
console.log(seasonToUpperCase)

// // Создание экземпляра
// const myString = new String('Sergey')
// console.log(myString instanceof String)
// console.log(typeof myString)
// console.log(myString.toUpperCase())

