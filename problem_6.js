// shirt price 500, pant price - 300, shoe price- 900 ; product quantity and total price

function getProductQuantity(shirtQuantity, pantQuantity, shoeQuantity){
const shirtPrice = 500;
const pantPrice = 900;
const shoePrice = 1500;
let shirtTotalQuantity = shirtQuantity * shirtPrice;
let pantTotalQuantity = pantQuantity * pantPrice;
let shoeTotalQuantity = shoeQuantity * shoePrice;

const totalQuantityAndPrice = shirtTotalQuantity + pantTotalQuantity + shoeTotalQuantity;
return totalQuantityAndPrice;
}
let totalPrice = getProductQuantity(4, 2, 1);
console.log(totalPrice);