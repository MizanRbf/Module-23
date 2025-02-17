function calculateTax(income, expenses){
  if(typeof income !=='number' || typeof expenses !== 'number' || income < 0 || expenses < 0 || expenses > income){
  return "Invalid Input";
  }
let substract = income - expenses;
let tax = substract * 20 / 100;
return tax;
}
let result = calculateTax(10000, 3000);
console.log(result);