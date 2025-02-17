// Layered discount
/*
* first100 --> 100
* 101-200 --> 90
* above 200 --> 70
*/
function layeredDiscountTotal(quantity){
const first100Price = 100;
const second100Price = 90;
const above200Price = 70;
if(quantity <= 100){
let total = quantity * first100Price;
return total;
}
else if(quantity <= 200){
let first100total = 100 * first100Price;
let remainingQuantity = quantity - 100;
let remainingTotal = remainingQuantity * second100Price;
let total = first100total + remainingTotal;
return total;
}
else{
  let first100total = 100 * first100Price;
  let second100total = 100 * second100Price;
  let above200Quantity = quantity - 200;
  let above200Total = above200Price * above200Quantity;
  let total = first100total + second100total + above200Total;
  return total;
}
}
let totalPrice = layeredDiscountTotal(50);
console.log(totalPrice);