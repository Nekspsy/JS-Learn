	// alert ('Hello!');

	// let myName = 'Sergey';
	// let myLastName = 'Podgaetsky';
	// let myJob = 'Junior JS Developer';
	// console.log ('Hi! My name is ' + myName + ' ' + myLastName + '. I am ' + myJob);
	// console.log (`Hello! My name is ${myName} ${myLastName}. I am ${myJob}. (Второй вариант вывода)`);



//  -------------------------------------4. Объекты----------------------------------------------
// ----------------------------------------------------------------------------------------------

//  ----------------------- 1. Объекты ------------------------------------
//  ------------------ 2. Создание и удаление свойств объектов ------------

	// let myCity = {
	// 	city: 'Simferopol'
	// }
	// myCity.city = 'Yalta'
	// myCity.popular = true
	// myCity.country = 'Russia'
	// myCity.lang = 'RU'
	// delete myCity.lang
	// // console.log(myCity)

	// let countryPropertyName = 'country'
	// myCity[countryPropertyName] = 'USA'
	// console.log(myCity)

//  ------------------------- 3. Вложенные свойства -----------------------

	// let myCity2 = {
	// 	city: 'Simferopol',
	// 	info: {
	// 		isPopular: true,
	// 		country: 'Russia'
	// 	}
	// }
	// console.log(myCity2.info.isPopular)
	// delete myCity2.info['isPopular']
	// console.log(myCity2)

//  ------------------ 4. Сокращенный формат записи свойств ---------------

	// const name = 'Sergey'
	// const postsQty = 23

	// const userProfile = {
	// 	name: name,
	// 	postsQty: postsQty,
	// 	hasSignedAgreement: false
	// }


	// let boyName = 'Alex'
	// let boyLastName = 'Popov'
	// let boyAge = 23

	// let boy = {
	// 	boyName,
	// 	boyLastName,
	// 	boyAge,
	// 	country: 'Russia'
	// }
	// console.log(boy)


//  ------------------------- 6. Методы объекта ---------------------------

	// const myCity = {
	// 	city: 'New York',
	// 	cityGreeting: function() {
	// 		console.log('Greetings!')
	// 	}
	// }
	// myCity.cityGreeting()

	// // Сокращённый формат записи методов
	// const myCity = {
	// 	city: 'New York',
	// 	cityGreeting() {                   // Метод
	// 		console.log('Greetings!')
	// 	}
	// }
	// myCity.cityGreeting()                 // Вызод метода


	// let userInfo = {
	// 	userName: 'Sergey',
	// 	userHello() {
	// 		console.log('Hello, ' + userInfo.userName + ' !')
	// 	}
	// }
	// userInfo.userHello()

//  ---------------- 7. JSON - JavaScript Object Notation -----------------

	//  const post = {
	// 	title: 'My post',
	// 	likesQty: 5
	//  }
	 
	//  //Конвертация в JSON
	//  const postToJSON = JSON.stringify(post)
	//  console.log(postToJSON)
	 
	//  //Конвертация JSON в JS
	//  const postParse = JSON.parse(postToJSON)
	//  console.log(postParse)


//  ------------------ 5. Мутация объектов  (копирование/изменение объектов) --------------------
// ----------------------------------------------------------------------------------------------

//  ---------------- 1. Мутация в JavaScript -----------------

	// const person = {
	// 	name: 'Bob',
	// 	age: 25
	// }
	// person.age = 22                //мутация объекта (свойства)
	// person.isAdult = true
	// console.log(person.age)
	// console.log(person.isAdult)

	// ----- Пример 2
	// const person = {
	// 	name: 'Bob',
	// 	age: 25
	// }
	// const person2 = person
	// person2.age = 26
	// person2.isAdult = true
	// console.log(person.age)
	// console.log(person.isAdult)

//  ---------------- 2. Как избежать мутаций объектов -----------------

	// ----- Пример 1
	// const person = {
	// 	name: 'Bob',
	// 	age: 25
	// }
	// const person2 = Object.assign({}, person)  //Создаём новый объект, на основании объекта person
	// person2.age = 26
	// console.log(person2.age)
	// console.log(person.age)


	// ----- Пример 2 
	// const personNew = {
	// 	name: 'Bob',
	// 	age: 25
	// }
	// console.log(personNew)

	// const personNew2 = { ... personNew}
	// console.log(personNew2)

	// // const person2 = person
	// personNew2.name = 'Alice'

	// console.log(personNew2.name)
	// console.log(personNew.name)


	// ----- Пример 3
	// const person3 = {
	// 	name: 'Bob',
	// 	age: 25
	// }

	// const person4 = JSON.parse(JSON.stringify(person3))
	// person4.name = 'Alice'

	// console.log(person4.name)
	// console.log(person3.name)

