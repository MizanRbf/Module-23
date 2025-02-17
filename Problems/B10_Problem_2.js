function sendNotification(email){
  if(!email.includes('@')){
   return "Invalid Input";
  }
  let splitted = email.split("@");
  const userName = splitted[0];
  const domain = splitted[1];
  let newUserName = userName + ' sent you a email from ' + domain;
  // let newUserName = userName + ' '+ 'sent you a email from'+ ' ' + domain;
  return newUserName;

}
let result = sendNotification('mizanrbf@gmail.com');
console.log(result);