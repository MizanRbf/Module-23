function willSuccess(marks){
  if(!Array.isArray(marks)){
    return "Invalid";
  }
   let passMarkCount = 0;
   let failMarkCount = 0;
  for(let mark of marks){
    if(typeof(mark) !== 'number'){
      return "only granted number";
     }
    if(mark >= 50 ){
    passMarkCount++;
    }
    else{
      failMarkCount++
    }
  }
  if(passMarkCount > failMarkCount){
  return 'true';
  }
  else{
    return 'false';
  }
}
let result = willSuccess([77, 80, 50, 30, 30]);
console.log(result);