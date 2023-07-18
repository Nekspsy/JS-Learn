// firstLetterToUppercase 

// function capitalizeWord(word) {
//   word[0].toUpperCase();
//   return word;
// }
// capitalizeWord('word')
// capitalizeWord('i')
// capitalizeWord('glasswear')


function capitalizeWord(word) {
  word = word.charAt(0).toUpperCase() + word.slice(1)
	console.log(word)	
	return word
}

capitalizeWord('word')
capitalizeWord('i')
capitalizeWord('glasswear')