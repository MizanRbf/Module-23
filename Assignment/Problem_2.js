function  validContact(contact){
  if(typeof(contact) !== "string"){
    return '"Invalid"';
  }
  let number = false;
  if(contact.length === 11 && contact.startsWith("01") && !contact.includes(" ") ){
    number = true;
  }
return number;
}
let result = validContact("01238865533");
console.log(result);