//  ----------------------ФУНКЦИИ-------------------------------

	// let a = 5
	// let b = 3
	// let c
	// c = a + b
	// console.log(c)

	// a = 8
	// b = 12
	// c = a + b
	// console.log(c)

	// let a = 5
	// let b = 3
	// function sum(a, b) {
	// 	const c = a + b
	// 	console.log(c)
	// }
	// sum(a, b)
	// a = 8
	// b = 12
	// sum(a, b)

	// function myFn(a, b) {
	// 	let c
	// 	a = a + 1
	// 	c = a + b
	// 	return c
	// }
	// console.log(myFn(10, 3))

	// function myFn() {}
	// myFN(	)

//  ---------------Передача значения по ссылке------------------

	// const personOne = {
	// 	name: 'Bob',
	// 	age: 21
	// }
	// function increasePersonAge(person) {
	// 	person.age += 1
	// 	return person
	// }
	// increasePersonAge(personOne)
	// console.log(personOne.age)

//  ----------------Создание копии объекта----------------------

	// const personOne = {
	// 	name: 'Bob',
	// 	age: 21
	// }

	// function increasePersonAge(person) {
	// 	const updatedPerson = Object.assign({}, person)
	// 	updatedPerson.age += 1
	// 	return updatedPerson
	// }

	// const updatedPersonOne = increasePersonAge(personOne)
	// console.log(personOne.age)
	// console.log(updatedPersonOne.age)

//  ----------------------Колбэк функции------------------------

	// function printMyName() {
	// 	console.log('Sergey')
	// }
	// setTimeout(printMyName, 1000)

//  ----------------Явный/Неявный возврат результата------------------

	// // Явный возврат результата
	// const helloWorld = () => {
	//   return 'Привет, мир!'
	// }

	// // Неявный возврат результата
	// const helloWorld2 = () => 'Привет, мир!'

	// console.log(helloWorld())
	// console.log(helloWorld2())

//  -----------------Цепочка областей видимости--------------------

	// const a = 5

	// function myFn() {

	// 	function innerFn() {
	// 		console.log(a)
	// 	}
	// 	innerFn()
	// }

	// myFn()

//  -----------------Жизненный цикл переменных-------------------

	// let a
	// let b 

	// function myFn() {
	// 	let b 
	// 	a = true
	// 	b = 10
	// 	console.log(b)
	// }

	// myFn()

	// console.log(a)
	// console.log(b)

//  ------------------------ОПЕРАТОРЫ---------------------------

//  ----------------------- Оператор ... -----------------------

	// const button = {
	// 	width: 200,
	// 	text: 'Buy'
	// }

	// const redButton = {
	// 	...button,
	// 	color: 'red'
	// }

	// console.log(redButton)

// --------------------------

	// const buttonInfo = {
	// 	text: 'Buy'
	// }

	// const buttonStyle = {
	// 	color: 'yellow',
	// 	width: 200,
	// 	height: 300
	// }

	// const button = {
	// 	...buttonInfo,
	// 	...buttonStyle
	// }

	// console.table(button)



//  -------------------12. Функциональные выражения и стрелочные функции-------------------------
// ----------------------------------------------------------------------------------------------

//  --------------------12.1 Функциональные выражения ---------------------

// Объявленная функция
	// function myFn(a, b) {
	// 	let c
	// 	a = a + 1
	// 	c = a + b 
	// 	return c
	// }

// Функциональное выражение
	// setTimeout(function() {
	// 	console.log('колбэк функция')
	// } , 2000)

// ----- Функциональное выражение в вызове другой функции

	// setTimeout(function() {
	// 	console.log('Отложенное сообщение')
	// }, 1000)



// ----------------- 12.2 Стрелочные функции (всегда анонимны) -----------------

// ----- пример стрелочной функции -----

	// (a, b) => {
	// 	let c
	// 	a = a + 1 
	// 	c = a + b 
	// 	return c
	// }

