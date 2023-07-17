// // import sum from './moduleOne.mjs'
// import sumNumbers from './moduleOne.mjs'

// // const res = sum(10, 2)
// const res = sumNumbers(10, 2)
// console.log(res)

// const res2 = sum(5, 10)
// console.log(res2)

// ----------несколько экспортов--------------

// import {
// 	one,
// 	two
// } from './moduleOne.mjs'

// console.log(one)
// console.log(two)

 
// ---------- переименование импортов --------------
// import {
// 	one as oneRenamed,
// 	two
// } from './moduleOne.mjs'

// console.log(oneRenamed)
// console.log(two)

// ---------- 5. Практика по созданию нескольких экспортов --------------

import { sum, mult} from './moduleOne.mjs'
import { sum, mult as multNumbers} from './moduleOne.mjs'

console.log(sum(10, 2))
// console.log(mult(10, 2))
console.log(multNumbers(10, 2))
