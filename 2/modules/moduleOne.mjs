// const myName = 'Sergey'
// const sum = (a, b) => a + b

// export default sum 

// ----------несколько экспортов--------------

// const one = 1
// const two = 'two'

// export {
// 	one,
// 	two
// }

// ---------- 5. Практика по созданию нескольких экспортов --------------

const sum = (a, b) => a + b
const mult = (a, b) => a * b

export {
	sum,
	mult
}