function calculateSleepTime(times){
if(!Array.isArray(times)){
  return "Invalid";
}
let totalSeconds = 0;
for(let time of times){
totalSeconds = time + totalSeconds;
if(typeof(time) !== 'number'){
  return "Invalid";
}
}
let hour = totalSeconds / 3600;
let minute = (totalSeconds % 3600) / 60;
let second = totalSeconds % 60;
let totalTimes = {
  hour: parseInt(hour),
  minute: parseInt(minute),
  second: parseInt(second)
}
return totalTimes;
}
let result = calculateSleepTime([100,3800,"90"]);
console.log(result);