// ----- присваиваем анонимной стрелочной функции имя через переменную

// 	const myFunction = (a, b) => {
// 		let c
// 		a = a + 1
// 		c = a + b
// 		return c
// 	}

// // myFunction(5, 4)
// 	console.log(myFunction(5, 3))

// ----- присваиваем функциональное выражение переменной

	// const myFunction = function(a, b) {   //  <- Анонимное функциональное выражение
	// 	let c
	// 	a = a + 1
	// 	c = a + b
	// 	return c
	// }

	// myFunction(5, 4)
	// console.log(myFunction(5, 3))

// ----- Стрелочная функция в вызове другой функции

	// setTimeout(() => {
	// 	console.log('Отложенное сообщение')
	// }, 1000)

// -----  Сокращение в стрелочных функциях

	//  Если один параметр, то круглые скобки можно опустить
	// 	a() => {
	// 		тело функции
	// }

	//  Фигурные скобки можно опустить если тело функции состоит из одного выражения
	// (a, b) => a + b

//  --------------------12.3 Значение параметров функции по умолчанию---------------------

// ----- Значение параметров по умолчанию
	// function multByFactor(value, multiplier = 1) {
	// 	return value * multiplier
	// }
	// console.log(multByFactor(10,2))
	// console.log(multByFactor(5))

// ----- То же самое, стрелочной функцией     

	// const multiByFactor = (value, multiplier = 1) => {
	// 	return value * multiplier
	// }
	// console.log(multiByFactor(10,2))

// ----- То же самое, анонимным функциональным выражением

	// const multiByFactor = function(value, multiplier = 1) {
	// 	return value * multiplier
	// }
	// console.log(multiByFactor(10,2))
	// console.log(multiByFactor(5))

//  ----------------- Пример 2 ------------------

	// const newPost = (post, addedAt = Date()) => ({   // от "(" - неявный возврат объекта
	// 	...post,
	// 	addedAt
	// })

	// const firstPost = {
	// 	id: 1,
	// 	author: 'Bogdan'
	// }

	// newPost(firstPost)
	// console.table(newPost(firstPost))

// ----- То же самое, с ЯВНЫМ возвратом объекта

	// const newPost = (post, addedAt = Date()) => {
	// 	const myPost = {
	// 	...post,
	// 	addedAt,
	// }
	// 	return myPost
	// }

	// const firstPost = {
	// 	id: 1,
	// 	author: 'Nick',
	// }

	// console.table(newPost(firstPost))

//  ----------------- Пример 3 ------------------

// ----- Пример 1: нормальное функциональное выражение

// 	const sayHi = function(name) {
// 		return name;
// 	}

// ----- Пример 2: стрелочная функция с явным возвратом

// Multi-line
// 	const sayHi = (name) => {
// 		return name;
// 	}
 
// Single-line
// 	const sayHi = (name) => { return name }

// ----- Пример 3: стрелочная функция с неявным возвратом

// Single-line
// 	const sayHi = (name) => name
 
// Multi-line
	// const sayHi = (name) => (
	// name = 'Hi, ' + name,
	// 		name
	// 	)
	// console.log(sayHi('Neks'))


//  -----------------------------13. Обработка ошибок--------------------------------------------
// ----------------------------------------------------------------------------------------------

//  --------------------- 1. Обработка ошибок ---------------------

	// const fnWithError = () => {
	// 	throw new Error('Some error')
	// }
	
	// fnWithError()

	// console.log('Continue... ')

	// ----- TRY/CATCH
	
	// try {
		// 	// Выполнение блока кода
		// } catch (error) {
	// 	// Этот блок выполняется в случае возникновения ошибок в блоке try
	// }

	// ----- Пример

	// const fnWithError = () => {
	// 	throw new Error('Some error')
	// }
	
	// try {
	// 	fnWithError()
	// } catch (error) {
	// 	console.error(error)
	// 	console.log(error.message)
	// }

	// console.log('Continue...')
	
//  ----------------------------------14. Инструкции---------------------------------------------
// ----------------------------------------------------------------------------------------------

//  --------------------- 1. Инструкции ---------------------

// 	let a;
// 	const b = 5;

// 	if (a > b) {
// 		console.log('a is larger');
// 	}

// 	for (let i = 0; i++; i < 5) {
// 		console.log(i);
// }

