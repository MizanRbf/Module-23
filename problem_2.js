// Which one will get highest marks,get mango ; among three student

function students(mark1, mark2, mark3){
  if (mark1 > mark2 && mark1 > mark3){
    let mark1 = 'salman';
    return mark1;
  }
  else if(mark2 > mark1 && mark2 > mark3){
    let mark2 = 'Mizan';
    return mark2;
  }
  else {
    let mark3 = 'Rakib';
    return mark3;
  }
  }
  let result = students(30, 90, 80);
  console.log(result, 'will get mango');
