// Holiday VIII - Duty Free

// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that 
// the savings over the normal high street price would effectively cover the cost of your holiday.
// You will be given the high street price (normPrice, in £ (Pounds)), the duty free discount (discount, in percent) and
// the cost of the holiday (in £).
// For example, if a bottle costs £10 normally and the duty free discount is 10%, you would save £1 per bottle. If your 
// holiday will cost £500, you would have to purchase 500 bottles to save £500, so the answer you return should be 500.
// Another example: if a bottle costs £12 normally and the duty free discount is 50%, you would save £6 per bottle.
// If your holiday will cost £1000, you would have to purchase 166.66 bottles to save £1000, so your answer should be 
// 166 bottles.
// All inputs will be integers. Please return an integer. Round down.

// Другой пример: если бутылка обычно стоит 12 фунтов стерлингов, а скидка в duty free составляет 50%, вы сэкономите
// 6 фунтов стерлингов за бутылку. Если ваш отпуск обойдется в 1000 фунтов стерлингов, вам придется приобрести 166,66
// бутылок, чтобы сэкономить 1000 фунтов стерлингов, поэтому ваш ответ должен быть 166 бутылок.
// Все входные данные будут целыми числами. Пожалуйста, верните целое число. Округлить вниз.


// function dutyFree(normPrice, discount, hol){

// }
// dutyFree(12, 50, 1000)		//166
// dutyFree(17, 10, 500)			//294
// dutyFree(24, 35, 3000)		//357


// ================================

// Вариант 1
function dutyFree(normPrice, discount, hol){
  return(Math.floor(hol / normPrice / discount * 100))
}

// // Вариант 2
// function dutyFree(normPrice, discount, hol) {
// 	let priceWithDiscount = normPrice / 100 * discount
// 	let bottleCount = hol / priceWithDiscount
// 	// console.log(Math.floor(bottleCount))
// 	return Math.floor(bottleCount)
// }

dutyFree(12, 50, 1000)		//166
dutyFree(17, 10, 500)			//294
dutyFree(24, 35, 3000)		//357