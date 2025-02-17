// write a function that includes an object, show the price sum and quantity

const products = [
  { name: 'shampoo', price: 300, quantity: 4 },
  { name: 'chiruni', price: 100, quantity: 3 },
  { name: 'shirt', price: 700, quantity: 2 },
  { name: 'pant', price: 1200, quantity: 5 }
]
function cartTotal(products){
  let total = 0;
for(let product of products){
  let quantityTotal = product.price * product.quantity;
 total = total + quantityTotal;
}
return total;
}
let shopingCost = cartTotal(products);
console.log(shopingCost);