//  ---------------- 2. Выражения-инструкции ----------------

	// 'abc'
	// a = a + 3;
	// c = a + blur;
	// d = 'Good' + 'Evening';
	// myFunction(c, d);
	// console.log('Hey');

//  ---------- 3. Как отличить инструкцию от выражения ------

	// function myFn(a) {
	// 	console.log(a);
	// }

	// const b = true;
	// let c = 10;

	// myFn(2 + 3)
	// myFn(b)
	// myFn(c = c + 1)
	// myFn(c = c + 1;)
	// myFn(let d)

//  -----------------------------------15. Массивы-----------------------------------------------
// ----------------------------------------------------------------------------------------------

//  --------------------- 1. Массивы ------------------------------------

	// const myArray = [1, 2, 3]
	// console.log(myArray)

	// const myArray2 = new Array(1, 2, 3)
	// console.log(myArray2)

//  --------------------- 2. Оператор сравнения для массивов и объектов--

	// const myArray = [1, true, 'Sergey']
	// console.log(myArray)
	// console.log(myArray.length)

	// const myArray2 = [1, true, 'Sergey']
	// console.log(myArray === myArray2)
	// const myArray3 = myArray
	// console.log(myArray === myArray3)


//  --------------------- 3. Массив против Объекта ----------------------

	// ----- Массив
	// const myObject = {
	// 	0: 1,
	// 	1: 2,
	// 	2: 3,
	// 	length: 3
	// }
	// console.log(myObject)

	// ----- Объект
	// const myArray = [1, 2, 3]
	// console.log(myArray)

//  --------------------- 4. Как работать с элементами массива ----------

	// const myArray = [1, true, 'a']
	// console.log(myArray)

// ----- Чтение значений массива
	// console.log(myArray[0])
	// console.log(myArray[1])
	// console.log(myArray.length)

// ----- Длина массива

	// const myArray = [1, 2, 3, 4]
	// console.log(myArray)
	// console.log(myArray.length)

	// myArray[2] = 'abc'
	// console.log(myArray)
	// console.log(myArray[2])

	// myArray[4] = true

	// console.log(myArray)
	// console.log(myArray.length)

//  --------------------- 5. Методы массивов ----------------------------

	// ----- Метод PUSH (добавление элемента)
	// const myArray = [1, 2, 3]
	// console.log(myArray)

	// myArray.push(4)
	// console.log(myArray)

	// myArray.push(true)
	// console.log(myArray)
	
	// ----- Метод POP (удаление элемента)
	// const myArray = [1, 2, 3]
	// myArray.pop()
	// console.log(myArray)
	
	// const removedElement = myArray.pop()
	// console.log(myArray)
	// console.log(removedElement)
	
	// ----- Метод UNSHIFT (добавление элемента в начало массива)
	// const myArray = [1, 2, 3]
	// console.log(myArray)

	// myArray.unshift(true)
	// console.log(myArray)
	
	// myArray.unshift('abc')
	// console.log(myArray)

	// ----- Метод SHIFT (удвляет первый элемент в массиве)
	// const myArray = [1, 2, 3]
	// console.log(myArray)

	// myArray.shift(true)
	// console.log(myArray)
	
	// const removedElement = myArray.shift()
	// console.log(myArray)
	// console.log(removedElement)

//  --------------------- 6. Метод forEach ------------------------------

	// const myArray = [1, 2, 3, 10]
	// console.log(myArray)

	// myArray.forEach(el => console.log(el * 2))
	// console.log(myArray)

//  --------------------- 7. Метод map ----------------------------------

	// const myArray = [1, 2, 3]
	// console.log(myArray)

	// const newArray = myArray.map(el => el * 3)

	// console.log(newArray)
	// console.log(myArray)
	
	// ----- Пример 2
	// const myArray = [1, 2, 3]
	// console.log(myArray)

	// const newArray = myArray.map((el) => {
	// 	return el * 3
	// })

	// console.log(newArray)
	// console.log(myArray)

//  -----------------------------------16. Деструктуризация-----------------------------------------------
// ----------------------------------------------------------------------------------------------

