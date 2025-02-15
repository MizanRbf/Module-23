// which one is the lowest number in a array?

function lowestNum(numbers){
let lowest = numbers[0];
for(let num of numbers){
if(num < lowest){
  lowest = num;
}
}
return lowest;
}
let result = lowestNum([22, 34, 9, 66, 10]);
console.log(result);