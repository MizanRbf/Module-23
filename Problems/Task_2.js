// Find the friend with the smallest name.

function smallestName(str){
  let smallestName = "";
  smallestName = str[0];
  for(let name of str){
    if(name.length < smallestName.length){
      smallestName = name;
    }
  }
  return smallestName;
}

let result = smallestName(['rahim', 'robin', 'rafi', 'ron', 'em', 'rashed']);
console.log(result);