//  --------------------- 1. Деструктуризация объектов ------------------------------------

	// ----- Пример 1
	// const userProfile = {
	// 	name: 'Sergey',
	// 	commentsQty: 24,
	// 	hasSignedAgreement: false
	// }

	// // Объявление новых переменных и присванивание значений на основе значений свойств объекта
	// const { name, commentsQty } = userProfile
	// const { hasSignedAgreement } = userProfile

	// console.log(name)
	// console.log(commentsQty)

	// ----- Тест
	// const userInfo = {
	// 	name: 'Sergey',
	// 	age: 32,
	// 	fromCity: 'Simferopol',
	// 	country: 'Russia',
	// }

	// const { name, age, fromCity, country} = userInfo
	// console.log(name)
	// console.log(age)
	// console.log(fromCity)
	// console.log(country)

//  --------------------- 2. Деструктуризация массивов ------------------------------------

	// ----- Пример 1
	// const fruits = ['Apple', 'Banana']

	// // Объявление новых переменных и присваивание значений на основе элементов массива
	// const [fruitOne, fruitTwo] = fruits

	// console.log(fruitOne)
	// console.log(fruitTwo)


	// ----- Тест
	// const iphones = ['iPhone14', 'iPhone14Pro', 'iPhone14ProMax']

	// const [iPhone14, iPhone14Pro, iPhone14ProMax] = iphones

	// console.log(iPhone14)
	// console.log(iPhone14Pro)
	// console.log(iPhone14ProMax)
	

//  ----------------- 3. Деструктуризация параметров функции ------------------------------

	// ----- Пример 1
	// const userProfile = {
	// 	name: 'Sergey',
	// 	commentsQty: 23,
	// 	hasSignedAgreement: false,
	// }

	//  const userInfo = ({ name, commentsQty }) => {   //Деструктуризация параметров
	// 	if (!commentsQty) {
	// 		return `User ${name} has no comments`
	// 	}

	// 	return `User ${name} has ${commentsQty} comments`
	//  }

	//  console.log(userInfo(userProfile))


	// ----- Тест
	// const userProfile = {
	// 	name: 'Sergey',
	// 	commentsQty: 23,
	// 	hasSignedAgreement: false,
	// }

	// const userInfo = ({ name, commentsQty }) => {
	// 	if (!commentsQty) {
	// 		return `User ${name} has no comments`
	// 	}
	// 	return `User ${name} has ${commentsQty} comments`
	// }

	// console.log(userInfo(userProfile))


//  -------------------------------17. Условные инструкции---------------------------------------
// ----------------------------------------------------------------------------------------------

//  ----------------------- 1. Условные инструкции ------------------------------------

	// ----- Инструкция IF
	// if (Условие) {
	// 	//Блок кода, выполняемый однократно, если условие правдиво
	// }

	// ----- Пример IF
	// let val = 10

	// if (val > 5) {
	// 	val += 20
	// }

	// console.log(val)

	// ----- Пример IF c оператором отрицания
	// const person = {
	// 	age: 20
	// }

	// if (!person.name) {
	// 	console.log('Имя не указано')
	// 	//Другие действия, в случае, если свойства "name"  у объекта нет
	// }


//  ----------------------- 2. Условная инструкция if else ----------------------------

	// ----- Инструкция IF ELSE
	// if (Условие) {
	// 	//Блок кода, выполняемый однократно, если условие правдиво
	// } else {
	// 	//Блок кода, выполняемый однократно, если условие ложно
	// }

	// ----- Пример IF ELSE
	// let val = 10

	// if (val < 5) {
	// 	val += 20
	// } else {
	// 	val -= 20
	// }

	// console.log(val)


//  ----------------------- 3. Условная инструкция if else if -------------------------

	// ----- Инструкция IF ELSE IF
	// if (Условие 1) {
	// 	//Блок кода, выполняемый однократно, если Условие 1 правдиво
	// } else if (Условие 2) {
	// 	//Блок кода, выполняемый однократно, если Условие 2 правдиво
	// } else {
	// 	//Блок кода, выполняемый однократно, если предыдущие условия ложны
	// }

	// ----- Пример IF ELSE IF
	// const age = 19

	// if (age > 18) {
	// 	console.log('Is adalt')
	// } else if (age >= 12) {
	// 	console.log('Is teenager')
	// } else {
	// 	console.log('Is child')
	// }


//  ----------------------- 4. Использование if в функциях ----------------------------

	// const sumPositiveNumbers = (a, b) => {
	// 	if (typeof a !== 'number' || typeof b !== 'number') {
	// 		return 'One of the arguments is not a number'
	// 	}

	// 	if (a <= 0 || b <= 0) {
	// 		return 'Numbers are not positive'
	// 	}

	// 	return a + b
	// }

	// console.log(sumPositiveNumbers(10, 5))
	// console.log(sumPositiveNumbers(10, true))
	// console.log(sumPositiveNumbers(-10, 6))


