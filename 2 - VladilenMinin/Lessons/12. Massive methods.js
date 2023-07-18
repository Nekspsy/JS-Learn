// forEach, map, filter, reduce, find, findIndex

const people = [
  { name: "Илон", age: 25, budget: 40000 },
  { name: "Елена", age: 17, budget: 3400 },
  { name: "Михаил", age: 49, budget: 50000 },
  { name: "Игорь", age: 15, budget: 1800 },
  { name: "Виктория", age: 34, budget: 25000 },
  { name: "Александр", age: 28, budget: 2500 },
];

	// for (let i = 0; i < people.length; i++) {
	// 	console.log(people[i])
	// }

	// for (let person of people) {
	// 	console.log(person)
	// }



// //	forEach
	// people.forEach(person => console.log(person));



// //	Map
	// 	const newPeople = people.map( person => {
	// 		return person
	// 	})
	// 	console.log(newPeople)



// //	Filter
	// const adults = []
	// for (let i = 0; i < people.length; i++) {
	// 	if (people[i].age >= 18) {
	// 		adults.push(people[i])
	// 	}
	// }
	// console.log(adults)

	// Используем filter
	// const adults = people.filter( person => {
	// 	if (person.age >= 18) {
	// 		return true
	// 	}
	// })
	// console.log(adults)

	// Cократим:
	// const adults = people.filter( person => person.age >= 18)
	// console.log(adults)



// //	Reduce
	// let amount = 0
	// for (let i = 0; i < people.length; i++) {
	// 	amount += people[i].budget
	// }
	// console.log(amount)

	// Используем reduce
	// const amount = people.reduce( (total, person) => {
	// 	return total += person.budget
	// }, 0)
	// console.log(amount)



// //	Find
	// const igor = people.find(person => {
	// 	if ( person.name === 'Игорь' ){
	// 		return true
	// 	}
	// })
	// console.log(igor)

	// Сократим
	// const igor = people.find(person => person.name === 'Игорь')
	// console.log(igor)



// //	FindIndex
	// const igorIndex = people.findIndex(person => person.name === 'Игорь')
	// console.log(igorIndex)



// ==============



// const newPeople = people
//   .filter(person => person.budget > 3000)
//   .map(person => {
//     return {
//       info: `${person.name} (${person.age})`,
//       budget: person.budget,
//     }
//   })

// console.log(people)
// console.log(newPeople)



// const amount = people
//   .filter(person => person.budget > 3000)
//   .map(person => {
//     return {
//       info: `${person.name} (${person.age})`,
//       budget: person.budget,
//     }
//   })

// 	.reduce( (total, person) => total + person.budget, 0)

// console.log(amount)

