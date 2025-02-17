// Which one will get highest marks,get mango ; between two student
function students(mark1, mark2){
if (mark1 > mark2){
  return mark1;
}
else{
  return mark2;
}
}
let result = students(70, 80);
console.log(result, 'will get mango');
