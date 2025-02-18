function validProposal(person1, person2){
  if(typeof(person1) !== "object" || typeof(person2) !== "object"){
    return "Invalid";
  }
  if(person1.gender !== person2.gender && Math.abs(person1.age - person2.age) <= 7){
   return 'true';
  }
  else{
    return 'false';
  }
}

let bioData1 = {
  name: "Mizan",
  gender: "mail",
  age: 27
}
let bioData2 = {
  name: "Fatema",
  gender: "femail",
  age: 20
}

let result = validProposal(bioData1, bioData2);
console.log(result);