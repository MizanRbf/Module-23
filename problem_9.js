// write a function that includes an object, show the price sum

const products = [
  { name: 'shampoo', price: 300 },
  { name: 'chiruni', price: 100 },
  { name: 'shirt', price: 700 },
  { name: 'pant', price: 1200 }
]

function getProductSum(productName){
  let total = 0;
for(let item of products){
 total = total + item.price;
}
return total;
}
let result = getProductSum(products);
console.log(result);