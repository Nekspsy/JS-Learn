// For this problem you must create a program that says who ate the last cookie. If the input is a string then "Zach"
// ate the cookie. If the input is a float or an int then "Monica" ate the cookie. If the input is anything else "the dog"
// ate the cookie. The way to return the statement is: "Who ate the last cookie? It was (name)!"
// Ex: Input = "hi" --> Output = "Who ate the last cookie? It was Zach! (The reason you return Zach is because the input is
// a string)
// Note: Make sure you return the correct message with correct spaces and punctuation.

// function cookie(x){
//   // ...
// }
// cookie("Ryan")		// Who ate the last cookie? It was Zach!
// cookie(26) 				// Who ate the last cookie? It was Monica!
// cookie(2.3)				// Who ate the last cookie? It was Monica!
// cookie(true)			// Who ate the last cookie? It was the dog!



// Вариант 1
function cookie(x) {
	let t = typeof x
	let who = t == 'string' ? 'Zach' : t == 'number' ? 'Monica' : 'the dog'
	// console.log(who)
	return `Who ate the last cookie? It was ${who}!`
}
cookie("Ryan")		// "Who ate the last cookie? It was Zach!
cookie(26) 				// "Who ate the last cookie? It was Monica!
cookie(2.3)				// "Who ate the last cookie? It was Monica!
cookie(true)			// "Who ate the last cookie? It was the dog!



// // Вариант 2
// function cookie(x) {
//   if (typeof x === 'string') {
// 		// console.log('Who ate the last cookie? It was Zach!')
// 		return "Who ate the last cookie? It was Zach!"
// 	} else if (typeof x === 'number') {
// 		// console.log('Who ate the last cookie? It was Monica!')
// 		return "Who ate the last cookie? It was Monica!"
// 	} else if (typeof x === 'boolean') {
// 		// console.log('Who ate the last cookie? It was the dog!')		
// 		return "Who ate the last cookie? It was the dog!"	
// 	}
// }
// cookie("Ryan")		// "Who ate the last cookie? It was Zach!")
// cookie(26) 				// "Who ate the last cookie? It was Monica!")
// cookie(2.3)				// "Who ate the last cookie? It was Monica!")
// cookie(true)			// "Who ate the last cookie? It was the dog!")
