// --------------------------------------------------------------
// --------------------------------------------------------------
// Найти числа кратные 3 в диапазоне от 0 до 100
// 0 1 2 3 4 5 6 7 8 9 10 -> 100
// [1 ... 100]


// // Решение 1
// 	console.log(Array.apply(null, { length: 100}).map(Number.call, Number).filter(item => {if (item % 3 === 0) return true}).length);


// // Решение 2
// 	let count = 0;
// 	for (let i = 0; i <= 100; i++) {
// 		if (i % 3 === 0) count++;
// 	}
// 	console.log(count)



// --------------------------------------------------------------
// --------------------------------------------------------------
// Есть input i-91 b i-92 куда пользователь может ввести числа. Но нажати кнопки b-9 Должна запустить функция f9, которая
// выводит в out-9 числа от меньшего до большего включительно, с шагом 1. Разделитель пробел. Если пользователь ввёл 4 и 8
// и нажал кнопку, мы получим:
// 		4 5 6 7 8
// 		если ввел 8 и 6, то получим
// 		6 7 8
// Задача решается с помощью цикла. Подсказка - вначале делаем проверку, потом запускаем цикл.		


// // Решение 1
// 	function t9() {
// 		let out =   '';                                                  //очистил 
// 		let inputI1 = +document.querySelector('.i-91').value;            //присвоил переменную
// 		let inputI2 = +document.querySelector('.i-92').value;

// 		if (inputI1 > inputI2) {                                         //сравнил переменные
// 			inputI1 = +document.querySelector('.i-92').value;              //если одна > другой - заново переприсвоил значения
// 			inputI2 = +document.querySelector('.i-91').value;
// 		}
// 		for (; inputI1 <= inputI2; inputI1++) {                         //запустил цикл
// 				out += inputI1 + ' ';
// 		}
// 		document.querySelector('.out-9').innerHTML = out;
// 	}
// 	document.querySelector('.b-9').onclick = t9;


// // Решение 2
// function t9() {
// 	let out =   '';                                            //очистил 
// 	let a = +document.querySelector('.i-91').value;            //присвоил переменную
// 	let b = +document.querySelector('.i-92').value;

// 	if (a > b) {                                               //сравнил переменные
// 			// let t = a;
// 			// a = b;
// 			// b = t;
// 			[a, b] = [b, a];

// 	}
// 	for (let i = a; i <= b, i++) {                             //запустил цикл
// 			out += i + ' ';
// 	}
// 	document.querySelector('.out-9').innerHTML = out;
// }
// document.querySelector('.b-9').onclick = t9;



// --------------------------------------------------------------
// --------------------------------------------------------------
// Упрощение сортировки массива с помощью стрелочных функций

// // Решение 1
// let arr = [1, 20, 100, -5];
// arr = arr.sort(function(a, b) {
// 	return a - b;
// });
// console.log(arr);

// // Решение 2
// let arr = [1, 20, 100, -5];
// arr = arr.sort((a, b) => a - b);
// console.log(arr);

// --------------------------------------------------------------
// --------------------------------------------------------------
// Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.

// const num = 4
// const numTwo = -5

// if ( num > 0 ) {
// 	console.log('Number: ' + num + ', положительное.')
// } else {
// 	console.log('Number: ' + num + ', отрицательное.')	
// }

// if ( numTwo > 0 ) {
// 	console.log('Number: ' + numTwo + ', положительное.')
// } else {
// 	console.log('Number: ' + numTwo + ', отрицательное.')	
// }

// --------------------------------------------------------------
// --------------------------------------------------------------
// Дана строка. Выведите в консоль последний символ строки.

// const text = 'Lorem ipsum'
// console.log(text.slice(-1))

// const number = 161;
// const last = number.toString().slice(-1);
// console.log(last.slice(-1))



// --------------------------------------------------------------
// --------------------------------------------------------------
// Дано число. Проверьте, четное оно или нет.

// Решение 1
// const num = 4
// if (num % 2 === 0) {
// 	console.log(`Число ${num} четное`)
// } else {
// 	console.log(`Число ${num} нечетное`)
// 	}

// Решение 2
// function even_or_odd(number) {
// 	return number % 2 === 0 ? `Число ${number} четное` : `Число ${number} нечетное`
// }
// console.log(even_or_odd(4))

// Решение 3
// const even = n => !(n % 2);
// console.info(even(4));



// --------------------------------------------------------------
// --------------------------------------------------------------
// Даны два слова. Проверьте, что первые буквы этих слов совпадают.

// Решение 1
// let firstWord = 'Andrey'
// let secondWord = 'Andrey'
//  		// secondWord = 'Sergey'

// const firstWordLetter = firstWord.substr(0, 1);
// const secondWordLetter = secondWord.substr(0, 1);

// if (firstWordLetter == secondWordLetter) {
// 	console.log(`Первая буква имени ${firstWord} - ${firstWordLetter}, 
// 	             Первая буква имени ${secondWord} - ${secondWordLetter}, они одинаковые`)
// } else {
// 	console.log(`Первая буква имени ${firstWord} - ${firstWordLetter}, 
// 	Первая буква имени ${secondWord} - ${secondWordLetter}, они разные`)
// }


// Решение 2
let name = 'john';
console.log(name[0].toUpperCase());







// --------------------------------------------------------------
// --------------------------------------------------------------
// 