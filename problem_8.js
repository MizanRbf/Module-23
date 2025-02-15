// show the expensive phone from an declared object.
const mobiles = [
  {name:'Samsung', price: 20000, camera: '12mp', color:'black'},
  {name:'xoami', price: 18000, camera: '12mp', color:'black'},
  {name:'Oppo', price: 30000, camera: '12mp', color:'black'},
  {name:'Iphone', price: 15000, camera: '12mp', color:'black'},
  {name:'Walton', price: 31000, camera: '12mp', color:'black'},
  {name:'Realme', price: 27000, camera: '12mp', color:'black'}
]
function getExpensivePhone(phones){
  let expensivePhone = phones[0];
for(let phone of phones){
  if(phone.price > expensivePhone.price){
    expensivePhone = phone;
  }
}
return expensivePhone;
}
let result = getExpensivePhone(mobiles);
console.log(result);