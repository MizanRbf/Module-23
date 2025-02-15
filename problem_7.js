// which one is the lowest price in an array

function lowestPrice(prices){
  let lowest = prices[0];
for(let price of prices){
if(price < lowest){
  lowest = price;
}
}
return lowest;
}
let result = lowestPrice([2999, 3333, 2000, 4000, 5000]);
console.log(result);