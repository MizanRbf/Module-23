// Which one will get highest marks get mango ; among all student

let students = [
  {Name:"Nahid", Marks: 200},
  {Name:"Rakib", Marks: 300},
  {Name:"Rifat", Marks: 400},
  {Name:"Salem", Marks: 500},
  {Name:"Mizan", Marks: 600},
];

function highestMarks(students){
  let highest = 0;
for(let mark of students){
 if(highest < mark.Marks){
  highest = mark.Marks;
 }
}
return highest;
}
let result = highestMarks(students);
console.log(result); 