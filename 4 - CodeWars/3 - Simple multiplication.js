// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// function simpleMultiplication(number) {
// 	// your code........
// }
// simpleMultiplication(2) //16
// simpleMultiplication(1) //9
// simpleMultiplication(8) //64
// simpleMultiplication(4) //32
// simpleMultiplication(5) //45



// // ВАРИАНТ 1
// function simpleMultiplication(number) {
// 	if (number % 2 == 0) {
// 		console.log(number *= 8)
// 		return number *= 8		
// 	} else {
// 		console.log(number *= 9)
// 		return number *= 9
// 	}
	
// }
// simpleMultiplication(2)
// simpleMultiplication(1)
// simpleMultiplication(8)
// simpleMultiplication(4)
// simpleMultiplication(5)



// ВАРИАНТ 2
function simpleMultiplication(number) {
	// console.log(number % 2 ? number * 9 : number * 8)
	return number % 2 ? number * 9 : number * 8
}

simpleMultiplication(2)
simpleMultiplication(1)
simpleMultiplication(8)
simpleMultiplication(4)
simpleMultiplication(5)