// Find the lowest number in the array below.

function lowestNum(numbers){
  let lowestNum = 0;
  lowestNum = numbers[0];
  for(let num of numbers){
  if(num < lowestNum){
    lowestNum = num;
  }
  }
  return lowestNum;
}
const heights2 = lowestNum([167, 190, 120, 165, 110]);
console.log(heights2);

