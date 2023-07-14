/** ЗАДАЧА 49 - Сортировка объектов в массиве
 *
 * 1. Создайте функцию "sortProductsByPrice" с одним параметром "products"
 *
 * 2. Эта функция должна отсортировать входной массив товаров
 * по цене каждого товара в порядке возрастания
 * и вернуть отсортированный массив
 *
 * 3. Оригинальный массив должен остаться без изменений
 */



const sortProductsByPrice = (products) => {
	const copyOfProducts = [ ...products]
	return copyOfProducts.sort( (a, b) => a.price - b.price)
}

// Сокращение кода выше:
// const sortProductsByPrice = (products) => [ ...products].sort( (a, b) => a.price - b.price)


const inputProducts = [
  {
    title: 'Phone case',
    price: 23,
    quantity: 2,
    category: 'Accessories',
  },
  {
    title: 'Android phone',
    price: 150,
    quantity: 1,
    category: 'Phones',
  },
  {
    title: 'Headphones',
    price: 78,
    quantity: 1,
    category: 'Accessories',
  },
  {
    title: 'Sport Watch',
    price: 55,
    quantity: 2,
    category: 'Watches',
  },
]

const sortedProducts = sortProductsByPrice(inputProducts)

console.log('Массив отсортированных товаров:') // Оригинальный массив не должен измениться
console.log(sortedProducts) // Массив отсортированных товаров

console.log('-------------------') // Оригинальный массив не должен измениться
console.log('Оригинальный массив:') // Оригинальный массив не должен измениться
console.log(inputProducts) // Оригинальный массив не должен измениться



// test sort
// const myNumbers = [50, 23, 29, 108, 10]
// console.log(myNumbers.sort( (a, b) => a - b))