function willSuccess(marks){
  if(!Array.isArray(marks)){
    return '"Invalid"';
  }
   let passMark = 0;
   let failMark = 0;
  for(let mark of marks){
    if(typeof(mark) !== 'number'){
      return "only granted number";
     }
    if(mark >= 50 ){
      passMark++;
    }
    else{
      failMark++;
    }
  }
  if(passMark > failMark){
  return 'true';
  }
  else{
    return 'false';
  }
}
let result = willSuccess([60,55]);
console.log(result);