//  ----------------------- 5. Инструкция SWITCH --------------------------------------

	// ----- Инструкция SWITCH
	// switch (Выражение) {
	// 	case A:
	// 		// Действия если Выражение === А
	// 		break
	// 	case B:
	// 		// Действия если Выражение === B
	// 		break
	// 	default:
	// 		// Действия по умолчанию
	// }

	// ----- Пример SWITCH
	// const month = 12

	// switch (month) {
	// 	case 12:
	// 		console.log('Декабрь')
	// 		break
	// 	case 1:
	// 		console.log('Январь')
	// 		break
	// 	case 2:
	// 		console.log('Февраль')
	// 		break
	// 	default:
	// 		console.log('Это не зимний месяц')
	// }

//  ------------------------------- 18. Тернарный оператор --------------------------------------
// ----------------------------------------------------------------------------------------------

//  ----------------------- 1. Тернарный оператор ------------------------------------
	// Выражение
	// Условие ? Выражение 1 : Выражение 2
	/* Условие - Любое выражение
		 Выражение 1 - Если условие правдиво, тогда возвращается результат Выражения 1
		 Выражение 2 - Если условие ложно, тогда возвращается результат Выражения 2
	*/

	// ----- Предпочтительный формат записи
	// Условие
	// 	? Выражение 1
	// 	: Выражение 2


	// ----- Пример 1
	// const value = 11

	// value
	// 	? console.log('Условие истинно')
	// 	: console.log('Условие ложно')
		
	
	// ----- Пример 2
	// const value1 = 11
	// const value2 = 25

	// value1 && value2
	// 	? myFunction1(value1, value2)
	// 	: myFunction2()

	// ----- Пример 3
	// let value = 11
	// console.log(value >= 0 ? value : -value)

	// value = -5
	// const res = value >= 0 ? value : -value
	// console.log(res)


// --------------------------------------- 19. Циклы --------------------------------------------
// ----------------------------------------------------------------------------------------------

//  ----------------------- 1. Циклы -----------------------------------------

//  let i = 0
//  console.log(i) //выражение-инструкция
//  i++
//  console.log(i) 
//  i++
//  console.log(i) 
//  i++

 	// ----- Перебор всех элементов массива без цикла
	// const myArray = [true, 'abc', 10]

	// console.log(myArray[0])
	// console.log(myArray[1])
	// console.log(myArray[2])

 	// ----- Перебор всех свойств объекта без цикла
	// const myObject = {
	// 	x: 10,
	// 	y: true,
	// 	z: 'abc'
	// }

	// console.log(myObject.x)
	// console.log(myObject.y)
	// console.log(myObject.z)

//  ----------------------- 2. Цикл for --------------------------------------
// Все циклы - инструкции

// for (Начальная инструкция; Условие: Итерационное действие) {
// 	// Блок кода, выполняемый на каждой итерации
// }

	// for (let i = 0; i < 5; i++) {
	// 	console.log(i)
	// }


//  ----------------------- 3. Для перебора массивов не нужен for ------------
// Используйте функции высшего порядка массивов: forEach, map, reduce
	
	// ----- Цикл FOR для массивов
	// const myArray = ['first', 'second', 'third']

	// for (let i = 0; i < myArray.length; i++) {
	// 	console.log(myArray[i])
	// }

	// ----- Метод массивов FOREACH
	// const myArray = ['first', 'second', 'third']

	// myArray.forEach( (element, index) => {
	// 	console.log(element, index)
	// }) 


//  ----------------------- 4. Цикл while ------------------------------------
	// while (Условие) {
	// 	// Блок кода, выполняемый на каждой итерации
	// }

	// ----- Цикл WHILE
	// let i = 0

	// while (i < 5) {
	// 	console.log(i)
	// 	i++
	// }

//  ----------------------- 5. Цикл do while ---------------------------------
	// do {
	// 	// Блок кода, выполняемый на каждой итерации
	// } while (Условие)

	// ----- Пример 1
	// let i = 10

	// do {
	// 	console.log(i)
	// 	i++
	// } while (i < 5)

