/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */

const myName = 'Вася'
const myLastName = 'Пупкин'
const myJob = 'Лётчик'

const userInfo = 'Меня зовут ' + myName + ' ' + myLastName + ' и я ' + myJob
const userInfo2 = `Меня зовут ${myName} ${myLastName}, и я ${myJob}. (2й вариант)`


console.log(userInfo)
console.log(userInfo2)