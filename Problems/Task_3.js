// Your task is to calculate the total budget required to buy electronics:

// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

function calculateElectronicsBudget(object){
  let total = 0;
  for(let item of object){
   total = total + item.price
  }
 return total;
}
let electronics = [
  {name: 'laptop', price: 35000},
  {name: 'laptop', price: 35000},
  {name: 'tablet', price: 15000},
  {name: 'mobile', price: 20000},
] 

let result = (calculateElectronicsBudget(electronics));
console.log('total:', result);
  