//  ----------------------- 6. Цикл for in -----------------------------------
	// for (key in Object) {
	// 	// Действия с каждым свойством объекта
	// 	// Значения свойства - Object[key]
	// }

	// ----- FOR IN для объектов
	// const myObject = {
	// 	x: 10, 
	// 	y: true,
	// 	z: 'abc'
	// }

	// for (const key in myObject) {
	// 	console.log(key, myObject[key])
	// }

//  ----------------------- 7. Методы keys и values для объектов -------------
	
	// ----- FOREACH для объектов
	// const myObject = {
	// 	x: 10,
	// 	y: true,
	// 	z: 'abc'
	// }

	// Object.keys(myObject).forEach(key => {
	// 	console.log(key, myObject[key])
	// })

	// ----- FOREACH для объектов
	// const myObject = {
	// 	x: 10,
	// 	y: true,
	// 	z: 'abc'
	// }
	// // Трансформируем объект в массиви перебираем его
	// Object.values(myObject).forEach(values => {
	// 	console.log(values)
	// })



	// ----- Метод массивов FOREACH
	// const myArray = [true, 10, 'abc', null]

	// myArray.forEach(element => {
	// 	console.log(element)
	// })
  
//  ----------------------- 8. Цикл for in для массивов ----------------------
	
	// ----- FOR IN для массивов (не рекомендуется, лучше foreach)
	// const myArray = [true, 10, 'abc', null]
	// for (const key in myArray) {
	// 	console.log(myArray[key])
	// }

	// ----- FOR IN для объектов
	// const myArray = [true, 10, 'abc', null]
	// for (const key in myArray) {
	// 	console.log(myArray[key])
	// }


//  ----------------------- 9. Цикл for of -----------------------------------

	// ----- ЦИКЛ FOR OF
	// for (Element of Iterable) {
	// 	// Действия с определенным элементов
	// }


	// ----- FOR OF для строк
	// const myString = 'Хоп, хэй, лалалэй'

	// for (const letter of myString) {
	// 	console.log(letter)
	// }


	// ----- FOR OF для массивов
	// const myArray = [true, 10, 'abc', null]

	// for (const element of myArray) {
	// 	console.log(element)
	// }


	// ----- FOR OF не для объектов
	// let myObject = {
	// 	x: 10,
	// 	y: true,
	// 	z: 'abc'
	// }

	// for (const prop of myObject) { // НЕЛЬЗЯ ИСПОЛЬЗОВАТЬ ДЛЯ ОБЪЕКТОВ
	// 	console.log(prop)
	// }


//  --------------------------------------- 20. Модули ------------------------------------------
// ----------------------------------------------------------------------------------------------

//  ----------------------- 1. Модули ---------------------------------------------

	// moduleOne.js
	// 	const myName = () => {
	// 		console.log('Sergey')
	// 	}
	// 	export default myName

	// moduleTwo.js
	// 	import printMyName from './moduleOne.js'
	// 	// Названия могут не совпадать. При импорте создаем функцию с новым названием, а испортируем myName,
	// 	//	т.к она экспортируется как default
	// 	printMyName() // Sergey


//  ----------------------- 2. Создание и запуск модулей с помощью Node -----------
//  ----------------------- 3. Несколько экспортов --------------------------------
//  ----------------------- 4. Правила работы с модулями --------------------------

	// 1. Модули должны быть одноцелевыми
	// 2. Распологайте все export инструкции внизу файла
	// 3. Располагаейте все import инструкции сверху файла
	// 4. По возможности используйте export default

//  ----------------------- 5. Практика по созданию нескольких экспортов ----------
//  ----------------------- 6. Как используются модули в React --------------------









//  -------------------------------  ---------------------------------------
// ----------------------------------------------------------------------------------------------

//  -----------------------  ------------------------------------

	// ----- Пример 1
	// ----- Тест



// Функция - это объект с медотодами. Например, Date() содержит методы (now: , parse: , ...)
// console.log() - метод log объекта console
// Все циклы - инструкции
// Практически все сущности в JS - объекты
// Объект - это набор свойств "имя: значение"
// Метод - свойство объекта, значение которого - функция

// Перебор массивов и объектов
// 	для массивов методы - foreach, map, index of
// 	для объектов - конвертация в массив используя: 
// 		Object.keys   - получите массив названий свойств объекта
// 		Object.values - массив значений свойств объекта
// 	далее переборы так же через foreach, map, index of
