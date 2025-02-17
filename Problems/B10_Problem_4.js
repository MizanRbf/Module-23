let information = {
  name: 'Mizan',
  testScore: 45,
  schoolGrade: 25,
  isFFamily: true
}
function calculateFinalScore(obj){
let finalScore = obj.testScore + obj.schoolGrade;
 
}
let result = calculateFinalScore(information);
console.log(result);