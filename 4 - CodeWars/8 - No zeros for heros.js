// // No zeros for heros
// Numbers ending with zeros are boring.
// They might be fun in your world, but not here.
// Get rid of them. Only the ending ones.

// function noBoringZeros(n) {
//   // your code
// }

// noBoringZeros(1450)			//145
// noBoringZeros(960000)		//96
// noBoringZeros(1050)			//105
// noBoringZeros(-1050)		//-105
// noBoringZeros(-105)			//-105
// noBoringZeros(0)				//0

// ==============================

function noBoringZeros(n) {
		while( n % 10 == 0 && n != 0 ) { n /= 10; }
		// console.log(n)
		return n;
}

noBoringZeros(1450)			//145
noBoringZeros(960000)		//96
noBoringZeros(1050)			//105
noBoringZeros(-1050)		//-105
noBoringZeros(-105)			//-105
noBoringZeros(0)				//0