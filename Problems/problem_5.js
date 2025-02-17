// Write a function that includes woodQuantity and show total wood. 

function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
let chair = 3;
let table = 10;
let bed = 50;
let totalChairQuantity = chairQuantity * chair;
let totalTableQuantity = tableQuantity * table;
let totalBedQuantity = bedQuantity * bed;

let totalWoodQuantity = totalChairQuantity + totalTableQuantity + totalBedQuantity;
return totalWoodQuantity;

}
let totalWood = woodQuantity(4, 3, 5);
console.log(totalWood);