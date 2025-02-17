// take a array containing some women names and make another array with some women names containing letter 'h'

function patriList(names){
let wantedNames = [];
for(let name of names){
if(name.includes('h') || name.includes('H')){
  wantedNames.push(name);
}
}
return wantedNames;
}
let result = patriList(['Selina', 'Jorina', 'Sokina', 'Helena', 'Humaira', 'Mahbuba']);
console.log(result);