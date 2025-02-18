function validProposal(person1, person2){
  if(typeof(person1) !== "object" || typeof(person2) !== "object"){
    return '"Invalid"';
  }
  if(person1.gender !== person2.gender && Math.abs(person1.age - person2.age) <= 7){
   return 'true';
  }
  else{
    return 'false';
  }
}
let bioData1 = 
{ name: "toya", gender: "female", age: 24 }

let bioData2 = 'kiak'

let result = validProposal(bioData1, bioData2);
console.log(result);