// discounted calculator
/*
* upto 100: ---> 100
* more than 101-200: ---> 90
* more than 200: ---> 70
*/
function discountPrice(productsQuantity){
if(productsQuantity <= 100){
  let total = productsQuantity * 100;
  return total;
}
else if(productsQuantity <= 200){
  let total = productsQuantity * 90;
  return total;
}
else{
  let total = productsQuantity * 70;
  return total;
}

}
let totalPrice = discountPrice(100);
console.log(totalPrice);