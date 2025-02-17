function checkDigitsInName(name){
  if(typeof name !== 'string'){
    return "Invalid Input";
  }
  let containsDigit = false;
for(let i = 0; i < name.length; i++){
  let char = name[i];
  if(!isNaN(char) && char !== " "){
  containsDigit = true;
  break;
  }
}
return containsDigit;
}
let result = checkDigitsInName('4Mizan');
console.log(result);