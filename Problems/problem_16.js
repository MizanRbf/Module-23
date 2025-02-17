// Show invalid input

let patri1 = {
  name: "Rehana",
  father: "Omuk",
  homeDistrict: "Dhaka",
  age: 23
}
let patri2 = {
  name: "Halima",
  father: "Tomuk",
  homeDistrict: "Dhaka",
  age: 20
}
function sendProposal(bio1, bio2){
if(typeof bio1 === 'object' && typeof bio2 === 'object' && !Array.isArray(bio1,bio2) && !Array.isArray(bio2)){
  if(patri1.homeDistrict === patri2.homeDistrict){
    return "proposal done";
  }
  else{
    return "nooooooooo";
  }
}
else{
  return 'Invalid Input';
}

}
let result = sendProposal(patri1, patri2);
console.log(result);